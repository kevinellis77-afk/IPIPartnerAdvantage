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

Research the following company using the supplied company data and any publicly available information accessible to you.

Your task is to assess whether this company is a strong candidate to become an IP Integration partner.

Return a structured assessment covering:
1. A concise summary of the company
2. Core services and capabilities
3. Relevant technology, CX, UC, cloud, contact centre, managed service, or integration focus areas
4. Known or likely vendor relationships
5. Suitability to become an IPI partner, with rationale
6. The most likely partner type:
   - CCaaS Reseller
   - MSP
   - Solution Provider
   - Consultant
   - Other
7. Recommended priority/tier with rationale
8. Likely key buyer/contact personas to approach
9. Suggested discussion themes for first engagement
10. Two outreach templates:
   - email
   - LinkedIn message

Important rules:
- Distinguish confirmed facts from reasonable inference
- Do not invent people or partnerships
- If something cannot be verified, say so
- Keep the output concise, commercially useful, and practical for a channel manager
- Return the result as structured JSON`;

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

  async function researchCompany(company) {
    const prompt = buildResearchPrompt(company);

    // INTEGRATION POINT:
    // Replace this mock implementation with a real API call to your backend endpoint.
    // Example:
    // const response = await fetch('/api/research/company', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ prompt })
    // });
    // const result = await response.json();
    // return result;

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
