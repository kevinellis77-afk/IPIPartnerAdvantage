(function () {
  /**
   * @typedef {Object} ResearchEvidenceItem
   * @property {string} statement
   * @property {'confirmed'|'inferred'|'unknown'} confidence
   * @property {string[]} [sources]
   */

  /**
   * @typedef {Object} ResearchSection
   * @property {string} title
   * @property {ResearchEvidenceItem[]} items
   */

  /**
   * @typedef {Object} OutreachTemplate
   * @property {string} title
   * @property {string} channel
   * @property {string} body
   */

  /**
   * @typedef {Object} CompanyResearchResponse
   * @property {string} generatedAt
   * @property {string} model
   * @property {ResearchSection} companySummary
   * @property {ResearchSection} servicesCapabilities
   * @property {ResearchSection} likelyVendors
   * @property {ResearchSection} ipiSuitability
   * @property {ResearchSection} recommendedPartnerMotion
   * @property {ResearchSection} suggestedTier
   * @property {ResearchSection} keyContactsToTarget
   * @property {ResearchSection} suggestedDiscussionThemes
   * @property {{ templates: OutreachTemplate[] }} outreachTemplates
   * @property {string[]} unknowns
   */

  function valueOrUnknown(value) {
    return value ? String(value).trim() : 'Unknown';
  }

  function buildResearchPrompt(company) {
    const context = {
      companyName: valueOrUnknown(company.displayName || company.name),
      website: valueOrUnknown(company.website),
      linkedinUrl: valueOrUnknown(company.linkedin),
      description: valueOrUnknown(company.keywords),
      location: valueOrUnknown(company.displayLocation),
      size: valueOrUnknown(company.displayEmployees),
      category: valueOrUnknown(company.category),
      industry: valueOrUnknown(company.industry),
      channelRole: valueOrUnknown(company.channel_role),
      channelSegment: valueOrUnknown(company.channel_segment),
      existingScore: valueOrUnknown(company.idealPartnerScore),
      scoreBreakdown: Array.isArray(company.scoreBreakdown) ? company.scoreBreakdown : [],
      adopterProfile: valueOrUnknown(company.adopter_profile),
      knownNotes: valueOrUnknown(company.tech_stack),
      contacts: Array.isArray(company.contacts) ? company.contacts : []
    };

    const instructions = `You are an expert channel sales and partner strategy analyst for IP Integration.

Research the following company using:
1) the supplied structured company data and
2) publicly available information.

Primary fields to prioritise: company name and website.

Return a structured assessment covering:
1. A concise summary of the business
2. Core services and capabilities
3. Likely technology vendors/ecosystems in use
4. Suitability as an IPI partner
5. Suggested partner type and priority tier
6. Key contacts or personas to approach (name where verifiable, otherwise persona)
7. Suggested outreach themes for opening engagement
8. Two outreach templates (email + LinkedIn)

Important rules:
- Distinguish confirmed facts from reasonable inference
- Do not invent people or partnerships
- If a detail cannot be verified, say so
- Keep output concise, commercially useful, practical for a channel manager
- Return only structured JSON matching the requested schema`;

    const responseSchema = {
      generatedAt: 'ISO-8601 string',
      model: 'string',
      companySummary: { title: 'Company Summary', items: [{ statement: 'string', confidence: 'confirmed|inferred|unknown', sources: ['fieldName'] }] },
      servicesCapabilities: { title: 'Services / Capabilities', items: [] },
      likelyVendors: { title: 'Vendors They May Work With', items: [] },
      ipiSuitability: { title: 'Suitability as an IPI Partner', items: [] },
      recommendedPartnerMotion: { title: 'Recommended Partner Type / Motion', items: [] },
      suggestedTier: { title: 'Suggested Tier', items: [] },
      keyContactsToTarget: { title: 'Key Contacts to Target', items: [] },
      suggestedDiscussionThemes: { title: 'Suggested Discussion Themes', items: [] },
      outreachTemplates: { templates: [{ title: 'string', channel: 'email|linkedin|call', body: 'string' }] },
      unknowns: ['string']
    };

    return {
      context,
      systemPrompt: instructions,
      expectedJsonSchema: responseSchema,
      backendPromptTemplate: `${instructions}\n\nCompany data:\n{{company_json}}`
    };
  }

  function asItem(statement, confidence, sources) {
    return { statement, confidence, sources: sources || [] };
  }

  function getResearchConfig() {
    const config = window.PROSPECT_RESEARCH_CONFIG || {};
    return {
      endpoint: typeof config.endpoint === 'string' ? config.endpoint : '',
      openAiApiKey: typeof config.openAiApiKey === 'string' ? config.openAiApiKey : '',
      openAiModel: typeof config.openAiModel === 'string' ? config.openAiModel : 'gpt-4.1-mini'
    };
  }

  function buildOpenAiSchema() {
    return {
      type: 'object',
      additionalProperties: false,
      properties: {
        generatedAt: { type: 'string' },
        model: { type: 'string' },
        companySummary: { $ref: '#/$defs/section' },
        servicesCapabilities: { $ref: '#/$defs/section' },
        likelyVendors: { $ref: '#/$defs/section' },
        ipiSuitability: { $ref: '#/$defs/section' },
        recommendedPartnerMotion: { $ref: '#/$defs/section' },
        suggestedTier: { $ref: '#/$defs/section' },
        keyContactsToTarget: { $ref: '#/$defs/section' },
        suggestedDiscussionThemes: { $ref: '#/$defs/section' },
        outreachTemplates: {
          type: 'object',
          additionalProperties: false,
          properties: {
            templates: {
              type: 'array',
              items: {
                type: 'object',
                additionalProperties: false,
                properties: {
                  title: { type: 'string' },
                  channel: { type: 'string', enum: ['email', 'linkedin', 'call'] },
                  body: { type: 'string' }
                },
                required: ['title', 'channel', 'body']
              }
            }
          },
          required: ['templates']
        },
        unknowns: { type: 'array', items: { type: 'string' } }
      },
      required: ['generatedAt', 'model', 'companySummary', 'servicesCapabilities', 'likelyVendors', 'ipiSuitability', 'recommendedPartnerMotion', 'suggestedTier', 'keyContactsToTarget', 'suggestedDiscussionThemes', 'outreachTemplates', 'unknowns'],
      $defs: {
        evidenceItem: {
          type: 'object',
          additionalProperties: false,
          properties: {
            statement: { type: 'string' },
            confidence: { type: 'string', enum: ['confirmed', 'inferred', 'unknown'] },
            sources: { type: 'array', items: { type: 'string' } }
          },
          required: ['statement', 'confidence', 'sources']
        },
        section: {
          type: 'object',
          additionalProperties: false,
          properties: {
            title: { type: 'string' },
            items: { type: 'array', items: { $ref: '#/$defs/evidenceItem' } }
          },
          required: ['title', 'items']
        }
      }
    };
  }

  function parseModelJson(rawContent) {
    if (!rawContent) throw new Error('Empty model response content.');
    if (typeof rawContent === 'string') return JSON.parse(rawContent);
    if (Array.isArray(rawContent)) {
      const textBlock = rawContent.find((item) => item && item.type === 'text');
      if (textBlock?.text) return JSON.parse(textBlock.text);
    }
    throw new Error('Unable to parse model JSON response.');
  }

  async function callOpenAi(company, prompt, config) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.openAiApiKey}`
      },
      body: JSON.stringify({
        model: config.openAiModel,
        temperature: 0.2,
        messages: [
          { role: 'system', content: prompt.systemPrompt },
          {
            role: 'user',
            content: `Research this company and return JSON only.\n\nCompany Name: ${valueOrUnknown(company.displayName || company.name)}\nWebsite: ${valueOrUnknown(company.website)}\n\nStructured company data:\n${JSON.stringify(prompt.context, null, 2)}`
          }
        ],
        response_format: {
          type: 'json_schema',
          json_schema: {
            name: 'company_research',
            strict: true,
            schema: buildOpenAiSchema()
          }
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenAI request failed (${response.status}): ${errorText.slice(0, 240)}`);
    }

    const completion = await response.json();
    const content = completion?.choices?.[0]?.message?.content;
    const research = parseModelJson(content);
    return { research, prompt };
  }

  async function callBackend(prompt, endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Research backend failed (${response.status}): ${errorText.slice(0, 240)}`);
    }
    return response.json();
  }

  async function researchCompany(company) {
    const prompt = buildResearchPrompt(company);
    const config = getResearchConfig();

    if (config.openAiApiKey) {
      return callOpenAi(company, prompt, config);
    }

    if (config.endpoint) {
      return callBackend(prompt, config.endpoint);
    }

    // Fallback mock for local demos when live configuration has not been provided.

    await new Promise((resolve) => setTimeout(resolve, 900));
    const contact = company.contacts && company.contacts[0];

    /** @type {CompanyResearchResponse} */
    const mock = {
      generatedAt: new Date().toISOString(),
      model: 'mock-research-v1',
      companySummary: {
        title: 'Company Summary',
        items: [
          asItem(`${company.displayName} appears to operate in ${valueOrUnknown(company.industry)} with a ${valueOrUnknown(company.channel_role)} focus.`, 'confirmed', ['industry', 'channel_role']),
          asItem(`Digital footprint indicates a partner-oriented profile with ${company.hasWebsite ? 'website' : 'no website'} and ${company.hasLinkedIn ? 'LinkedIn presence' : 'limited LinkedIn visibility'}.`, 'confirmed', ['website', 'linkedin'])
        ]
      },
      servicesCapabilities: {
        title: 'Services / Capabilities',
        items: [
          asItem(`Likely capabilities include: ${valueOrUnknown(company.tech_stack || company.keywords || 'No explicit capability tags')}.`, company.tech_stack || company.keywords ? 'confirmed' : 'unknown', ['tech_stack', 'keywords'])
        ]
      },
      likelyVendors: {
        title: 'Vendors They May Work With',
        items: [
          asItem('Likely aligned with UCaaS/CCaaS and managed service ecosystems based on channel positioning.', 'inferred', ['channel_role', 'channel_segment'])
        ]
      },
      ipiSuitability: {
        title: 'Suitability as an IPI Partner',
        items: [
          asItem(`Current score ${valueOrUnknown(company.idealPartnerScore)} suggests ${valueOrUnknown(company.partnerTierName)} potential.`, 'confirmed', ['idealPartnerScore', 'partnerTierName']),
          asItem('Further qualification needed on active vendor portfolio and service delivery maturity.', 'inferred', ['partners', 'tech_stack'])
        ]
      },
      recommendedPartnerMotion: {
        title: 'Recommended Partner Type / Motion',
        items: [
          asItem('Run a consultative discovery motion centred on customer outcomes, operational simplification, and AI-readiness.', 'inferred', ['industry', 'adopter_profile'])
        ]
      },
      suggestedTier: {
        title: 'Suggested Tier',
        items: [
          asItem(company.partnerTier?.label || 'Tier to be determined after validation.', company.partnerTier ? 'confirmed' : 'unknown', ['idealPartnerScore'])
        ]
      },
      keyContactsToTarget: {
        title: 'Key Contacts to Target',
        items: [
          asItem(contact ? `${contact.name || contact.email} (${contact.role || 'Role unknown'})` : 'Identify owner for partnerships, CX transformation, or commercial growth.', contact ? 'confirmed' : 'unknown', ['contacts'])
        ]
      },
      suggestedDiscussionThemes: {
        title: 'Suggested Discussion Themes',
        items: [
          asItem('Co-sell model and route-to-market fit for ElasticCX and managed CX services.', 'inferred', ['channel_segment']),
          asItem('Enablement requirements, sales readiness, and technical onboarding milestones.', 'inferred', ['adopter_profile'])
        ]
      },
      outreachTemplates: {
        templates: [
          {
            title: 'Initial partner introduction email',
            channel: 'email',
            body: `Subject: Exploring a partner collaboration with ${company.displayName}\n\nHi {{FirstName}},\n\nI noticed ${company.displayName}'s work in ${valueOrUnknown(company.industry)} and thought there may be strong alignment with IPI's CX and cloud collaboration propositions.\n\nWould you be open to a short discussion on partner fit and joint customer opportunities?\n\nBest regards,\n{{YourName}}`
          },
          {
            title: 'LinkedIn connection message',
            channel: 'linkedin',
            body: `Hi {{FirstName}}, I work with IPI on partner growth. Based on ${company.displayName}'s profile, I think there may be mutual value in a short intro around CX/UC collaboration. Open to connect?`
          }
        ]
      },
      unknowns: [
        ...(!company.partners ? ['Current strategic vendor partnerships not explicitly provided.'] : []),
        ...(!company.tech_stack ? ['Detailed solution stack and certifications are unknown.'] : [])
      ]
    };

    return { research: mock, prompt };
  }

  window.ProspectResearch = {
    buildResearchPrompt,
    researchCompany
  };
})();
