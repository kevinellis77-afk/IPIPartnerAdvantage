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

  const STAGE_ONE_SCORING_CONFIG = {
    confidenceOptions: ['Low', 'Medium', 'High'],
    nextActionOptions: ['Prioritise Outreach', 'Qualify Further', 'Nurture', 'Ignore'],
    categories: {
      routeToRevenue: {
        label: 'Route-to-Revenue Fit',
        weight: 0.40,
        options: [
          { label: 'UCaaS + CX Focus', score: 5 },
          { label: 'WEM / Analytics (No CCaaS)', score: 5 },
          { label: 'UCaaS Only', score: 4 },
          { label: 'CCaaS Reseller', score: 3 },
          { label: 'General IT Services', score: 2 },
          { label: 'Cyber / Infra Only', score: 1 },
        ],
      },
      vendorOpportunity: {
        label: 'Vendor Displacement Opportunity',
        weight: 0.20,
        options: [
          { label: 'Legacy (Avaya / Mitel / Cisco)', score: 5 },
          { label: 'Adjacent (Microsoft / Gamma / 3CX)', score: 4 },
          { label: 'Mixed Stack', score: 3 },
          { label: 'Modern CCaaS (Genesys / NICE / Talkdesk / 8x8 / Zoom)', score: 2 },
          { label: 'Deeply Embedded CCaaS', score: 1 },
        ],
      },
      customerFit: {
        label: 'Customer & Use Case Fit',
        weight: 0.15,
        options: [
          { label: 'Strong CX Focus', score: 5 },
          { label: 'CX-Relevant Industries', score: 4 },
          { label: 'General B2B Mid-Market', score: 3 },
          { label: 'Low CX Relevance', score: 2 },
          { label: 'No CX Alignment', score: 1 },
        ],
      },
      salesMotion: {
        label: 'Sales Motion Maturity',
        weight: 0.15,
        options: [
          { label: 'Structured Sales Team (New Business Focus)', score: 5 },
          { label: 'Sales + Account Management', score: 4 },
          { label: 'Hybrid (Tech-Led Selling)', score: 3 },
          { label: 'Founder / Reactive Sales', score: 2 },
          { label: 'No Clear Sales Motion', score: 1 },
        ],
      },
      scaleFit: {
        label: 'Scale Fit',
        weight: 0.05,
        options: [
          { label: 'Ideal (10–50m / 50–500)', score: 5 },
          { label: 'Near Ideal', score: 4 },
          { label: 'Sub-Scale Growth', score: 3 },
          { label: 'Small / Niche', score: 2 },
          { label: 'Enterprise / Complex', score: 1 },
        ],
      },
      geoFit: {
        label: 'Geographic Fit',
        weight: 0.05,
        options: [
          { label: 'UK HQ', score: 5 },
          { label: 'UK Presence', score: 4 },
          { label: 'EMEA with UK Coverage', score: 3 },
          { label: 'Limited UK', score: 2 },
          { label: 'Non-UK Focus', score: 1 },
        ],
      },
    },
    tierBands: [
      { min: 4.0, max: 5.0, tier: 'Tier 1 – Strategic Target', badge: 'Tier 1' },
      { min: 3.2, max: 3.9, tier: 'Tier 2 – Strong Prospect', badge: 'Tier 2' },
      { min: 2.5, max: 3.1, tier: 'Tier 3 – Opportunistic', badge: 'Tier 3' },
      { min: 0, max: 2.49, tier: 'Tier 4 – Low Priority', badge: 'Tier 4' },
    ],
  };
  const REVIEW_FRESHNESS_CONFIG = {
    freshDays: 14,
    agingDays: 30,
  };
  const REVIEW_FRESHNESS_LABELS = ['Fresh', 'Aging', 'Stale', 'Not Reviewed'];
  const STAGE_ONE_TIER_PRIORITY = {
    'Tier 1': 1,
    'Tier 2': 2,
    'Tier 3': 3,
    'Tier 4': 4,
  };
  const NEXT_ACTION_PRIORITY = {
    'Prioritise Outreach': 1,
    'Qualify Further': 2,
    Nurture: 3,
    Ignore: 4,
  };
  const REVIEW_FRESHNESS_PRIORITY = {
    Fresh: 1,
    Aging: 2,
    Stale: 3,
    'Not Reviewed': 4,
  };

  function getTierPriorityValue(tierBadge) {
    return STAGE_ONE_TIER_PRIORITY[tierBadge] || 99;
  }

  function getNextActionPriorityValue(nextAction) {
    return NEXT_ACTION_PRIORITY[nextAction] || 99;
  }

  function getReviewFreshnessPriorityValue(freshness) {
    return REVIEW_FRESHNESS_PRIORITY[freshness] || 99;
  }

  function getWorkingQueueDefinition() {
    return {
      label: 'My Working Queue',
      description: 'Active Tier 1 and Tier 2 prospects ready for current attention',
      matches: (record) => {
        const tier = (record?.stage1TierBadge || '').trim();
        const nextAction = (record?.stage1NextAction || '').trim();
        const completeness = (record?.stage1ScoreStatus || '').trim();
        const freshness = getReviewFreshnessStatus(record?.stage1LastReviewed);
        const hasScore = Number.isFinite(Number(record?.stage1WeightedScore)) && Number(record?.stage1WeightedScore) > 0;
        if (!hasScore) return false;
        if (!['Tier 1', 'Tier 2'].includes(tier)) return false;
        if (!nextAction || nextAction === 'Ignore') return false;
        if (!['Fresh', 'Aging'].includes(freshness)) return false;
        if (!['Complete', 'Partial'].includes(completeness)) return false;
        return true;
      },
    };
  }

  function isProspectInWorkingQueue(record) {
    return getWorkingQueueDefinition().matches(record);
  }

  function getWorkingQueueSortComparator() {
    return (a, b) => {
      const tierDiff = getTierPriorityValue(a?.stage1TierBadge) - getTierPriorityValue(b?.stage1TierBadge);
      if (tierDiff !== 0) return tierDiff;

      const nextActionDiff = getNextActionPriorityValue(a?.stage1NextAction) - getNextActionPriorityValue(b?.stage1NextAction);
      if (nextActionDiff !== 0) return nextActionDiff;

      const scoreDiff = Number(b?.stage1WeightedScore || 0) - Number(a?.stage1WeightedScore || 0);
      if (scoreDiff !== 0) return scoreDiff;

      const aFreshness = getReviewFreshnessStatus(a?.stage1LastReviewed);
      const bFreshness = getReviewFreshnessStatus(b?.stage1LastReviewed);
      const freshnessDiff = getReviewFreshnessPriorityValue(aFreshness) - getReviewFreshnessPriorityValue(bFreshness);
      if (freshnessDiff !== 0) return freshnessDiff;

      const aReviewed = parseReviewDate(a?.stage1LastReviewed)?.getTime() || Number.POSITIVE_INFINITY;
      const bReviewed = parseReviewDate(b?.stage1LastReviewed)?.getTime() || Number.POSITIVE_INFINITY;
      return aReviewed - bReviewed;
    };
  }

  const PRIORITY_VIEW_DEFINITIONS = [
    {
      key: 'my_working_queue',
      label: getWorkingQueueDefinition().label,
      description: getWorkingQueueDefinition().description,
      matches: (record) => isProspectInWorkingQueue(record),
    },
    {
      key: 'tier1_priority_outreach',
      label: 'Tier 1 – Priority Outreach',
      description: 'Tier 1 prospects with immediate outreach recommendation.',
      matches: (record) => (record?.stage1TierBadge || '') === 'Tier 1' && (record?.stage1NextAction || '') === 'Prioritise Outreach',
    },
    {
      key: 'tier2_qualify_further',
      label: 'Tier 2 – Qualify Further',
      description: 'Tier 2 prospects that should move into qualification.',
      matches: (record) => (record?.stage1TierBadge || '') === 'Tier 2' && (record?.stage1NextAction || '') === 'Qualify Further',
    },
    {
      key: 'partial_unscored',
      label: 'Partial / Unscored',
      description: 'Prospects needing completion of Stage 1 scoring.',
      matches: (record) => ['Partial', 'Unscored'].includes(record?.stage1ScoreStatus || 'Unscored'),
    },
    {
      key: 'stale_reviews',
      label: 'Stale Reviews',
      description: 'Prospects that are stale or never reviewed.',
      matches: (record) => {
        const freshness = getReviewFreshnessStatus(record?.stage1LastReviewed, REVIEW_FRESHNESS_CONFIG);
        return freshness === 'Stale' || freshness === 'Not Reviewed';
      },
    },
    {
      key: 'high_confidence_targets',
      label: 'High Confidence Targets',
      description: 'High-confidence Tier 1 and Tier 2 prospects.',
      matches: (record) => (record?.stage1Confidence || '') === 'High' && ['Tier 1', 'Tier 2'].includes(record?.stage1TierBadge || ''),
    },
  ];
  const STAGE_ONE_CATEGORY_KEYS = Object.keys(STAGE_ONE_SCORING_CONFIG.categories);

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

  function getOptionScore(categoryKey, label) {
    const category = STAGE_ONE_SCORING_CONFIG.categories[categoryKey];
    if (!category || !label) return 0;
    const option = category.options.find((item) => item.label === label);
    return option ? option.score : 0;
  }

  function createEmptyScoring() {
    const empty = {};
    STAGE_ONE_CATEGORY_KEYS.forEach((key) => {
      empty[key] = { label: '', score: 0 };
    });
    return {
      ...empty,
      weightedScore: 0,
      weightedPercent: 0,
      tier: '',
      tierBadge: '',
      completenessStatus: 'Unscored',
      status: 'Unscored',
      confidence: '',
      evidence: '',
      weakestFactor: '',
      tierCapApplied: false,
      tierCapReason: '',
      calculatedTier: '',
      calculatedTierBadge: '',
      nextAction: '',
      lastReviewed: '',
    };
  }

  function parseReviewDate(value) {
    if (!value) return null;
    const parsed = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(parsed.getTime())) return null;
    return parsed;
  }

  function formatLastReviewed(dateValue) {
    const parsed = parseReviewDate(dateValue);
    if (!parsed) return 'Not reviewed';
    return parsed.toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  function getDaysSinceReview(dateValue) {
    const parsed = parseReviewDate(dateValue);
    if (!parsed) return null;
    const diff = Date.now() - parsed.getTime();
    if (!Number.isFinite(diff) || diff < 0) return 0;
    return Math.floor(diff / (24 * 60 * 60 * 1000));
  }

  function getReviewFreshnessStatus(dateValue, config = REVIEW_FRESHNESS_CONFIG) {
    const days = getDaysSinceReview(dateValue);
    if (days === null) return 'Not Reviewed';
    if (days <= Number(config.freshDays || 14)) return 'Fresh';
    if (days <= Number(config.agingDays || 30)) return 'Aging';
    return 'Stale';
  }

  function getRecommendedNextAction(scoring) {
    if (!scoring || typeof scoring !== 'object') return '';
    const completeness = scoring.completenessStatus || getProspectCompletenessStatus(scoring);
    if (completeness === 'Partial') return 'Qualify Further';
    const tierBadge = scoring.tierBadge || getTierBadge(scoring.tier || '');
    const confidence = (scoring.confidence || '').toLowerCase();

    if (tierBadge === 'Tier 1' && completeness === 'Complete') return 'Prioritise Outreach';
    if (tierBadge === 'Tier 2' && completeness === 'Complete') return 'Qualify Further';
    if (tierBadge === 'Tier 3') return 'Nurture';
    if (tierBadge === 'Tier 4') return 'Ignore';
    if (confidence === 'low') return 'Qualify Further';
    return '';
  }

  function formatProspectScore(score) {
    if (!Number.isFinite(score) || score <= 0) return 'Unscored';
    return score.toFixed(2);
  }

  function getProspectCompletenessStatus(scoring) {
    if (!scoring || typeof scoring !== 'object') return 'Unscored';
    let scoredCount = 0;
    STAGE_ONE_CATEGORY_KEYS.forEach((key) => {
      const row = scoring[key] || {};
      const score = Number(row.score);
      if (row.label || (Number.isFinite(score) && score > 0)) scoredCount += 1;
    });
    if (!scoredCount) return 'Unscored';
    if (scoredCount < STAGE_ONE_CATEGORY_KEYS.length) return 'Partial';
    return 'Complete';
  }

  function getWeakestScoringFactor(scoring) {
    if (!scoring || typeof scoring !== 'object') return '';
    let weakest = null;
    STAGE_ONE_CATEGORY_KEYS.forEach((key) => {
      const row = scoring[key] || {};
      const score = Number(row.score);
      const valid = Number.isFinite(score) ? score : 0;
      if (valid <= 0) return;
      if (!weakest || valid < weakest.score) {
        weakest = { key, score: valid };
      }
    });
    if (!weakest) return '';
    const label = STAGE_ONE_SCORING_CONFIG.categories[weakest.key]?.label || weakest.key;
    return `${label} (${weakest.score}/5)`;
  }

  function getProspectTier(weightedScore, scoring) {
    if (!Number.isFinite(weightedScore) || weightedScore <= 0) return '';
    const band = STAGE_ONE_SCORING_CONFIG.tierBands.find((item) => weightedScore >= item.min && weightedScore <= item.max);
    const calculatedTier = band ? band.tier : '';
    if (!calculatedTier) return '';

    const vendorScore = Number(scoring?.vendorOpportunity?.score || 0);
    const tier2Band = STAGE_ONE_SCORING_CONFIG.tierBands.find((item) => item.badge === 'Tier 2');
    if (vendorScore > 0 && vendorScore <= 2 && tier2Band) {
      const calculatedTierRank = STAGE_ONE_SCORING_CONFIG.tierBands.findIndex((item) => item.tier === calculatedTier);
      const tier2Rank = STAGE_ONE_SCORING_CONFIG.tierBands.findIndex((item) => item.tier === tier2Band.tier);
      if (calculatedTierRank > -1 && tier2Rank > -1 && calculatedTierRank < tier2Rank) {
        return tier2Band.tier;
      }
    }
    return calculatedTier;
  }

  function getTierBadge(finalTier) {
    if (!finalTier) return '';
    const band = STAGE_ONE_SCORING_CONFIG.tierBands.find((item) => item.tier === finalTier);
    return band ? band.badge : '';
  }

  function getTierCapReason(scoring, weightedScore, calculatedTier) {
    const vendorScore = Number(scoring?.vendorOpportunity?.score || 0);
    if (!Number.isFinite(weightedScore) || weightedScore <= 0 || !calculatedTier) return '';
    if (!(vendorScore > 0 && vendorScore <= 2)) return '';
    const finalTier = getProspectTier(weightedScore, scoring);
    if (!finalTier || finalTier === calculatedTier) return '';
    return 'Tier capped at Tier 2 due to current alignment with modern CCaaS vendors.';
  }

  function calculateProspectWeightedScore(scoring) {
    const next = createEmptyScoring();
    if (!scoring || typeof scoring !== 'object') return next;

    let weightedTotal = 0;
    let completedCount = 0;

    STAGE_ONE_CATEGORY_KEYS.forEach((key) => {
      const category = STAGE_ONE_SCORING_CONFIG.categories[key];
      const raw = scoring[key] || {};
      const label = raw.label || '';
      const explicitScore = Number(raw.score);
      const resolvedScore = label ? getOptionScore(key, label) : (Number.isFinite(explicitScore) && explicitScore > 0 ? explicitScore : 0);
      const score = Math.max(0, Math.min(5, resolvedScore));
      next[key] = { label, score };
      if (score > 0) {
        completedCount += 1;
        weightedTotal += score * category.weight;
      }
    });

    next.confidence = STAGE_ONE_SCORING_CONFIG.confidenceOptions.includes(scoring.confidence) ? scoring.confidence : '';
    next.evidence = typeof scoring.evidence === 'string' ? scoring.evidence : '';
    next.nextAction = STAGE_ONE_SCORING_CONFIG.nextActionOptions.includes(scoring.nextAction) ? scoring.nextAction : '';
    next.lastReviewed = parseReviewDate(scoring.lastReviewed)?.toISOString() || '';
    next.completenessStatus = getProspectCompletenessStatus(next);
    next.status = next.completenessStatus;
    next.weakestFactor = getWeakestScoringFactor(next);

    if (next.completenessStatus === 'Unscored') return next;
    if (next.completenessStatus !== 'Complete') return next;

    const weightedScore = Number(Math.max(1, Math.min(5, weightedTotal)).toFixed(2));
    const weightedPercent = Number(((weightedScore / 5) * 100).toFixed(2));
    const calculatedTier = getProspectTier(weightedScore, { vendorOpportunity: { score: 5 } });
    const finalTier = getProspectTier(weightedScore, next);
    const tierCapReason = getTierCapReason(next, weightedScore, calculatedTier);
    next.weightedScore = weightedScore;
    next.weightedPercent = weightedPercent;
    next.calculatedTier = calculatedTier;
    next.calculatedTierBadge = getTierBadge(calculatedTier);
    next.tier = finalTier;
    next.tierBadge = getTierBadge(finalTier);
    next.tierCapApplied = Boolean(tierCapReason);
    next.tierCapReason = tierCapReason;
    return next;
  }

  function normalizeProspectScoring(rawScoring) {
    return calculateProspectWeightedScore(rawScoring || createEmptyScoring());
  }

  function sortProspectsByLastReviewed(records, direction = 'desc') {
    const multiplier = direction === 'asc' ? 1 : -1;
    return [...(records || [])].sort((a, b) => {
      const aTime = parseReviewDate(a?.scoring?.lastReviewed)?.getTime() || 0;
      const bTime = parseReviewDate(b?.scoring?.lastReviewed)?.getTime() || 0;
      return (aTime - bTime) * multiplier;
    });
  }

  function filterProspectsByNextAction(records, nextAction) {
    if (!nextAction) return [...(records || [])];
    return (records || []).filter((record) => (record?.scoring?.nextAction || '') === nextAction);
  }

  function filterProspectsByReviewFreshness(records, freshness, config = REVIEW_FRESHNESS_CONFIG) {
    if (!freshness) return [...(records || [])];
    return (records || []).filter((record) => getReviewFreshnessStatus(record?.stage1LastReviewed || record?.scoring?.lastReviewed, config) === freshness);
  }

  function getBuiltInPriorityViews() {
    return PRIORITY_VIEW_DEFINITIONS.map((view) => ({
      key: view.key,
      label: view.label,
      description: view.description,
    }));
  }

  function applyPriorityViewFilter(viewKey, prospects) {
    if (!viewKey) return [...(prospects || [])];
    const view = PRIORITY_VIEW_DEFINITIONS.find((item) => item.key === viewKey);
    if (!view) return [...(prospects || [])];
    return (prospects || []).filter((record) => view.matches(record));
  }

  function getBulkReviewQueue(prospects, _currentFilters, _currentSort, _currentView) {
    const rows = [...(prospects || [])];
    if (_currentView === 'my_working_queue') {
      rows.sort(getWorkingQueueSortComparator());
    }
    return rows.map((record) => record.id).filter(Boolean);
  }

  function shouldProspectRemainInCurrentView(record, activeViewKey, activeFilters = {}) {
    if (!record) return false;
    const passesPriorityView = !activeViewKey || applyPriorityViewFilter(activeViewKey, [record]).length > 0;
    if (!passesPriorityView) return false;
    const freshness = getReviewFreshnessStatus(record?.stage1LastReviewed);
    if (activeFilters.stage1NextAction && (record?.stage1NextAction || '') !== activeFilters.stage1NextAction) return false;
    if (activeFilters.stage1Tier && (record?.stage1Tier || '') !== activeFilters.stage1Tier) return false;
    if (activeFilters.stage1Status && (record?.stage1ScoreStatus || 'Unscored') !== activeFilters.stage1Status) return false;
    if (activeFilters.stage1Confidence && (record?.stage1Confidence || '') !== activeFilters.stage1Confidence) return false;
    if (activeFilters.stage1Freshness && freshness !== activeFilters.stage1Freshness) return false;
    return true;
  }

  function updateProspectNextAction(record, nextAction) {
    const scoring = calculateProspectWeightedScore({
      ...(record?.scoring || createEmptyScoring()),
      nextAction,
      lastReviewed: record?.scoring?.lastReviewed || '',
    });
    return {
      ...(record || {}),
      scoring,
      stage1NextAction: scoring.nextAction || '',
      stage1Freshness: getReviewFreshnessStatus(scoring.lastReviewed),
    };
  }

  function getNextProspectInQueue(queueIds, currentId) {
    const queue = Array.isArray(queueIds) ? queueIds : [];
    const index = queue.findIndex((id) => id === currentId);
    if (index < 0 || index >= queue.length - 1) return null;
    return queue[index + 1];
  }

  function getPreviousProspectInQueue(queueIds, currentId) {
    const queue = Array.isArray(queueIds) ? queueIds : [];
    const index = queue.findIndex((id) => id === currentId);
    if (index <= 0) return null;
    return queue[index - 1];
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
    mapped.scoring = normalizeProspectScoring(raw.scoring);
    mapped.stage1WeightedScore = mapped.scoring.weightedScore || null;
    mapped.stage1WeightedPercent = mapped.scoring.weightedPercent || null;
    mapped.stage1Tier = mapped.scoring.tier || '';
    mapped.stage1TierBadge = mapped.scoring.tierBadge || '';
    mapped.stage1ScoreStatus = mapped.scoring.completenessStatus || mapped.scoring.status || 'Unscored';
    mapped.stage1Confidence = mapped.scoring.confidence || '';
    mapped.stage1WeakestFactor = mapped.scoring.weakestFactor || '';
    mapped.stage1TierCapApplied = Boolean(mapped.scoring.tierCapApplied);
    mapped.stage1TierCapReason = mapped.scoring.tierCapReason || '';
    mapped.stage1NextAction = mapped.scoring.nextAction || '';
    mapped.stage1LastReviewed = mapped.scoring.lastReviewed || '';
    mapped.stage1ReviewFreshness = getReviewFreshnessStatus(mapped.stage1LastReviewed);

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
      partners: r.partners, tech_stack: r.tech_stack, keywords: r.keywords, companyClassification: r.companyClassification,
      stage1WeightedScore: r.stage1WeightedScore || '',
      stage1WeightedPercent: r.stage1WeightedPercent || '',
      stage1Tier: r.stage1Tier || '',
      stage1TierBadge: r.stage1TierBadge || '',
      stage1ScoreStatus: r.stage1ScoreStatus || '',
      stage1Confidence: r.stage1Confidence || '',
      stage1WeakestFactor: r.stage1WeakestFactor || '',
      stage1TierCapApplied: r.stage1TierCapApplied ? 'Yes' : 'No',
      stage1TierCapReason: r.stage1TierCapReason || '',
      stage1NextAction: r.stage1NextAction || '',
      stage1LastReviewed: r.stage1LastReviewed || ''
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
    STAGE_ONE_SCORING_CONFIG,
    STAGE_ONE_CATEGORY_KEYS,
    REVIEW_FRESHNESS_CONFIG,
    REVIEW_FRESHNESS_LABELS,
    STAGE_ONE_TIER_PRIORITY,
    NEXT_ACTION_PRIORITY,
    REVIEW_FRESHNESS_PRIORITY,
    getTierPriorityValue,
    getNextActionPriorityValue,
    getReviewFreshnessPriorityValue,
    getWorkingQueueDefinition,
    isProspectInWorkingQueue,
    getWorkingQueueSortComparator,
    createEmptyScoring,
    normalizeProspectScoring,
    getOptionScore,
    calculateProspectWeightedScore,
    getProspectCompletenessStatus,
    getWeakestScoringFactor,
    getProspectTier,
    getTierBadge,
    getTierCapReason,
    formatProspectScore,
    getRecommendedNextAction,
    formatLastReviewed,
    getDaysSinceReview,
    getReviewFreshnessStatus,
    sortProspectsByLastReviewed,
    filterProspectsByNextAction,
    filterProspectsByReviewFreshness,
    getBuiltInPriorityViews,
    applyPriorityViewFilter,
    shouldProspectRemainInCurrentView,
    updateProspectNextAction,
    getBulkReviewQueue,
    getNextProspectInQueue,
    getPreviousProspectInQueue,
  };
})();
