(function () {
  const DATASET_URL = "./channel_prospects.json";

  const IPP_TURNOVER_OPTIONS = [
    { id: 'under_10m', label: 'Under £10M', score: 6, min: 0, max: 10000000 },
    { id: 'between_10m_50m', label: '£10M – £50M', score: 10, min: 10000000, max: 50000000 },
    { id: 'over_50m', label: 'Over £50M', score: 3, min: 50000000, max: Infinity },
  ];
  const IPP_EMPLOYEE_OPTIONS = [
    { id: 'sub_50', label: 'Sub 50', score: 6, min: 0, max: 50 },
    { id: 'between_50_500', label: '50 – 500', score: 10, min: 50, max: 500 },
    { id: 'over_500', label: 'Over 500', score: 3, min: 500, max: Infinity },
  ];
  const IPP_SERVICE_AREAS = [
    { label: 'Cloud', score: 10, keywords: ['cloud', 'cloud services', 'cloud cx', 'cloud communications'] },
    { label: 'UC', score: 10, keywords: ['uc', 'ucaas', 'unified communications', 'teams phone', 'telecom', 'telephony', 'voice'] },
    { label: 'CC', score: 2, keywords: ['cc', 'ccaas', 'contact centre', 'contact center', 'cx'] },
    { label: 'Managed Service', score: 30, keywords: ['managed service', 'managed services', 'msp', 'managed support'] },
    { label: 'Collaboration', score: 10, keywords: ['collaboration', 'microsoft teams', 'teams', 'workspace'] },
    { label: 'Cyber Security', score: 10, keywords: ['cyber security', 'cybersecurity', 'security', 'secure', 'soc', 'infosec'] },
  ];
  const IPP_INDUSTRIES = [
    { label: 'Insurance', score: 10, keywords: ['insurance'] },
    { label: 'Retail', score: 10, keywords: ['retail'] },
    { label: 'BPO', score: 10, keywords: ['bpo', 'business process outsourcing'] },
    { label: 'Utilities', score: 10, keywords: ['utilities', 'utility'] },
    { label: 'Education', score: 5, keywords: ['education', 'university', 'college', 'school'] },
    { label: 'Hospitality', score: 8, keywords: ['hospitality', 'hotel', 'hotels', 'leisure'] },
    { label: 'Legal', score: 8, keywords: ['legal', 'law', 'solicitor', 'solicitors'] },
    { label: 'Manufacturing', score: 3, keywords: ['manufacturing', 'manufacturer'] },
    { label: 'Not-for-Profit', score: 5, keywords: ['not-for-profit', 'non-profit', 'nonprofit', 'charity'] },
    { label: 'Travel', score: 10, keywords: ['travel', 'airline', 'tourism'] },
    { label: 'Technology', score: 9, keywords: ['technology', 'tech', 'software', 'it services'] },
    { label: 'Public Sector', score: 10, keywords: ['public sector', 'government', 'local authority', 'nhs'] },
    { label: 'Finance / Professional Services', score: 10, keywords: ['finance', 'financial', 'professional services', 'banking', 'accounting'] },
    { label: 'Healthcare', score: 5, keywords: ['healthcare', 'health care', 'medical', 'hospital'] },
  ];
  const IPP_VENDOR_SCORES = [
    { label: 'Avaya', score: 10 },
    { label: 'Mitel', score: 10 },
    { label: 'Cisco', score: 10 },
    { label: 'NICE CXOne', score: -5 },
    { label: 'Five9', score: -5 },
    { label: 'Genesys', score: -5 },
    { label: 'Content Guru', score: -5 },
    { label: 'Dixa', score: 0 },
    { label: 'Dialpad', score: 8 },
    { label: 'Puzzel', score: 5 },
    { label: '3CX', score: -2 },
    { label: '8x8', score: 5 },
    { label: 'Microsoft', score: 7 },
    { label: 'Calabrio', score: 10 },
    { label: 'Verint', score: 8 },
    { label: 'Swyx', score: 9 },
    { label: 'RingCentral', score: 5 },
    { label: 'Gamma Horizon', score: -4 },
    { label: 'Zoom', score: -2 },
  ];
  const IPP_VENDOR_OPTIONS = IPP_VENDOR_SCORES.map((vendor) => vendor.label);

  function parseNumber(value) {
    if (value === null || value === undefined) return null;
    const cleaned = String(value).replace(/[,£$\s]/g, '').trim();
    if (!cleaned) return null;
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : null;
  }

  function normalizeUrl(value) {
    if (!value) return '';
    const trimmed = String(value).trim();
    if (!trimmed) return '';
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return `https://${trimmed}`;
  }

  function formatCurrency(value) {
    if (value === null || value === undefined || Number.isNaN(value)) return '—';
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(value);
  }

  function matchRange(value, options) {
    if (value === null || value === undefined || Number.isNaN(value)) return null;
    return options.find((option) => value >= option.min && value < option.max) || null;
  }

  function includesUk(country) {
    const value = String(country || '').toLowerCase();
    return ['uk', 'united kingdom', 'england', 'scotland', 'wales', 'northern ireland', 'great britain', 'britain'].some((term) => value.includes(term));
  }

  function getCompanyClassification(revenue, employees) {
    if ((revenue !== null && revenue > 80000000) || (employees !== null && employees > 400)) return 'Enterprise';
    if ((revenue !== null && revenue >= 20000000 && revenue <= 80000000) || (employees !== null && employees >= 100 && employees <= 400)) return 'Mid Market';
    if ((revenue !== null && revenue < 20000000) || (employees !== null && employees >= 10 && employees <= 99)) return 'SMB';
    return 'Unclassified';
  }

  function findKeywordMatches(haystack, options) {
    return options.filter((option) => option.keywords.some((keyword) => haystack.includes(keyword.toLowerCase())));
  }

  function findVendorMatches(text) {
    const haystack = String(text || '').toLowerCase();
    return IPP_VENDOR_SCORES.filter((vendor) => haystack.includes(vendor.label.toLowerCase()));
  }

  function calculateIdealPartnerScore(record) {
    let score = 0;
    const factors = [];
    const scoreItems = {};
    const serviceText = [
      record.industry,
      record.category,
      record.channel_role,
      record.channel_segment,
      record.adopter_profile,
      record.partners,
      record.tech_stack,
      record.keywords,
    ].join(' ').toLowerCase();

    const turnoverMatch = matchRange(record.numericRevenue, IPP_TURNOVER_OPTIONS);
    if (turnoverMatch) {
      score += turnoverMatch.score;
      scoreItems.turnover = turnoverMatch.score;
      factors.push(`Company turnover (${turnoverMatch.label}) +${turnoverMatch.score}`);
    }

    const employeeMatch = matchRange(record.numericEmployees, IPP_EMPLOYEE_OPTIONS);
    if (employeeMatch) {
      score += employeeMatch.score;
      scoreItems.employees = employeeMatch.score;
      factors.push(`Number of employees (${employeeMatch.label}) +${employeeMatch.score}`);
    }

    const hqScore = includesUk(record.country) ? 10 : 3;
    score += hqScore;
    scoreItems.hqLocation = hqScore;
    factors.push(`HQ location (${includesUk(record.country) ? 'UK' : 'Outside UK'}) +${hqScore}`);

    const matchedServices = findKeywordMatches(serviceText, IPP_SERVICE_AREAS);
    const serviceAreaScore = matchedServices.reduce((sum, item) => sum + item.score, 0);
    score += serviceAreaScore;
    scoreItems.serviceAreas = serviceAreaScore;
    factors.push(`Service areas (${matchedServices.map((item) => item.label).join(', ') || 'None matched'}) +${serviceAreaScore}`);

    const matchedIndustries = findKeywordMatches([record.industry, record.keywords, record.adopter_profile].join(' ').toLowerCase(), IPP_INDUSTRIES);
    const industryScore = matchedIndustries.reduce((sum, item) => sum + item.score, 0);
    score += industryScore;
    scoreItems.industries = industryScore;
    factors.push(`Industry fit (${matchedIndustries.map((item) => item.label).join(', ') || 'None matched'}) +${industryScore}`);

    const matchedVendors = findVendorMatches([record.tech_stack, record.partners, record.keywords].join(' '));
    const vendorRelationshipScore = matchedVendors.reduce((sum, vendor) => sum + vendor.score, 0);
    score += vendorRelationshipScore;
    scoreItems.vendorRelationships = vendorRelationshipScore;
    factors.push(`Vendor relationships (${matchedVendors.map((vendor) => `${vendor.label} ${vendor.score > 0 ? `+${vendor.score}` : vendor.score}`).join(', ') || 'None detected'}) ${vendorRelationshipScore > 0 ? `+${vendorRelationshipScore}` : vendorRelationshipScore}`);

    return {
      score: Math.max(0, Math.round(score)),
      factors,
      matchedServices: matchedServices.map((item) => item.label),
      matchedIndustries: matchedIndustries.map((item) => item.label),
      matchedVendors: matchedVendors.map((item) => item.label),
      matchedVendorDetails: matchedVendors,
      companyClassification: getCompanyClassification(record.numericRevenue, record.numericEmployees),
      scoreItems,
    };
  }

  function getPartnerTier(score) {
    if (score > 100) return { label: "High Priority", color: "emerald" };
    if (score >= 70) return { label: "Medium Priority", color: "blue" };
    return { label: "Low Priority", color: "gray" };
  }

  function normalizeRecord(raw, idx) {
    const mapped = {
      id: raw.id || `row-${idx + 1}`,
      name: raw.name || '', industry: raw.industry || '', category: raw.category || '',
      trading_status: raw.trading_status || '', employees: raw.employees || '', channel_role: raw.channel_role || '',
      channel_segment: raw.channel_segment || '', adopter_profile: raw.adopter_profile || '', country: raw.country || '',
      city: raw.city || '', county: raw.county || '', postcode: raw.postcode || '', website: raw.website || '',
      linkedin: raw.linkedin || '', phone: raw.phone || '', email: raw.email || '', domain: raw.domain || '',
      revenue: raw.revenue || '', credit_score: raw.credit_score || '', credit_description: raw.credit_description || '',
      credit_limit: raw.credit_limit || '', net_worth: raw.net_worth || '', var_type: raw.var_type || '',
      year_founded: raw.year_founded || '', partners: raw.partners || '', tech_stack: raw.tech_stack || '',
      keywords: raw.keywords || '', dir1_first: raw.dir1_first || '', dir1_last: raw.dir1_last || '',
      dir1_role: raw.dir1_role || '', dir1_email: raw.dir1_email || '', dir2_first: raw.dir2_first || '',
      dir2_last: raw.dir2_last || '', dir2_role: raw.dir2_role || '', dir2_email: raw.dir2_email || '',
      dir3_first: raw.dir3_first || '', dir3_last: raw.dir3_last || '', dir3_role: raw.dir3_role || '',
      dir3_email: raw.dir3_email || '', ch_link: raw.ch_link || '', accounts_link: raw.accounts_link || ''
    };

    mapped.numericRevenue = parseNumber(mapped.revenue);
    mapped.numericEmployees = parseNumber(mapped.employees);
    mapped.numericCreditScore = parseNumber(mapped.credit_score);
    mapped.numericNetWorth = parseNumber(mapped.net_worth);
    mapped.numericCreditLimit = parseNumber(mapped.credit_limit);
    mapped.displayName = mapped.name || '—';
    mapped.displayRevenue = mapped.numericRevenue !== null ? formatCurrency(mapped.numericRevenue) : '—';
    mapped.displayEmployees = mapped.numericEmployees !== null ? new Intl.NumberFormat('en-GB').format(mapped.numericEmployees) : '—';
    mapped.displayLocation = [mapped.city, mapped.county, mapped.country].filter(Boolean).join(', ') || '—';
    mapped.hasWebsite = !!mapped.website;
    mapped.hasLinkedIn = !!mapped.linkedin;
    mapped.hasEmail = !!(mapped.email || mapped.dir1_email || mapped.dir2_email || mapped.dir3_email);

    const contacts = [1, 2, 3].map((n) => ({
      name: `${mapped[`dir${n}_first`] || ''} ${mapped[`dir${n}_last`] || ''}`.trim(),
      role: mapped[`dir${n}_role`] || '',
      email: mapped[`dir${n}_email`] || ''
    })).filter((c) => c.name || c.role || c.email);
    mapped.contacts = contacts;
    mapped.contactCount = contacts.length;

    const scoreData = calculateIdealPartnerScore(mapped);
    mapped.idealPartnerScore = scoreData.score;
    mapped.scoreBreakdown = scoreData.factors;
    mapped.partnerTier = getPartnerTier(scoreData.score);
    mapped.partnerTierName = mapped.partnerTier.label;
    mapped.companyClassification = scoreData.companyClassification;
    mapped.matchedServices = scoreData.matchedServices;
    mapped.matchedIndustries = scoreData.matchedIndustries;
    mapped.matchedVendors = scoreData.matchedVendors;
    mapped.scoreItems = scoreData.scoreItems;

    mapped.searchHaystack = [
      mapped.name, mapped.industry, mapped.category, mapped.channel_role, mapped.channel_segment,
      mapped.city, mapped.country, mapped.website, mapped.linkedin, mapped.partners, mapped.tech_stack,
      mapped.keywords, ...contacts.map((c) => `${c.name} ${c.role}`)
    ].join(' ').toLowerCase();

    return mapped;
  }

  async function loadProspectsCsv() {
    console.log("Fetching dataset from:", DATASET_URL);

    const response = await fetch(DATASET_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Failed to fetch dataset: ${response.status} ${response.statusText}`);
    }

    const parsed = await response.json();
    console.log("Dataset rows:", parsed.length);
    return parsed.map(normalizeRecord);
  }

  function toCsv(records) {
    return Papa.unparse(records.map((r) => ({
      id: r.id, name: r.name, idealPartnerScore: r.idealPartnerScore, industry: r.industry,
      category: r.category, channel_role: r.channel_role, channel_segment: r.channel_segment,
      employees: r.employees, revenue: r.revenue, city: r.city, country: r.country,
      website: r.website, linkedin: r.linkedin, email: r.email, trading_status: r.trading_status,
      partners: r.partners, tech_stack: r.tech_stack, keywords: r.keywords, companyClassification: r.companyClassification
    })));
  }

  window.ProspectToolUtils = {
    loadProspectsCsv,
    toCsv,
    normalizeUrl,
    formatCurrency,
    parseNumber,
    getPartnerTier,
    getCompanyClassification,
  };
})();
