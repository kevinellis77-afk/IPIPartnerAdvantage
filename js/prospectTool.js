(function () {
  const DATA_PATHS = [
    './data/channel_prospects.csv',
    '/IPIPartnerAdvantage/data/channel_prospects.csv',
    '/data/channel_prospects.csv',
  ];

  const SCORE_TERMS = ['reseller', 'msp', 'integrator', 'telecom', 'uc', 'ccaas', 'it services', 'managed services', 'cloud', 'payments', 'cx', 'ai'];

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

  function calculateIdealPartnerScore(record) {
    let score = 0;
    const factors = [];

    const rev = record.numericRevenue;
    if (rev !== null) {
      const revScore = Math.min(20, Math.log10(Math.max(rev, 1)) * 3.8);
      score += revScore;
      factors.push(`Revenue strength +${revScore.toFixed(1)}`);
    }

    const emp = record.numericEmployees;
    if (emp !== null) {
      let empScore = 0;
      if (emp >= 500) empScore = 16;
      else if (emp >= 100) empScore = 12;
      else if (emp >= 25) empScore = 8;
      else if (emp >= 10) empScore = 4;
      score += empScore;
      if (empScore) factors.push(`Employee scale +${empScore}`);
    }

    const digitalBoosts = [
      [record.hasWebsite, 8, 'Website'],
      [record.hasLinkedIn, 8, 'LinkedIn'],
      [!!record.tech_stack, 5, 'Tech stack'],
      [!!record.keywords, 4, 'Keywords'],
      [record.hasEmail, 5, 'Contact email'],
    ];
    digitalBoosts.forEach(([ok, pts, label]) => {
      if (ok) {
        score += pts;
        factors.push(`${label} +${pts}`);
      }
    });

    const channelText = [record.category, record.channel_role, record.channel_segment, record.keywords].join(' ').toLowerCase();
    const termHits = SCORE_TERMS.filter((t) => channelText.includes(t)).length;
    if (termHits) {
      const pts = Math.min(16, termHits * 3);
      score += pts;
      factors.push(`Channel relevance +${pts}`);
    }

    if (record.partners) {
      score += 6;
      factors.push('Partner ecosystem +6');
    }

    if ((record.trading_status || '').toLowerCase().includes('active')) {
      score += 5;
      factors.push('Active trading +5');
    }

    const creditPositives = [record.numericCreditScore, record.numericCreditLimit, record.numericNetWorth].filter((n) => n !== null && n > 0).length;
    if (creditPositives) {
      const pts = Math.min(8, creditPositives * 2.5);
      score += pts;
      factors.push(`Financial quality +${pts.toFixed(1)}`);
    }

    const status = (record.trading_status || '').toLowerCase();
    if (status.includes('dissolved') || status.includes('inactive')) {
      score -= 15;
      factors.push('Inactive penalty -15');
    }
    if (!record.name) {
      score -= 10;
      factors.push('Missing company name -10');
    }

    const keyMissing = [record.industry, record.channel_role, record.country, record.website, record.linkedin].filter((v) => !v).length;
    if (keyMissing >= 4) {
      score -= 8;
      factors.push('Sparse profile penalty -8');
    }

    return { score: Math.max(0, Math.min(100, Math.round(score))), factors };
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

    mapped.searchHaystack = [
      mapped.name, mapped.industry, mapped.category, mapped.channel_role, mapped.channel_segment,
      mapped.city, mapped.country, mapped.website, mapped.linkedin, mapped.partners, mapped.tech_stack,
      mapped.keywords, ...contacts.map((c) => `${c.name} ${c.role}`)
    ].join(' ').toLowerCase();

    return mapped;
  }

  async function loadProspectsCsv() {
    for (const path of DATA_PATHS) {
      try {
        const res = await fetch(path);
        if (!res.ok) continue;
        const csvText = await res.text();
        const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
        return parsed.data.map(normalizeRecord);
      } catch (err) {}
    }
    throw new Error('Unable to load channel prospects CSV.');
  }

  function toCsv(records) {
    return Papa.unparse(records.map((r) => ({
      id: r.id, name: r.name, idealPartnerScore: r.idealPartnerScore, industry: r.industry,
      category: r.category, channel_role: r.channel_role, channel_segment: r.channel_segment,
      employees: r.employees, revenue: r.revenue, city: r.city, country: r.country,
      website: r.website, linkedin: r.linkedin, email: r.email, trading_status: r.trading_status,
      partners: r.partners, tech_stack: r.tech_stack, keywords: r.keywords
    })));
  }

  window.ProspectToolUtils = {
    DATA_PATHS,
    loadProspectsCsv,
    toCsv,
    normalizeUrl,
    formatCurrency,
    parseNumber,
  };
})();
