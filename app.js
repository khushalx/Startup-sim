const landingPage = document.querySelector("#landingPage");
const simulationPage = document.querySelector("#simulationPage");
const endingPage = document.querySelector("#endingPage");
const startupForm = document.querySelector("#startupForm");
const restartButton = document.querySelector("#restartButton");
const playAgainButton = document.querySelector("#playAgainButton");
const tryStrategyButton = document.querySelector("#tryStrategyButton");
const themeButton = document.querySelector("#themeButton");
const muteButton = document.querySelector("#muteButton");
const decisionButtons = document.querySelector("#decisionButtons");
const historyList = document.querySelector("#historyList");
const dossierNavButtons = document.querySelectorAll(".dossier-nav button");
const overviewView = document.querySelector("#overviewView");
const timelineView = document.querySelector("#timelineView");
const teamView = document.querySelector("#teamView");
const productView = document.querySelector("#productView");
const marketView = document.querySelector("#marketView");
const timelineFilterButtons = document.querySelectorAll(".timeline-filters button");
const timelineDetailList = document.querySelector("#timelineDetailList");
const trajectoryLabel = document.querySelector("#trajectoryLabel");
const summarySurvived = document.querySelector("#summarySurvived");
const summaryBestWeek = document.querySelector("#summaryBestWeek");
const summaryWorstWeek = document.querySelector("#summaryWorstWeek");
const summaryGrowthMoment = document.querySelector("#summaryGrowthMoment");
const teamStatusLine = document.querySelector("#teamStatusLine");
const teamSizeStat = document.querySelector("#teamSizeStat");
const teamCostStat = document.querySelector("#teamCostStat");
const teamMoraleStat = document.querySelector("#teamMoraleStat");
const teamEfficiencyStat = document.querySelector("#teamEfficiencyStat");
const teamMoraleBar = document.querySelector("#teamMoraleBar");
const teamEfficiencyBar = document.querySelector("#teamEfficiencyBar");
const teamStrongText = document.querySelector("#teamStrongText");
const teamWeakText = document.querySelector("#teamWeakText");
const teamRolesList = document.querySelector("#teamRolesList");
const teamActionMessage = document.querySelector("#teamActionMessage");
const productStatusLine = document.querySelector("#productStatusLine");
const productHealthBadge = document.querySelector("#productHealthBadge");
const productQualityStat = document.querySelector("#productQualityStat");
const productStabilityStat = document.querySelector("#productStabilityStat");
const productUxStat = document.querySelector("#productUxStat");
const productFeatureStat = document.querySelector("#productFeatureStat");
const productDebtStat = document.querySelector("#productDebtStat");
const productQualityBar = document.querySelector("#productQualityBar");
const productStabilityBar = document.querySelector("#productStabilityBar");
const productUxBar = document.querySelector("#productUxBar");
const productFeatureBar = document.querySelector("#productFeatureBar");
const productDebtBar = document.querySelector("#productDebtBar");
const productUpgradeList = document.querySelector("#productUpgradeList");
const productActionMessage = document.querySelector("#productActionMessage");
const roadmapBacklog = document.querySelector("#roadmapBacklog");
const roadmapProgress = document.querySelector("#roadmapProgress");
const roadmapShipped = document.querySelector("#roadmapShipped");
const marketStatusLine = document.querySelector("#marketStatusLine");
const marketFitBadge = document.querySelector("#marketFitBadge");
const marketSizeStat = document.querySelector("#marketSizeStat");
const marketDemandStat = document.querySelector("#marketDemandStat");
const marketCompetitionStat = document.querySelector("#marketCompetitionStat");
const marketDifferentiationStat = document.querySelector("#marketDifferentiationStat");
const marketPricingPowerStat = document.querySelector("#marketPricingPowerStat");
const marketPressureStat = document.querySelector("#marketPressureStat");
const marketSizeBar = document.querySelector("#marketSizeBar");
const marketDemandBar = document.querySelector("#marketDemandBar");
const marketCompetitionBar = document.querySelector("#marketCompetitionBar");
const marketDifferentiationBar = document.querySelector("#marketDifferentiationBar");
const marketPricingPowerBar = document.querySelector("#marketPricingPowerBar");
const marketPressureBar = document.querySelector("#marketPressureBar");
const segmentOptions = document.querySelector("#segmentOptions");
const positioningOptions = document.querySelector("#positioningOptions");
const pricingOptions = document.querySelector("#pricingOptions");
const marketActionList = document.querySelector("#marketActionList");
const marketActionMessage = document.querySelector("#marketActionMessage");
const marketReportText = document.querySelector("#marketReportText");
const marketWedgeText = document.querySelector("#marketWedgeText");
const marketRiskText = document.querySelector("#marketRiskText");

const weekNumber = document.querySelector("#weekNumber");
const companyName = document.querySelector("#companyName");
const companyContext = document.querySelector("#companyContext");
const usersStat = document.querySelector("#usersStat");
const revenueStat = document.querySelector("#revenueStat");
const cashStat = document.querySelector("#cashStat");
const growthStat = document.querySelector("#growthStat");
const burnStat = document.querySelector("#burnStat");
const runwayStat = document.querySelector("#runwayStat");
const runwayStatPill = document.querySelector("#runwayStatPill");
const reputationStat = document.querySelector("#reputationStat");
const qualityStat = document.querySelector("#qualityStat");
const streakStat = document.querySelector("#streakStat");
const runwayLabel = document.querySelector("#runwayLabel");
const reputationLabel = document.querySelector("#reputationLabel");
const qualityLabel = document.querySelector("#qualityLabel");
const runwayBar = document.querySelector("#runwayBar");
const reputationBar = document.querySelector("#reputationBar");
const qualityBar = document.querySelector("#qualityBar");
const scenarioTitle = document.querySelector("#scenarioTitle");
const scenarioText = document.querySelector("#scenarioText");
const eventBadge = document.querySelector("#eventBadge");
const historyCount = document.querySelector("#historyCount");
const insightText = document.querySelector("#insightText");
const decisionWeekLabel = document.querySelector("#decisionWeekLabel");
const profileName = document.querySelector("#profileName");
const profileType = document.querySelector("#profileType");
const profileStyle = document.querySelector("#profileStyle");
const profileGoal = document.querySelector("#profileGoal");
const runwayWarningText = document.querySelector("#runwayWarningText");
const sideGrowthLabel = document.querySelector("#sideGrowthLabel");
const sideUsersLabel = document.querySelector("#sideUsersLabel");
const sideInsightText = document.querySelector("#sideInsightText");
const nextEventLabel = document.querySelector("#nextEventLabel");
const nextEventBar = document.querySelector("#nextEventBar");
const resultToast = document.querySelector("#resultToast");
const endingEyebrow = document.querySelector("#endingEyebrow");
const endingTitle = document.querySelector("#endingTitle");
const endingReason = document.querySelector("#endingReason");
const summaryWeeks = document.querySelector("#summaryWeeks");
const summaryPeakUsers = document.querySelector("#summaryPeakUsers");
const summaryRevenue = document.querySelector("#summaryRevenue");
const summaryScore = document.querySelector("#summaryScore");
const endingInsight = document.querySelector("#endingInsight");
const keyDecisionsList = document.querySelector("#keyDecisionsList");

const MAX_WEEKS = 25;

const founderStyles = {
  balanced: {
    label: "Balanced",
    growthMultiplier: 1,
    cashMultiplier: 1,
    stability: 1,
    qualityMultiplier: 1,
    risk: 1,
  },
  risk: {
    label: "Risk-taker",
    growthMultiplier: 1.35,
    cashMultiplier: 1.22,
    stability: 0.78,
    qualityMultiplier: 0.92,
    risk: 1.45,
  },
  conservative: {
    label: "Conservative",
    growthMultiplier: 0.78,
    cashMultiplier: 0.82,
    stability: 1.35,
    qualityMultiplier: 1.12,
    risk: 0.72,
  },
};

const goals = {
  profit: {
    label: "Profit",
    endingText: "Revenue and cash mattered most in this run.",
  },
  growth: {
    label: "Growth",
    endingText: "Users and growth rate mattered most in this run.",
  },
  stability: {
    label: "Stability",
    endingText: "Reputation, quality, and low burn mattered most in this run.",
  },
};

const startupTypes = {
  saas: {
    label: "SaaS",
    usersMultiplier: 0.82,
    lateUsersMultiplier: 1,
    revenueMultiplier: 1.25,
    burnMultiplier: 1,
    startingCash: 7200,
    startingBurn: 380,
    qualityDrift: 1,
    reputationDrift: 1,
    risk: 0.9,
    note: "Slow user growth, steadier recurring revenue.",
  },
  marketplace: {
    label: "Marketplace",
    usersMultiplier: 0.58,
    lateUsersMultiplier: 1.65,
    revenueMultiplier: 0.72,
    burnMultiplier: 1.18,
    startingCash: 7800,
    startingBurn: 470,
    qualityDrift: 0,
    reputationDrift: 0,
    risk: 1.12,
    note: "Very slow start, but high growth potential after liquidity builds.",
  },
  creator: {
    label: "Creator Tool",
    usersMultiplier: 1.32,
    lateUsersMultiplier: 0.92,
    revenueMultiplier: 0.88,
    burnMultiplier: 0.92,
    startingCash: 6400,
    startingBurn: 310,
    qualityDrift: -1,
    reputationDrift: -1,
    risk: 1.22,
    note: "Fast early growth with unstable retention.",
  },
  agency: {
    label: "Agency",
    usersMultiplier: 0.62,
    lateUsersMultiplier: 0.58,
    revenueMultiplier: 1.55,
    burnMultiplier: 0.78,
    startingCash: 5600,
    startingBurn: 240,
    qualityDrift: 2,
    reputationDrift: 2,
    risk: 0.72,
    note: "Quick revenue and safer runway, but limited scaling.",
  },
  ai: {
    label: "AI Product",
    usersMultiplier: 1.42,
    lateUsersMultiplier: 1.1,
    revenueMultiplier: 1.02,
    burnMultiplier: 1.42,
    startingCash: 8800,
    startingBurn: 690,
    qualityDrift: -1,
    reputationDrift: -2,
    risk: 1.45,
    note: "Hype-driven growth with higher burn and competition risk.",
  },
};

const teamRoles = {
  engineer: {
    label: "Engineer",
    icon: "EN",
    cost: 520,
    impact: "Product quality, stability",
    strengths: ["Product"],
  },
  designer: {
    label: "Designer",
    icon: "UX",
    cost: 380,
    impact: "UX, retention, reputation",
    strengths: ["Design"],
  },
  marketer: {
    label: "Marketer",
    icon: "MK",
    cost: 430,
    impact: "User growth, campaigns",
    strengths: ["Growth"],
  },
  sales: {
    label: "Sales",
    icon: "SL",
    cost: 460,
    impact: "Revenue, pipeline",
    strengths: ["Revenue"],
  },
  operations: {
    label: "Operations",
    icon: "OP",
    cost: 360,
    impact: "Burn efficiency, stability",
    strengths: ["Ops"],
  },
};

const productUpgrades = {
  onboarding: {
    label: "Improve Onboarding",
    cost: 300,
    impact: "+UX, +reputation, better retention",
    effects: { ux: 10, stability: 1, featureDepth: 0, technicalDebt: 2, quality: 4, reputation: 5, users: 8, growthRate: 1 },
  },
  bugs: {
    label: "Fix Bugs",
    cost: 250,
    impact: "+stability, +reputation, -debt",
    effects: { ux: 2, stability: 11, featureDepth: 0, technicalDebt: -8, quality: 5, reputation: 4, users: 2, growthRate: -1 },
  },
  coreFeature: {
    label: "Add Core Feature",
    cost: 500,
    impact: "+features, +growth, +debt",
    effects: { ux: 0, stability: -3, featureDepth: 13, technicalDebt: 9, quality: 4, reputation: 2, users: 14, growthRate: 5 },
  },
  uiux: {
    label: "Improve UI/UX",
    cost: 350,
    impact: "+UX, +retention, +trust",
    effects: { ux: 12, stability: 1, featureDepth: 1, technicalDebt: 3, quality: 5, reputation: 6, users: 6, growthRate: 1 },
  },
  performance: {
    label: "Optimize Performance",
    cost: 350,
    impact: "+stability, +quality",
    effects: { ux: 4, stability: 9, featureDepth: 0, technicalDebt: -2, quality: 7, reputation: 3, users: 4, growthRate: 1 },
  },
  debt: {
    label: "Reduce Technical Debt",
    cost: 400,
    impact: "-debt, +stability, slower growth",
    effects: { ux: 1, stability: 10, featureDepth: -1, technicalDebt: -14, quality: 5, reputation: 2, users: -2, growthRate: -3 },
  },
};

const marketSegments = {
  students: {
    label: "Students",
    note: "High adoption potential, low pricing power.",
    icon: "ST",
    stats: { marketSize: 10, demand: 8, competition: 4, differentiation: -2, pricingPower: -14 },
    effects: { users: 12, revenue: -120, cash: 0, burnRate: 0, reputation: 1, productQuality: 0, growthRate: 3 },
  },
  creators: {
    label: "Creators",
    note: "Viral potential with medium pricing power.",
    icon: "CR",
    stats: { marketSize: 7, demand: 9, competition: 6, differentiation: 2, pricingPower: 0 },
    effects: { users: 10, revenue: 40, cash: 0, burnRate: 0, reputation: 2, productQuality: 0, growthRate: 3 },
  },
  founders: {
    label: "Founders",
    note: "Strong willingness to pay, competitive niche.",
    icon: "FD",
    stats: { marketSize: 0, demand: 7, competition: 10, differentiation: 3, pricingPower: 8 },
    effects: { users: 5, revenue: 220, cash: 0, burnRate: 0, reputation: 2, productQuality: 0, growthRate: 1 },
  },
  smallBusinesses: {
    label: "Small Businesses",
    note: "Steady revenue with slower adoption.",
    icon: "SB",
    stats: { marketSize: 5, demand: 4, competition: 5, differentiation: 0, pricingPower: 7 },
    effects: { users: 3, revenue: 270, cash: 0, burnRate: 15, reputation: 1, productQuality: 0, growthRate: -1 },
  },
  developers: {
    label: "Developers",
    note: "High expectations, strong word of mouth if quality is good.",
    icon: "DV",
    stats: { marketSize: 3, demand: 6, competition: 7, differentiation: 6, pricingPower: 5 },
    effects: { users: 6, revenue: 120, cash: 0, burnRate: 20, reputation: 0, productQuality: -1, growthRate: 1 },
  },
  enterprises: {
    label: "Enterprises",
    note: "High revenue potential, slow sales cycle, higher support cost.",
    icon: "EN",
    stats: { marketSize: -4, demand: 2, competition: 8, differentiation: 1, pricingPower: 18 },
    effects: { users: -2, revenue: 650, cash: 0, burnRate: 90, reputation: 1, productQuality: 0, growthRate: -3 },
  },
};

const marketPositionings = {
  cheapest: {
    label: "Cheapest option",
    note: "Adoption rises, revenue and trust get more fragile.",
    icon: "$",
    stats: { marketSize: 5, demand: 5, competition: 7, differentiation: -6, pricingPower: -12 },
    effects: { users: 14, revenue: -220, cash: 0, burnRate: 20, reputation: -3, productQuality: 0, growthRate: 4 },
  },
  premium: {
    label: "Premium product",
    note: "Higher revenue, slower adoption.",
    icon: "PR",
    stats: { marketSize: -3, demand: -1, competition: 2, differentiation: 4, pricingPower: 14 },
    effects: { users: -2, revenue: 470, cash: 0, burnRate: 25, reputation: 3, productQuality: 0, growthRate: -2 },
  },
  niche: {
    label: "Niche specialist",
    note: "Sharper trust and differentiation, smaller total market.",
    icon: "NS",
    stats: { marketSize: -8, demand: 3, competition: -6, differentiation: 14, pricingPower: 5 },
    effects: { users: 3, revenue: 150, cash: 0, burnRate: 0, reputation: 5, productQuality: 0, growthRate: 0 },
  },
  fastest: {
    label: "Fastest solution",
    note: "Speed wins impatient buyers, but support pressure rises.",
    icon: "FS",
    stats: { marketSize: 2, demand: 6, competition: 5, differentiation: 5, pricingPower: 1 },
    effects: { users: 9, revenue: 90, cash: 0, burnRate: 45, reputation: 0, productQuality: -1, growthRate: 3 },
  },
  community: {
    label: "Community-first brand",
    note: "Trust compounds, monetization is slower.",
    icon: "CM",
    stats: { marketSize: 1, demand: 4, competition: -2, differentiation: 8, pricingPower: -2 },
    effects: { users: 7, revenue: -40, cash: 0, burnRate: 20, reputation: 5, productQuality: 0, growthRate: 2 },
  },
};

const marketPricing = {
  free: {
    label: "Free",
    note: "Fast adoption, no monetization signal.",
    icon: "FR",
    stats: { demand: 9, competition: 4, differentiation: -4, pricingPower: -18 },
    effects: { users: 16, revenue: -320, cash: 0, burnRate: 30, reputation: 1, productQuality: 0, growthRate: 5 },
  },
  freemium: {
    label: "Freemium",
    note: "Balanced adoption with upgrade paths.",
    icon: "FM",
    stats: { demand: 5, competition: 3, differentiation: 0, pricingPower: -4 },
    effects: { users: 9, revenue: 120, cash: 0, burnRate: 15, reputation: 1, productQuality: 0, growthRate: 2 },
  },
  lowCost: {
    label: "Low-cost",
    note: "Easy to buy, weaker revenue per user.",
    icon: "LC",
    stats: { demand: 4, competition: 5, differentiation: -3, pricingPower: -8 },
    effects: { users: 8, revenue: 80, cash: 0, burnRate: 10, reputation: -1, productQuality: 0, growthRate: 2 },
  },
  premium: {
    label: "Premium",
    note: "More revenue, fewer casual signups.",
    icon: "PM",
    stats: { demand: -2, competition: 1, differentiation: 3, pricingPower: 12 },
    effects: { users: -3, revenue: 430, cash: 0, burnRate: 15, reputation: 2, productQuality: 0, growthRate: -2 },
  },
  enterprise: {
    label: "Enterprise",
    note: "High deal value, slow sales and heavier support.",
    icon: "ET",
    stats: { demand: -5, competition: 5, differentiation: 2, pricingPower: 18 },
    effects: { users: -5, revenue: 780, cash: 0, burnRate: 95, reputation: 1, productQuality: 0, growthRate: -4 },
  },
};

const marketActions = {
  interviews: {
    label: "Run user interviews",
    cost: 150,
    impact: "+differentiation, +reputation, slower growth this week",
    market: { demand: 3, differentiation: 7, pricingPower: 1, competitorPressure: -2 },
    effects: { users: -1, revenue: 0, cash: 0, burnRate: 0, reputation: 4, productQuality: 1, growthRate: -1 },
  },
  competitors: {
    label: "Study competitors",
    cost: 100,
    impact: "-competitor pressure, +positioning clarity",
    market: { competition: -2, differentiation: 5, competitorPressure: -8 },
    effects: { users: 0, revenue: 0, cash: 0, burnRate: 0, reputation: 2, productQuality: 0, growthRate: 0 },
  },
  pricing: {
    label: "Test pricing",
    cost: 100,
    impact: "+pricing power, possible adoption friction",
    market: { demand: -1, pricingPower: 7, differentiation: 2, competitorPressure: 1 },
    effects: { users: -2, revenue: 360, cash: 0, burnRate: 0, reputation: -1, productQuality: 0, growthRate: -1 },
  },
  nicheCampaign: {
    label: "Launch niche campaign",
    cost: 300,
    impact: "+growth if your differentiation is high",
    market: { demand: 4, differentiation: 3, competitorPressure: 4 },
    effects: { users: 18, revenue: 140, cash: 0, burnRate: 20, reputation: 2, productQuality: 0, growthRate: 4 },
  },
  community: {
    label: "Build community",
    cost: 200,
    impact: "+reputation, +long-term growth stability",
    market: { demand: 2, differentiation: 5, competitorPressure: -3 },
    effects: { users: 7, revenue: 0, cash: 0, burnRate: 20, reputation: 6, productQuality: 0, growthRate: 2 },
  },
};

const scenarios = [
  {
    type: "scenario",
    title: "You have one focused week. Where does the team spend it?",
    text: "Momentum is fragile. A strong call can create a flywheel, but ignoring the wrong constraint can compound quickly.",
    decisions: [
      {
        label: "Improve the core product",
        hint: "Quality rises, churn falls, but acquisition slows.",
        effects: { productQuality: 11, users: 6, cash: -650, burnRate: 60, growthRate: -1, reputation: 4 },
        insight: "You invested in retention before scale. Growth cooled for the week, but the product became easier to trust.",
      },
      {
        label: "Push a noisy marketing sprint",
        hint: "More users arrive, but weak onboarding can leak trust.",
        effects: { users: 38, cash: -1150, burnRate: 130, growthRate: 9, reputation: -4, productQuality: -2 },
        insight: "You bought attention. It worked, but some new users hit rough edges because quality did not rise with demand.",
      },
      {
        label: "Push for paid annual plans",
        hint: "Cash runway improves, but growth becomes more selective.",
        effects: { cash: 1800, revenue: 650, burnRate: -35, reputation: -2, growthRate: -1, users: 4 },
        insight: "Revenue discipline bought time without outside capital. Growth cooled slightly, but the business became more sustainable.",
      },
    ],
  },
  {
    type: "scenario",
    title: "Early customers ask for features outside your niche.",
    text: "The requests sound lucrative, but broadening too soon can make the product harder to explain.",
    decisions: [
      {
        label: "Stay narrow and say no",
        hint: "Sharper positioning, slower short-term revenue.",
        effects: { reputation: 7, productQuality: 8, users: 7, revenue: 180, growthRate: 1, cash: -280 },
        insight: "Focus made the product easier to recommend. You left some money on the table to protect clarity.",
      },
      {
        label: "Build the custom feature",
        hint: "Revenue jumps, complexity and burn rise.",
        effects: { revenue: 980, cash: 360, burnRate: 170, productQuality: -3, users: 5, growthRate: -2 },
        insight: "You monetized demand, but custom work pulled attention away from the broader product.",
      },
      {
        label: "Turn requests into a paid beta",
        hint: "Balanced monetization with some delivery risk.",
        effects: { revenue: 620, cash: 120, burnRate: 90, productQuality: 4, reputation: 3, users: 12 },
        insight: "You converted uncertainty into a paid learning loop. It is slower than pure services, but more reusable.",
      },
    ],
  },
  {
    type: "scenario",
    title: "Your activation rate is stuck.",
    text: "People sign up, poke around, and leave before they see the product's value.",
    decisions: [
      {
        label: "Rewrite onboarding around one job",
        hint: "Quality and trust rise, acquisition pauses.",
        effects: { productQuality: 10, reputation: 7, growthRate: -2, cash: -520, users: 3 },
        insight: "You reduced confusion. The top of funnel slowed, but more users now understand why the product exists.",
      },
      {
        label: "Add founder-led concierge setup",
        hint: "Great learning, higher burn.",
        effects: { users: 16, revenue: 340, cash: -420, burnRate: 140, reputation: 8, productQuality: 3 },
        insight: "Hands-on onboarding improved trust and uncovered product gaps, but it made the company more expensive to run.",
      },
      {
        label: "Discount annual plans",
        hint: "Quick cash, possible reputation damage.",
        effects: { revenue: 780, cash: 520, users: 10, reputation: -6, growthRate: 3 },
        insight: "Discounting created cash, but it trained some customers to see price as the main reason to buy.",
      },
    ],
  },
  {
    type: "scenario",
    title: "The team is tired and your roadmap is overloaded.",
    text: "Every choice has an opportunity cost. You can buy speed, buy focus, or buy breathing room.",
    decisions: [
      {
        label: "Cut the roadmap in half",
        hint: "Lower burn and better quality, less hype.",
        effects: { burnRate: -180, productQuality: 8, reputation: 4, growthRate: -3, users: -2 },
        insight: "You chose focus over scope. The product got calmer, and the company became less fragile.",
      },
      {
        label: "Hire contractors for speed",
        hint: "Ship faster, spend faster.",
        effects: { productQuality: 5, users: 20, cash: -1600, burnRate: 260, growthRate: 7, reputation: -1 },
        insight: "You increased output, but the added burn means the next few weeks need stronger revenue or tighter focus.",
      },
      {
        label: "Pause feature work for sales",
        hint: "Revenue focus, product debt grows.",
        effects: { revenue: 900, cash: 640, users: 8, productQuality: -4, growthRate: 1, reputation: -2 },
        insight: "Sales brought oxygen into the business, but product debt started to build behind the scenes.",
      },
    ],
  },
  {
    type: "scenario",
    title: "A larger company wants a partnership.",
    text: "The logo would impress the market. The integration would consume a lot of your tiny team's attention.",
    decisions: [
      {
        label: "Take the partnership",
        hint: "Big distribution, big distraction.",
        effects: { users: 64, revenue: 1100, cash: -900, burnRate: 190, growthRate: 10, productQuality: -5 },
        insight: "The partnership opened distribution, but the product roadmap bent around someone else's priorities.",
      },
      {
        label: "Negotiate a narrow pilot",
        hint: "Smaller upside, cleaner learning.",
        effects: { users: 26, revenue: 720, reputation: 5, cash: -260, growthRate: 5, productQuality: 2 },
        insight: "You kept leverage by shrinking the ask. The upside is lower, but the company stayed coherent.",
      },
      {
        label: "Decline and serve current users",
        hint: "Protect quality, miss a visibility spike.",
        effects: { productQuality: 9, reputation: 8, users: 6, revenue: 260, growthRate: -1 },
        insight: "You defended product quality and trust. It is less glamorous, but current users became more likely to stay.",
      },
    ],
  },
];

const randomEvents = [
  {
    type: "event",
    title: "Competitor launched a similar product.",
    text: "Their announcement is polished and the market is suddenly comparing you side by side.",
    immediate: { users: -8, reputation: -4, growthRate: -2 },
    decisions: [
      {
        label: "Differentiate with a niche campaign",
        hint: "Win clarity instead of shouting louder.",
        effects: { users: 22, cash: -720, reputation: 5, growthRate: 5, productQuality: 2 },
        insight: "You sharpened the story. The competitor still exists, but customers now understand who you serve best.",
      },
      {
        label: "Race them feature for feature",
        hint: "Competitive, expensive, and risky.",
        effects: { users: 28, cash: -1350, burnRate: 210, growthRate: 8, productQuality: -6, reputation: -3 },
        insight: "The race created momentum, but chasing a competitor pulled you away from your own strongest users.",
      },
      {
        label: "Publish proof from real customers",
        hint: "Trust over noise.",
        effects: { reputation: 9, users: 14, revenue: 420, cash: -180, growthRate: 3 },
        insight: "Customer proof turned comparison into credibility. You grew more slowly, but with stronger trust.",
      },
    ],
  },
  {
    type: "event",
    title: "Your product went viral overnight.",
    text: "Signups are pouring in. The opportunity is real, and so is the operational strain.",
    immediate: { users: 75, growthRate: 14, burnRate: 120, reputation: -2 },
    decisions: [
      {
        label: "Scale infrastructure immediately",
        hint: "Protect trust with a cash hit.",
        effects: { cash: -1500, burnRate: 180, reputation: 7, productQuality: 5, growthRate: 2 },
        insight: "You spent to keep the viral moment from breaking the product. Cash fell, but trust held.",
      },
      {
        label: "Capture emails before scaling",
        hint: "Cheap validation, some frustrated users.",
        effects: { users: 36, cash: -120, reputation: -5, growthRate: 7, revenue: 260 },
        insight: "You conserved cash, but some people bounced while waiting. Viral attention is perishable.",
      },
      {
        label: "Launch a paid fast-track",
        hint: "Monetize demand, risk backlash.",
        effects: { revenue: 1450, cash: 1080, users: 20, reputation: -7, growthRate: 3 },
        insight: "You turned urgency into revenue. It worked financially, but some users saw the move as opportunistic.",
      },
    ],
  },
  {
    type: "event",
    title: "A server crash takes the app down.",
    text: "The outage is short, but public enough that your next response matters.",
    immediate: { users: -14, reputation: -10, revenue: -160, growthRate: -4 },
    decisions: [
      {
        label: "Post a transparent incident report",
        hint: "Trust recovery with little direct growth.",
        effects: { reputation: 10, productQuality: 3, users: 4, cash: -80, growthRate: 1 },
        insight: "Transparency did not erase the outage, but it told users you can be trusted when things break.",
      },
      {
        label: "Overbuild reliability this week",
        hint: "Quality up, speed down, cash down.",
        effects: { productQuality: 12, cash: -920, burnRate: 70, reputation: 6, growthRate: -3 },
        insight: "You chose resilience. The roadmap slowed, but future growth is less likely to collapse under load.",
      },
      {
        label: "Offer credits to affected accounts",
        hint: "Goodwill at a revenue cost.",
        effects: { reputation: 8, revenue: -360, cash: -360, users: 8, growthRate: 2 },
        insight: "Credits protected goodwill. The immediate revenue pain bought patience from your existing customers.",
      },
    ],
  },
  {
    type: "event",
    title: "User backlash starts spreading on social media.",
    text: "A loud thread claims the product overpromises. Some criticism is fair, some is theater.",
    immediate: { reputation: -12, users: -10, growthRate: -3 },
    decisions: [
      {
        label: "Publicly own the product gaps",
        hint: "Trust recovery, slower sales.",
        effects: { reputation: 12, productQuality: 5, growthRate: -2, users: 2 },
        insight: "Owning the gaps made the company feel honest. It slowed hype, but reduced long-term trust damage.",
      },
      {
        label: "Ship the most requested fix",
        hint: "Quality signal with delivery pressure.",
        effects: { productQuality: 10, reputation: 7, cash: -720, burnRate: 90, users: 9 },
        insight: "A concrete fix worked better than a statement alone. It cost focus, but restored confidence.",
      },
      {
        label: "Counter with aggressive ads",
        hint: "Attention rises, trust may sink.",
        effects: { users: 30, cash: -1100, reputation: -7, growthRate: 7, productQuality: -2 },
        insight: "You outshouted the backlash for a moment, but trust got weaker because the product concern remained.",
      },
    ],
  },
  {
    type: "event",
    title: "Your lead engineer is burned out.",
    text: "The product is moving, but the team is carrying too much hidden stress.",
    immediate: { productQuality: -3, reputation: -2, growthRate: -1 },
    decisions: [
      {
        label: "Pause feature work for recovery",
        hint: "Morale stabilizes, growth slows.",
        effects: { productQuality: 4, reputation: 3, growthRate: -3, cash: -180 },
        insight: "You protected the team from compounding fatigue. The roadmap slowed, but execution risk fell.",
      },
      {
        label: "Hire engineering support",
        hint: "Quality capacity improves, burn rises.",
        effects: { productQuality: 8, burnRate: 220, cash: -620, reputation: 2 },
        insight: "You bought product capacity with runway. The company can ship better, but burn is heavier.",
      },
      {
        label: "Push through the sprint",
        hint: "Short-term output, morale risk.",
        effects: { users: 10, productQuality: 2, reputation: -6, growthRate: 3 },
        insight: "The sprint created motion, but the team absorbed the cost. Morale may suffer later.",
      },
    ],
  },
  {
    type: "event",
    title: "Marketing wants more budget.",
    text: "The growth team sees a channel opening, but it will pressure runway.",
    immediate: { cash: -180, growthRate: 1 },
    decisions: [
      {
        label: "Approve a focused campaign",
        hint: "Growth potential with runway cost.",
        effects: { users: 28, cash: -980, burnRate: 80, growthRate: 7, reputation: -1 },
        insight: "You gave growth a controlled bet. It can work, but only if conversion follows.",
      },
      {
        label: "Ask for organic experiments",
        hint: "Slower, cheaper learning.",
        effects: { users: 10, cash: -160, growthRate: 2, reputation: 2 },
        insight: "You preserved runway and kept the team experimenting, but the upside is smaller.",
      },
      {
        label: "Redirect budget to sales",
        hint: "Less reach, more revenue discipline.",
        effects: { revenue: 760, users: 5, cash: 260, growthRate: -1 },
        insight: "You chose revenue over reach. It is less flashy, but the runway story improves.",
      },
    ],
  },
  {
    type: "event",
    title: "Designer suggests a UI overhaul.",
    text: "The current interface works, but users keep stumbling before the value moment.",
    immediate: { reputation: -1 },
    decisions: [
      {
        label: "Run a fast UX overhaul",
        hint: "Retention and trust improve, shipping slows.",
        effects: { productQuality: 9, reputation: 7, cash: -520, growthRate: -2 },
        insight: "The UX push made the product easier to adopt. Acquisition slowed while the team focused inward.",
      },
      {
        label: "Test only the onboarding screen",
        hint: "Smaller scope, useful signal.",
        effects: { productQuality: 4, reputation: 3, cash: -180, users: 5 },
        insight: "You reduced risk by narrowing the experiment. The improvement is modest but clean.",
      },
      {
        label: "Keep the roadmap unchanged",
        hint: "Saves time, ignores friction.",
        effects: { users: 8, productQuality: -3, reputation: -4, growthRate: 2 },
        insight: "You kept shipping, but unresolved UX friction continued to tax retention.",
      },
    ],
  },
  {
    type: "event",
    title: "Users are confused by onboarding.",
    text: "Support tickets show people understand the promise, but not the first steps.",
    immediate: { reputation: -4, users: -5, growthRate: -2 },
    decisions: [
      {
        label: "Rewrite onboarding this week",
        hint: "UX and trust improve, feature work pauses.",
        effects: { productQuality: 8, reputation: 8, cash: -320, growthRate: -2, users: 6 },
        insight: "You removed friction before scaling harder. Adoption should be healthier next cycle.",
      },
      {
        label: "Add tooltip guidance",
        hint: "Small UX patch, low cost.",
        effects: { productQuality: 4, reputation: 3, cash: -120, users: 4 },
        insight: "A focused UX patch reduced confusion without derailing the roadmap.",
      },
      {
        label: "Keep pushing acquisition",
        hint: "Growth now, retention risk later.",
        effects: { users: 22, reputation: -5, productQuality: -2, growthRate: 5 },
        insight: "You filled the funnel, but unresolved onboarding friction kept leaking trust.",
      },
    ],
  },
  {
    type: "event",
    title: "A bug caused churn.",
    text: "A reliability issue hit a few active users and some are publicly annoyed.",
    immediate: { users: -10, reputation: -8, productQuality: -5 },
    decisions: [
      {
        label: "Declare a bug bash",
        hint: "Stability improves, growth slows.",
        effects: { productQuality: 10, reputation: 6, cash: -260, growthRate: -2 },
        insight: "You chose reliability over speed. It is less exciting, but reduces crisis risk.",
      },
      {
        label: "Compensate affected users",
        hint: "Trust recovery at revenue cost.",
        effects: { reputation: 8, revenue: -320, cash: -320, users: 4 },
        insight: "Compensation bought patience while the product recovered.",
      },
      {
        label: "Patch quietly",
        hint: "Cheap, but trust recovery is weaker.",
        effects: { productQuality: 5, reputation: 1, cash: -80, users: -2 },
        insight: "The bug improved, but the trust story stayed thin because users saw little accountability.",
      },
    ],
  },
  {
    type: "event",
    title: "Power users want an advanced feature.",
    text: "Your best users are asking for depth, but it may add complexity for everyone else.",
    immediate: { growthRate: 1 },
    decisions: [
      {
        label: "Build the advanced feature",
        hint: "Depth and revenue potential up, debt rises.",
        effects: { productQuality: 5, users: 12, revenue: 720, cash: -520, growthRate: 5 },
        insight: "You served power users and created expansion potential, but complexity increased.",
      },
      {
        label: "Prototype it with five users",
        hint: "Slower, cleaner learning.",
        effects: { productQuality: 3, reputation: 3, cash: -180, users: 5, growthRate: 1 },
        insight: "A small prototype protected the core product while testing demand.",
      },
      {
        label: "Say no and polish core flows",
        hint: "Focus and trust up, less expansion.",
        effects: { productQuality: 7, reputation: 5, users: 2, growthRate: -1 },
        insight: "You protected simplicity. The product became easier to use, but less powerful.",
      },
    ],
  },
  {
    type: "event",
    title: "Technical debt is slowing releases.",
    text: "Every small change now takes longer than it should. The team can feel it.",
    immediate: { growthRate: -3, productQuality: -3 },
    decisions: [
      {
        label: "Spend the week reducing debt",
        hint: "Stability up, short-term growth down.",
        effects: { productQuality: 8, reputation: 3, cash: -420, growthRate: -3 },
        insight: "You paid down hidden product drag. Growth slowed, but future releases should be safer.",
      },
      {
        label: "Refactor only the riskiest area",
        hint: "Moderate cost, targeted stability.",
        effects: { productQuality: 5, reputation: 2, cash: -220, growthRate: -1 },
        insight: "You narrowed the refactor to protect runway while reducing the biggest risk.",
      },
      {
        label: "Ignore debt and ship",
        hint: "Momentum now, crisis risk later.",
        effects: { users: 14, productQuality: -6, reputation: -4, growthRate: 4 },
        insight: "You kept moving, but the product foundation got more brittle.",
      },
    ],
  },
];

const marketEvents = [
  {
    type: "event",
    title: "A competitor copies your strongest feature.",
    text: "The market is starting to notice your traction, and a rival is trying to collapse your differentiation.",
    immediate: { users: -6, reputation: -3, growthRate: -2 },
    decisions: [
      {
        label: "Double down on your niche wedge",
        hint: "Differentiation and trust rise, market size narrows.",
        effects: { users: 8, revenue: 180, cash: -260, reputation: 6, productQuality: 2, growthRate: 1 },
        insight: "You made the comparison harder by serving a sharper segment instead of matching every feature.",
      },
      {
        label: "Start a pricing war",
        hint: "Users rise, revenue and reputation take pressure.",
        effects: { users: 28, revenue: -420, cash: -360, reputation: -6, growthRate: 6 },
        insight: "Lower prices attracted attention, but it trained the market to compare you on cost.",
      },
      {
        label: "Publish customer proof",
        hint: "Credibility improves with moderate growth.",
        effects: { users: 12, revenue: 320, cash: -120, reputation: 8, growthRate: 2 },
        insight: "Proof gave buyers a reason to trust your product beyond the feature checklist.",
      },
    ],
  },
  {
    type: "event",
    title: "Customers say your positioning is unclear.",
    text: "People like pieces of the product, but they struggle to explain why it is different.",
    immediate: { reputation: -4, growthRate: -2 },
    decisions: [
      {
        label: "Rewrite the homepage around one buyer",
        hint: "Sharper message, smaller audience.",
        effects: { users: 6, cash: -220, reputation: 7, productQuality: 1, growthRate: 1 },
        insight: "A clearer story reduced confusion. The market got narrower, but more believable.",
      },
      {
        label: "Survey the broad audience",
        hint: "More signal, slower momentum.",
        effects: { users: -2, cash: -160, reputation: 4, productQuality: 2, growthRate: -1 },
        insight: "Research slowed the week, but gave you better language for buyer pain.",
      },
      {
        label: "Keep all segments in the message",
        hint: "Maximum reach, weak clarity.",
        effects: { users: 14, revenue: 120, reputation: -5, growthRate: 3 },
        insight: "The broader message created reach, but buyers still struggled to remember the wedge.",
      },
    ],
  },
  {
    type: "event",
    title: "A niche community starts talking about your product.",
    text: "The conversation is small but intense. If you handle it well, it could become a durable channel.",
    immediate: { users: 18, reputation: 4, growthRate: 4 },
    decisions: [
      {
        label: "Host a founder AMA",
        hint: "Trust and community rise, time cost.",
        effects: { users: 14, cash: -120, reputation: 7, growthRate: 2 },
        insight: "Direct community contact turned attention into trust.",
      },
      {
        label: "Offer a community-only plan",
        hint: "Revenue signal, pricing risk.",
        effects: { users: 10, revenue: 650, cash: 240, reputation: 2, growthRate: 1 },
        insight: "You converted community energy into revenue without fully abandoning the broader market.",
      },
      {
        label: "Ignore it and keep shipping",
        hint: "Product focus, missed distribution.",
        effects: { productQuality: 5, users: -4, reputation: -2, growthRate: -1 },
        insight: "The product improved, but the market conversation cooled while you were heads down.",
      },
    ],
  },
  {
    type: "event",
    title: "A bigger company undercuts your pricing.",
    text: "Buyers are asking why they should pay you when a larger brand is cheaper.",
    immediate: { revenue: -240, reputation: -3, growthRate: -2 },
    decisions: [
      {
        label: "Move upmarket with premium proof",
        hint: "Revenue power rises, adoption slows.",
        effects: { users: -3, revenue: 760, cash: -180, reputation: 5, growthRate: -1 },
        insight: "You stopped competing on price and reframed the product around value.",
      },
      {
        label: "Bundle services around the product",
        hint: "Revenue and support load both rise.",
        effects: { users: 5, revenue: 820, cash: 220, burnRate: 120, reputation: 3 },
        insight: "Services helped justify price, but support complexity increased.",
      },
      {
        label: "Match their discount",
        hint: "Defensive growth, weaker pricing power.",
        effects: { users: 20, revenue: -300, cash: -220, reputation: -3, growthRate: 4 },
        insight: "Discounting protected some growth, but weakened your pricing story.",
      },
    ],
  },
  {
    type: "event",
    title: "A new regulation changes buyer behavior.",
    text: "The market is recalibrating. Some buyers freeze, while others urgently need safer tooling.",
    immediate: { users: -4, growthRate: -2, burnRate: 35 },
    decisions: [
      {
        label: "Position around compliance readiness",
        hint: "Trust and revenue rise, delivery gets heavier.",
        effects: { users: 4, revenue: 720, cash: -300, burnRate: 80, reputation: 7, growthRate: 1 },
        insight: "You turned regulatory pressure into a reason to buy, but support expectations rose.",
      },
      {
        label: "Wait for the market to settle",
        hint: "Protect runway, miss urgent demand.",
        effects: { cash: 120, burnRate: -35, reputation: 1, users: -3, growthRate: -1 },
        insight: "You conserved focus during uncertainty, but urgent buyers moved elsewhere.",
      },
      {
        label: "Run expert interviews",
        hint: "Better market read, short-term slowdown.",
        effects: { users: -1, cash: -180, reputation: 4, productQuality: 2, growthRate: -1 },
        insight: "You learned before overcommitting. The payoff is better positioning, not instant growth.",
      },
    ],
  },
];

let startup = {};
let state = {};
let activePrompt = scenarios[0];
let rng = Math.random;
let turnsUntilEvent = 2;
let audioMuted = false;
let audioContext = null;
let toastTimer = null;
let activeCenterView = "overview";
let activeTimelineFilter = "all";
let currentTheme = "dark";

function createInitialMarketState() {
  const segment = inferInitialSegment();
  return {
    marketSize: 65,
    demand: 58,
    competition: 45,
    differentiation: 48,
    pricingPower: 45,
    competitorPressure: 35,
    segment,
    positioning: "niche",
    pricing: "freemium",
    message: "",
    lastAction: "Market map initialized.",
  };
}

function inferInitialSegment() {
  const text = `${startup.audience || ""} ${startup.niche || ""}`.toLowerCase();
  if (text.includes("student") || text.includes("college")) return "students";
  if (text.includes("creator") || text.includes("influencer") || text.includes("writer")) return "creators";
  if (text.includes("developer") || text.includes("engineer") || text.includes("dev")) return "developers";
  if (text.includes("enterprise") || text.includes("company") || text.includes("corporate")) return "enterprises";
  if (text.includes("business") || text.includes("shop") || text.includes("local")) return "smallBusinesses";
  return "founders";
}

function startGame(formData) {
  startup = {
    idea: formData.get("idea").trim(),
    audience: formData.get("audience").trim(),
    niche: formData.get("niche").trim(),
    startupType: formData.get("startupType"),
    style: formData.get("style"),
    goal: formData.get("goal"),
  };

  const type = startupTypes[startup.startupType];
  rng = createSeededRandom(`${startup.idea}|${startup.audience}|${startup.niche}|${startup.startupType}|${startup.style}|${startup.goal}`);
  turnsUntilEvent = randomBetween(1, 2);
  state = {
    week: 1,
    users: 10,
    revenue: 0,
    totalRevenue: 0,
    cash: type.startingCash,
    burnRate: type.startingBurn,
    reputation: 70,
    productQuality: 55,
    growthRate: 4,
    peakUsers: 10,
    bestStreak: 0,
    streak: 0,
    team: {
      roles: {
        engineer: 1,
        designer: 0,
        marketer: 0,
        sales: 0,
        operations: 0,
      },
      morale: 76,
      efficiency: 76,
      layoffs: 0,
      message: "",
    },
    product: {
      stability: 60,
      ux: 55,
      featureDepth: 35,
      technicalDebt: 25,
      roadmap: {
        backlog: ["Improve Onboarding", "Fix Bugs", "Add Core Feature"],
        inProgress: [],
        shipped: [],
      },
      message: "",
    },
    market: createInitialMarketState(),
    history: [],
    lastDelta: null,
    lastInsight: "Choose your first move. Every option has a cost.",
    currentEventImpact: "",
    immediateAppliedPromptId: null,
  };

  activeCenterView = "overview";
  activeTimelineFilter = "all";
  setCenterView("overview");
  setTimelineFilter("all");
  activePrompt = choosePrompt(scenarios);
  landingPage.classList.add("is-hidden");
  endingPage.classList.add("is-hidden");
  endingPage.classList.remove("ending-failure", "ending-success", "ending-unicorn");
  simulationPage.classList.remove("is-hidden");
  companyName.textContent = startup.idea;
  companyContext.textContent = `${type.label} · ${founderStyles[startup.style].label} founder · ${goals[startup.goal].label} goal · ${type.note}`;
  profileName.textContent = startup.idea;
  profileType.textContent = type.label;
  profileStyle.textContent = founderStyles[startup.style].label;
  profileGoal.textContent = goals[startup.goal].label;
  render();
}

function render() {
  applyImmediateEventEffect(activePrompt);

  weekNumber.textContent = state.week;
  usersStat.textContent = state.users.toLocaleString();
  revenueStat.textContent = formatMoney(state.revenue);
  cashStat.textContent = formatMoney(state.cash);
  burnStat.textContent = formatMoney(state.burnRate);
  const runwayWeeks = calculateRunwayWeeks();
  runwayStat.textContent = `${runwayWeeks}w`;
  runwayStatPill.classList.remove("runway-safe", "runway-warning", "runway-danger");
  runwayStatPill.classList.add(runwayClass(runwayWeeks));
  reputationStat.textContent = state.reputation;
  streakStat.textContent = state.streak;
  if (qualityStat) {
    qualityStat.textContent = state.productQuality;
  }
  growthStat.textContent = `${state.growthRate}%`;
  growthStat.className = state.growthRate >= 0 ? "gain" : "loss";
  updateProgressBars();
  pulseChangedStats(state.lastDelta);
  scenarioTitle.textContent = activePrompt.title;
  scenarioText.textContent = activePrompt.text;
  eventBadge.classList.toggle("is-hidden", activePrompt.type !== "event");
  eventBadge.textContent = state.currentEventImpact || "Random event";
  historyCount.textContent = state.history.length;
  decisionWeekLabel.textContent = state.week;
  insightText.textContent = state.lastInsight;
  sideInsightText.textContent = state.lastInsight;
  sideGrowthLabel.textContent = `${state.growthRate}%`;
  sideUsersLabel.textContent = `${state.users.toLocaleString()} users`;
  nextEventLabel.textContent = turnsUntilEvent === 1 ? "1 week" : `${turnsUntilEvent} weeks`;
  nextEventBar.style.width = `${turnsUntilEvent === 1 ? 68 : 34}%`;

  decisionButtons.innerHTML = "";
  activePrompt.decisions.forEach((decision, index) => {
    const button = document.createElement("button");
    button.className = `decision-button ${classifyDecision(decision.effects)}`;
    button.type = "button";
    button.innerHTML = `<i>${String(index + 1).padStart(2, "0")}</i><strong>${decision.label}</strong><span>${decision.hint}</span><em>${decisionPreview(decision.effects)}</em>`;
    button.addEventListener("click", () => makeDecision(decision));
    decisionButtons.append(button);
  });

  renderHistory();
  renderTimelineView();
  renderTeamView();
  renderProductView();
  renderMarketView();
}

function applyImmediateEventEffect(prompt) {
  if (prompt.type !== "event" || !prompt.immediate || state.immediateAppliedPromptId === prompt.title) {
    return;
  }

  const immediate = normalizeEffects(prompt.immediate);
  applyEffects(immediate);
  state.peakUsers = Math.max(state.peakUsers, state.users);
  state.immediateAppliedPromptId = prompt.title;
  state.currentEventImpact = `Event impact: ${summarizeEffects(immediate)}`;
}

function calculateStreakBonus() {
  if (state.streak < 2) {
    return { users: 0, growthRate: 0 };
  }

  return {
    users: Math.round(Math.max(1, state.users * 0.03)),
    growthRate: Math.min(5, Math.ceil(state.streak * 0.6)),
  };
}

function classifyOutcome(delta) {
  const strongPositive = delta.users >= 15 || delta.revenue >= 600 || delta.reputation >= 6;
  const badOutcome = delta.cash < -1200 || delta.reputation <= -6 || delta.users <= -12 || delta.growthRate <= -6;

  if (badOutcome && !strongPositive) {
    return "bad";
  }
  if (strongPositive) {
    return "good";
  }
  return "mixed";
}

function updateStreak(outcome) {
  if (outcome === "good") {
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    return;
  }

  if (outcome === "bad") {
    state.streak = 0;
  }
}

function calculateTeamEffects() {
  const roles = state.team.roles;
  const efficiencyMultiplier = state.team.efficiency / 100;
  return normalizeEffects({
    users: Math.round((roles.marketer * 5 + roles.designer * 2) * efficiencyMultiplier),
    revenue: Math.round((roles.sales * 170 + roles.operations * 45) * efficiencyMultiplier),
    cash: 0,
    burnRate: Math.round(-(roles.operations * 28) * efficiencyMultiplier),
    reputation: Math.round((roles.designer * 2 + roles.operations) * efficiencyMultiplier),
    productQuality: Math.round((roles.engineer * 3 + roles.designer) * efficiencyMultiplier),
    growthRate: Math.round((roles.marketer * 1.5 + roles.sales * 0.5 - lowMoraleDrag()) * efficiencyMultiplier),
  });
}

function lowMoraleDrag() {
  return state.team.morale < 45 ? 2 : 0;
}

function updateTeamMorale(delta, outcome) {
  let moraleChange = 0;
  if (outcome === "good" || delta.users >= 15 || delta.revenue >= 600) moraleChange += 4;
  if (outcome === "bad" || delta.cash < -1000 || delta.growthRate < -4) moraleChange -= 5;
  if (calculateRunwayWeeks() <= 4) moraleChange -= 4;
  if (calculateRunwayWeeks() >= 10) moraleChange += 1;
  state.team.morale = clamp(state.team.morale + moraleChange, 0, 100);
  state.team.efficiency = calculateTeamEfficiency();
}

function calculateTeamEfficiency() {
  const teamSize = getTeamSize();
  if (teamSize === 0) return 55;

  const counts = Object.values(state.team.roles);
  const maxRole = Math.max(...counts);
  const imbalancePenalty = maxRole / teamSize > 0.62 ? 14 : maxRole / teamSize > 0.48 ? 7 : 0;
  const opsBonus = Math.min(state.team.roles.operations * 4, 12);
  const moraleBase = state.team.morale * 0.72;
  return clamp(Math.round(moraleBase + 24 + opsBonus - imbalancePenalty), 25, 100);
}

function getTeamSize() {
  return Object.values(state.team.roles).reduce((sum, count) => sum + count, 0);
}

function getTeamCost() {
  return Object.entries(state.team.roles).reduce((sum, [role, count]) => sum + teamRoles[role].cost * count, 0);
}

function hireRole(role) {
  const runwayWeeks = calculateRunwayWeeks();
  const cost = teamRoles[role].cost;
  if (state.cash < cost * 3 || runwayWeeks <= 4) {
    state.team.message = "Not enough runway to safely hire.";
    renderTeamView();
    return;
  }

  state.team.roles[role] += 1;
  state.burnRate += cost;
  state.team.morale = clamp(state.team.morale + 2, 0, 100);
  state.team.efficiency = calculateTeamEfficiency();
  state.team.message = `${teamRoles[role].label} hired. Burn increased by ${formatMoney(cost)} per week.`;
  render();
}

function fireRole(role) {
  if (state.team.roles[role] <= 0) {
    state.team.message = `No ${teamRoles[role].label.toLowerCase()} to remove.`;
    renderTeamView();
    return;
  }

  const cost = teamRoles[role].cost;
  state.team.roles[role] -= 1;
  state.burnRate = Math.max(120, state.burnRate - cost);
  state.team.morale = clamp(state.team.morale - 8, 0, 100);
  state.team.efficiency = clamp(calculateTeamEfficiency() - 5, 25, 100);
  state.team.layoffs += 1;
  state.team.message = `${teamRoles[role].label} removed. Burn dropped, but morale took a hit.`;
  render();
}

function calculateProductEffects() {
  const product = state.product;
  const debtPenalty = product.technicalDebt > 70 ? 5 : product.technicalDebt > 50 ? 2 : 0;
  const qualityDrag = state.productQuality < 40 ? 4 : 0;
  return normalizeEffects({
    users: Math.round((product.ux - 50) / 8 + (product.featureDepth - 35) / 10 - debtPenalty - qualityDrag),
    revenue: Math.round((product.featureDepth - 35) * 8),
    cash: 0,
    burnRate: product.technicalDebt > 65 ? 35 : 0,
    reputation: Math.round((product.ux - 50) / 14 + (product.stability - 55) / 16 - debtPenalty),
    productQuality: Math.round((product.stability + product.ux + product.featureDepth - product.technicalDebt) / 70 - 2),
    growthRate: Math.round((product.featureDepth - 35) / 18 - debtPenalty),
  });
}

function updateProductPressure(delta) {
  if (delta.growthRate > 5 || delta.users > 20) {
    state.product.technicalDebt = clamp(state.product.technicalDebt + 2, 0, 100);
    state.product.stability = clamp(state.product.stability - 1, 0, 100);
  }
  if (state.product.technicalDebt > 70) {
    state.product.stability = clamp(state.product.stability - 2, 0, 100);
  }
  state.product.message = productHealth() === "Broken"
    ? "Product risk is high. Stabilize before scaling."
    : "";
}

function applyProductUpgrade(upgradeKey) {
  const upgrade = productUpgrades[upgradeKey];
  if (!upgrade) return;
  if (state.cash < upgrade.cost || calculateRunwayWeeks() <= 3) {
    state.product.message = "Not enough runway to safely ship this upgrade.";
    renderProductView();
    return;
  }

  state.cash -= upgrade.cost;
  state.product.ux = clamp(state.product.ux + upgrade.effects.ux, 0, 100);
  state.product.stability = clamp(state.product.stability + upgrade.effects.stability, 0, 100);
  state.product.featureDepth = clamp(state.product.featureDepth + upgrade.effects.featureDepth, 0, 100);
  state.product.technicalDebt = clamp(state.product.technicalDebt + upgrade.effects.technicalDebt, 0, 100);
  state.productQuality = clamp(state.productQuality + upgrade.effects.quality, 0, 100);
  state.reputation = clamp(state.reputation + upgrade.effects.reputation, 0, 100);
  state.users = Math.max(0, state.users + upgrade.effects.users);
  state.growthRate = clamp(state.growthRate + upgrade.effects.growthRate, -35, 80);
  state.product.roadmap.inProgress = [upgrade.label];
  state.product.roadmap.shipped.unshift(`Week ${state.week}: ${upgrade.label}`);
  state.product.roadmap.backlog = state.product.roadmap.backlog.filter((item) => item !== upgrade.label);
  if (!state.product.roadmap.backlog.includes(upgrade.label)) {
    state.product.roadmap.backlog.push(upgrade.label);
  }
  state.product.message = `${upgrade.label} shipped for ${formatMoney(upgrade.cost)}.`;
  showResultToast(normalizeEffects({
    users: upgrade.effects.users,
    cash: -upgrade.cost,
    reputation: upgrade.effects.reputation,
    productQuality: upgrade.effects.quality,
    growthRate: upgrade.effects.growthRate,
  }), upgrade.effects.reputation + upgrade.effects.quality >= 0 ? "good" : "mixed");
  render();
}

function productHealth() {
  const score = state.productQuality * 0.35 + state.product.stability * 0.35 + (100 - state.product.technicalDebt) * 0.3;
  if (score >= 78) return "Excellent";
  if (score >= 58) return "Healthy";
  if (score >= 38) return "Fragile";
  return "Broken";
}

function calculateMarketEffects() {
  const market = state.market;
  if (!market) return normalizeEffects();

  const segmentEffects = marketSegments[market.segment].effects;
  const positioningEffects = marketPositionings[market.positioning].effects;
  const pricingEffects = marketPricing[market.pricing].effects;
  const fitMultiplier = marketFitMultiplier();
  const pressurePenalty = market.competitorPressure > 78 ? 0.55 : market.competitorPressure > 62 ? 0.75 : 1;
  const differentiationShield = market.differentiation > 70 ? 4 : market.differentiation > 58 ? 2 : 0;
  const weakFitDrag = marketFitStatus() === "Weak Fit" ? 5 : 0;
  const base = combineEffects(segmentEffects, positioningEffects, pricingEffects);

  return normalizeEffects({
    users: Math.round(base.users * fitMultiplier * pressurePenalty + (market.demand - 55) / 6 - weakFitDrag),
    revenue: Math.round(base.revenue * (0.7 + market.pricingPower / 100)),
    cash: 0,
    burnRate: Math.round(base.burnRate + Math.max(0, (market.competitorPressure - 70) / 3)),
    reputation: Math.round(base.reputation + (market.differentiation - market.competition) / 28 + differentiationShield - weakFitDrag / 2),
    productQuality: base.productQuality,
    growthRate: Math.round(base.growthRate + (market.demand - market.competition) / 22 + (market.differentiation - 50) / 30 - weakFitDrag / 2),
  });
}

function marketFitMultiplier() {
  const fit = marketFitStatus();
  if (fit === "Category Leader") return 1.3;
  if (fit === "Strong Fit") return 1.14;
  if (fit === "Emerging Fit") return 1;
  return 0.74;
}

function updateMarketPressure(delta) {
  if (!state.market) return;
  const market = state.market;
  const attractiveMarket = (market.marketSize + market.demand + market.pricingPower) / 3;
  const growthSignal = delta.users > 20 || delta.growthRate > 5 ? 4 : delta.users < -8 ? -2 : 0;
  const differentiationGap = market.differentiation < 45 ? 5 : market.differentiation > 70 ? -4 : 0;
  const competitionBase = Math.round((market.competition - 50) / 10);
  market.competitorPressure = clamp(
    Math.round(market.competitorPressure + growthSignal + differentiationGap + competitionBase + (attractiveMarket > 68 ? 2 : 0)),
    0,
    100,
  );
  if (market.competitorPressure > 78) {
    market.message = "Competitor pressure is high. Sharpen positioning before rivals define the category.";
  } else if (market.differentiation < 40) {
    market.message = "Your positioning is getting blurry. Differentiation needs work.";
  } else {
    market.message = "";
  }
}

function applyMarketChoice(kind, key) {
  if (!state.market) return;
  const map = kind === "segment" ? marketSegments : kind === "positioning" ? marketPositionings : marketPricing;
  const option = map[key];
  if (!option) return;
  if (state.market[kind] === key) {
    state.market.message = `${option.label} is already active.`;
    state.market.lastAction = option.note;
    renderMarketView();
    return;
  }

  const previousOption = map[state.market[kind]];
  state.market[kind] = key;
  applyMarketStatDelta(relativeMarketStats(previousOption?.stats || {}, option.stats || {}));
  state.market.message = `${kind === "segment" ? "Segment" : kind === "positioning" ? "Positioning" : "Pricing"} set to ${option.label}.`;
  state.market.lastAction = option.note;
  render();
}

function relativeMarketStats(previousStats, nextStats) {
  const keys = ["marketSize", "demand", "competition", "differentiation", "pricingPower", "competitorPressure"];
  return keys.reduce((delta, key) => {
    delta[key] = (nextStats[key] || 0) - (previousStats[key] || 0);
    return delta;
  }, {});
}

function applyMarketAction(actionKey) {
  const action = marketActions[actionKey];
  if (!action || !state.market) return;
  if (state.cash < action.cost || calculateRunwayWeeks() <= 3) {
    state.market.message = "Not enough runway to safely run this market play.";
    renderMarketView();
    return;
  }

  const effects = normalizeEffects({
    ...action.effects,
    cash: (action.effects.cash || 0) - action.cost,
  });
  applyMarketStatDelta(action.market);
  applyEffects(effects);
  state.peakUsers = Math.max(state.peakUsers, state.users);
  state.market.message = `${action.label} completed for ${formatMoney(action.cost)}.`;
  state.market.lastAction = action.impact;
  showResultToast(effects, classifyOutcome(effects));
  render();
}

function applyMarketStatDelta(delta = {}) {
  const market = state.market;
  market.marketSize = clamp(market.marketSize + (delta.marketSize || 0), 0, 100);
  market.demand = clamp(market.demand + (delta.demand || 0), 0, 100);
  market.competition = clamp(market.competition + (delta.competition || 0), 0, 100);
  market.differentiation = clamp(market.differentiation + (delta.differentiation || 0), 0, 100);
  market.pricingPower = clamp(market.pricingPower + (delta.pricingPower || 0), 0, 100);
  market.competitorPressure = clamp(market.competitorPressure + (delta.competitorPressure || 0), 0, 100);
}

function marketFitStatus() {
  const market = state.market;
  if (!market) return "Emerging Fit";
  const score =
    market.demand * 0.24 +
    market.differentiation * 0.22 +
    state.reputation * 0.2 +
    clamp(state.growthRate + 20, 0, 100) * 0.16 +
    state.productQuality * 0.18;
  if (score >= 78 && market.competitorPressure < 70) return "Category Leader";
  if (score >= 64) return "Strong Fit";
  if (score >= 46) return "Emerging Fit";
  return "Weak Fit";
}

function marketFitRank(fit) {
  return { "Weak Fit": 0, "Emerging Fit": 1, "Strong Fit": 2, "Category Leader": 3 }[fit] || 0;
}

function makeDecision(decision) {
  playSound("click");
  const before = captureStats();
  const baseEffects = normalizeEffects(decision.effects);
  const styleAdjusted = applyFounderStyle(baseEffects);
  const typeAdjusted = applyStartupType(styleAdjusted);
  const strategicEffects = applySystemFeedback(typeAdjusted, decision.label);
  const variance = controlledVariance(strategicEffects);
  const finalEffects = combineEffects(strategicEffects, variance);
  const streakBonus = calculateStreakBonus();
  const teamEffects = calculateTeamEffects();
  const productEffects = calculateProductEffects();
  const marketEffects = calculateMarketEffects();

  finalEffects.users += streakBonus.users;
  finalEffects.growthRate += streakBonus.growthRate;
  combineInto(finalEffects, teamEffects);
  combineInto(finalEffects, productEffects);
  combineInto(finalEffects, marketEffects);

  const weeklyRevenue = calculateWeeklyRevenue(finalEffects);
  finalEffects.revenue += weeklyRevenue;
  finalEffects.cash += weeklyRevenue - state.burnRate;

  applyEffects(finalEffects);
  state.peakUsers = Math.max(state.peakUsers, state.users);

  const after = captureStats();
  const delta = diffStats(before, after);
  const outcome = classifyOutcome(delta);
  updateStreak(outcome);
  updateTeamMorale(delta, outcome);
  updateProductPressure(delta);
  updateMarketPressure(delta);
  state.lastDelta = delta;
  state.history.push({
    week: state.week,
    title: activePrompt.title,
    decision: decision.label,
    insight: buildInsight(decision, finalEffects),
    delta,
    outcome,
  });
  state.lastInsight = state.history[state.history.length - 1].insight;
  showResultToast(delta, outcome);
  playSound(outcome === "bad" ? "negative" : "positive");

  const ending = evaluateEnding();
  if (ending) {
    showEnding(ending);
    return;
  }

  state.week += 1;
  activePrompt = nextPrompt();
  render();
}

function applyFounderStyle(effects) {
  const style = founderStyles[startup.style];
  const adjusted = { ...effects };

  adjusted.users = Math.round(adjusted.users * style.growthMultiplier);
  adjusted.growthRate = Math.round(adjusted.growthRate * style.growthMultiplier);
  adjusted.cash = Math.round(adjusted.cash * (adjusted.cash < 0 ? style.cashMultiplier : 1));
  adjusted.reputation = Math.round(adjusted.reputation * style.stability);
  adjusted.productQuality = Math.round(adjusted.productQuality * style.qualityMultiplier);

  if (startup.style === "risk" && adjusted.growthRate > 0) {
    adjusted.burnRate += 45;
  }
  if (startup.style === "conservative" && adjusted.cash < 0) {
    adjusted.burnRate -= 35;
  }

  return adjusted;
}

function applyStartupType(effects) {
  const type = startupTypes[startup.startupType];
  const adjusted = { ...effects };
  const hasMarketLiquidity = startup.startupType === "marketplace" && state.users > 180;
  const usersMultiplier = hasMarketLiquidity ? type.lateUsersMultiplier : type.usersMultiplier;

  adjusted.users = Math.round(adjusted.users * usersMultiplier);
  adjusted.revenue = Math.round(adjusted.revenue * type.revenueMultiplier);
  adjusted.burnRate = Math.round(adjusted.burnRate * type.burnMultiplier);
  adjusted.productQuality += type.qualityDrift;
  adjusted.reputation += type.reputationDrift;

  if (startup.startupType === "agency" && adjusted.users > 14) {
    adjusted.users = 14 + Math.round((adjusted.users - 14) * 0.35);
    adjusted.burnRate += 45;
  }

  if (startup.startupType === "creator" && adjusted.users > 18) {
    adjusted.reputation -= 3;
    adjusted.growthRate += 2;
  }

  if (startup.startupType === "ai" && adjusted.users > 20) {
    adjusted.burnRate += 110;
    adjusted.reputation -= randomBetween(0, 4);
  }

  if (startup.startupType === "marketplace" && state.users < 80) {
    adjusted.revenue -= 90;
    adjusted.growthRate -= 2;
  }

  if (startup.startupType === "saas" && adjusted.productQuality > 0) {
    adjusted.revenue += 140;
  }

  return adjusted;
}

function applySystemFeedback(effects, decisionLabel) {
  const adjusted = { ...effects };
  const runwayWeeks = calculateRunwayWeeks();

  if (state.productQuality < 40 && adjusted.users > 10) {
    adjusted.reputation -= 5;
    adjusted.growthRate -= 3;
    adjusted.users -= Math.round(adjusted.users * 0.2);
  }

  if (state.reputation < 35 && adjusted.users > 0) {
    adjusted.users -= 6;
    adjusted.revenue -= 120;
  }

  if (state.cash < state.burnRate * 2) {
    adjusted.growthRate -= 2;
    adjusted.reputation -= 2;
  }

  if (runwayWeeks <= 4) {
    adjusted.reputation -= 4;
    adjusted.growthRate -= 3;
    adjusted.users -= Math.max(2, Math.round(state.users * 0.05));
  } else if (runwayWeeks <= 8) {
    adjusted.growthRate -= 1;
    adjusted.reputation -= 1;
  }

  if (state.productQuality > 72 && adjusted.reputation > 0) {
    adjusted.users += 5;
    adjusted.revenue += 90;
  }

  return adjusted;
}

function controlledVariance(effects) {
  const style = founderStyles[startup.style];
  const type = startupTypes[startup.startupType];
  const risk = style.risk * type.risk;
  const swing = Math.round(3 * risk);
  const cashSwing = Math.round(180 * risk);

  return normalizeEffects({
    users: effects.users === 0 ? 0 : randomBetween(-swing, swing + 4),
    revenue: randomBetween(-cashSwing, cashSwing),
    cash: randomBetween(-cashSwing, Math.round(cashSwing * 0.8)),
    growthRate: randomBetween(-Math.ceil(risk * 2), Math.ceil(risk * 2)),
    reputation: randomBetween(-Math.ceil(style.risk * 2), Math.ceil(style.stability * 2)),
    productQuality: randomBetween(-1, 2),
  });
}

function calculateWeeklyRevenue(effects) {
  const type = startupTypes[startup.startupType];
  const userBase = Math.max(0, state.users + effects.users);
  const qualityMultiplier = 0.65 + state.productQuality / 120;
  const reputationMultiplier = 0.65 + state.reputation / 140;
  const monetization = startup.goal === "profit" ? 1.22 : startup.goal === "growth" ? 0.82 : 1;
  const marketplacePenalty = startup.startupType === "marketplace" && userBase < 160 ? 0.58 : 1;
  const agencyCeiling = startup.startupType === "agency" ? Math.min(userBase, 180) : userBase;
  const revenueBase = startup.startupType === "agency" ? agencyCeiling * 9.4 : userBase * 5.8;
  return Math.round(revenueBase * qualityMultiplier * reputationMultiplier * monetization * type.revenueMultiplier * marketplacePenalty);
}

function applyEffects(effects) {
  state.users = Math.max(0, Math.round(state.users + effects.users));
  state.revenue = Math.max(0, Math.round(state.revenue + effects.revenue));
  state.totalRevenue = Math.max(0, Math.round(state.totalRevenue + Math.max(0, effects.revenue)));
  state.cash = Math.round(state.cash + effects.cash);
  state.burnRate = clamp(Math.round(state.burnRate + effects.burnRate), 120, 6000);
  state.reputation = clamp(Math.round(state.reputation + effects.reputation), 0, 100);
  state.productQuality = clamp(Math.round(state.productQuality + effects.productQuality), 0, 100);
  state.growthRate = clamp(Math.round(state.growthRate + effects.growthRate), -35, 80);
}

function evaluateEnding() {
  if (state.cash <= 0) {
    return { type: "failure", title: "You ran out of money", reason: "Cash hit zero before the business could support its burn." };
  }
  if (state.users <= 0) {
    return { type: "failure", title: "You lost all traction", reason: "The user base hit zero, leaving no one to learn from or sell to." };
  }
  if (state.reputation <= 0) {
    return { type: "failure", title: "Users lost trust", reason: "Reputation collapsed, making acquisition and retention impossible." };
  }

  if (state.users >= 5000 && state.revenue >= 90000 && state.growthRate >= 28) {
    return { type: "unicorn", title: "Unicorn", reason: "You hit breakout scale before the clock ran out." };
  }

  if (state.week >= MAX_WEEKS) {
    if (state.users >= 2500 && state.revenue >= 40000 && state.growthRate >= 20) {
      return { type: "success", title: "High Growth Startup", reason: "You built a fast-growing company with serious market pull." };
    }
    if (state.revenue >= state.burnRate * 5 && state.cash > 0) {
      return { type: "success", title: "Profitable Business", reason: "You created a steady business that can support its costs." };
    }
    if (state.users >= 900 && state.growthRate >= 16) {
      return { type: "success", title: "High Growth Startup", reason: "You survived with strong audience momentum, even if the business still needs tuning." };
    }
    return { type: "success", title: "Profitable Business", reason: "You survived the startup gauntlet with a real but still-growing company." };
  }

  return null;
}

function showEnding(ending) {
  const score = calculateGoalScore();
  simulationPage.classList.add("is-hidden");
  endingPage.classList.remove("is-hidden");
  endingPage.classList.toggle("ending-failure", ending.type === "failure");
  endingPage.classList.toggle("ending-success", ending.type === "success");
  endingPage.classList.toggle("ending-unicorn", ending.type === "unicorn");
  endingEyebrow.textContent = ending.type === "failure" ? "Run failed" : "Run complete";
  endingTitle.textContent = endingTitleFor(ending);
  endingReason.textContent = ending.reason;
  summaryWeeks.textContent = state.week;
  summaryPeakUsers.textContent = state.peakUsers.toLocaleString();
  summaryRevenue.textContent = formatMoney(state.totalRevenue);
  summaryScore.textContent = `${score} / 1000`;
  endingInsight.textContent = `${goals[startup.goal].endingText} Best streak: ${state.bestStreak}. Final cash: ${formatMoney(state.cash)}. Final runway: ${calculateRunwayWeeks()} weeks.`;
  renderKeyDecisions();
  playSound(ending.type === "failure" ? "negative" : "positive");
}

function calculateGoalScore() {
  const survival = clamp((state.week / MAX_WEEKS) * 220, 0, 220);
  const userScore = clamp(Math.sqrt(state.peakUsers) * 16, 0, 230);
  const revenueScore = clamp(Math.sqrt(state.totalRevenue) * 3.1, 0, 230);
  const growthScore = clamp((state.growthRate + 35) * 3.2, 0, 210);
  const resilienceScore = clamp(state.reputation * 1.1 + state.productQuality * 0.8 + Math.max(0, state.cash) / 180, 0, 210);

  const scoreMap = {
    profit: survival + revenueScore * 1.55 + userScore * 0.55 + growthScore * 0.35 + resilienceScore * 0.7,
    growth: survival + userScore * 1.5 + growthScore * 1.12 + revenueScore * 0.48 + resilienceScore * 0.35,
    stability: survival + resilienceScore * 1.65 + revenueScore * 0.75 + userScore * 0.35 + growthScore * 0.3,
  };

  const streakBonus = clamp(state.bestStreak * 12, 0, 120);
  return clamp(Math.round(scoreMap[startup.goal] + streakBonus), 0, 1000);
}

function endingTitleFor(ending) {
  if (ending.type === "failure") {
    return "💀 Your Startup Failed";
  }
  if (ending.type === "unicorn") {
    return "🦄 Unicorn";
  }
  if (ending.title.includes("High Growth")) {
    return "🚀 High Growth Startup";
  }
  if (ending.title.includes("Profitable")) {
    return "💰 Profitable Business";
  }
  return ending.title;
}

function renderKeyDecisions() {
  keyDecisionsList.innerHTML = "";
  const keyEntries = [...state.history]
    .sort((a, b) => decisionImpactScore(b.delta) - decisionImpactScore(a.delta))
    .slice(0, 3);

  if (keyEntries.length === 0) {
    const item = document.createElement("li");
    item.textContent = "No major decisions recorded.";
    keyDecisionsList.append(item);
    return;
  }

  keyEntries.forEach((entry) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>Week ${entry.week}: ${entry.decision}</strong><span>${formatPlainDelta(entry.delta)}</span>`;
    keyDecisionsList.append(item);
  });
}

function decisionImpactScore(delta) {
  return Math.abs(delta.users) + Math.abs(delta.revenue) / 40 + Math.abs(delta.cash) / 60 + Math.abs(delta.reputation) * 5 + Math.abs(delta.growthRate) * 4;
}

function nextPrompt() {
  turnsUntilEvent -= 1;
  if (turnsUntilEvent <= 0) {
    turnsUntilEvent = randomBetween(1, 2);
    if (state.market && (state.market.competitorPressure >= 65 || rng() < 0.28)) {
      return choosePrompt(marketEvents, activePrompt.title);
    }
    return choosePrompt(randomEvents, activePrompt.title);
  }
  state.currentEventImpact = "";
  return choosePrompt(scenarios, activePrompt.title);
}

function choosePrompt(pool, avoidTitle = "") {
  let prompt = pool[randomIndex(pool.length)];
  if (pool.length > 1) {
    while (prompt.title === avoidTitle) {
      prompt = pool[randomIndex(pool.length)];
    }
  }
  return prompt;
}

function buildInsight(decision, effects) {
  const tradeoff = strongestTradeoff(effects);
  const runwayWeeks = calculateRunwayWeeks();
  const runwayWarning = runwayWeeks <= 4
    ? ` Runway is critical at ${runwayWeeks} weeks, so every burn increase is dangerous.`
    : runwayWeeks <= 8
      ? ` Runway is getting tight at ${runwayWeeks} weeks.`
      : "";
  return `${decision.insight} ${tradeoff}${runwayWarning}`;
}

function strongestTradeoff(effects) {
  if (effects.users > 20 && effects.productQuality < 0) {
    return "The trade-off is clear: acquisition climbed while product quality took a hit.";
  }
  if (effects.cash < -900 && effects.growthRate > 4) {
    return "You bought momentum with runway, so cash management matters more next week.";
  }
  if (effects.productQuality > 7 && effects.growthRate < 0) {
    return "Quality improved, but short-term growth slowed while the team focused inward.";
  }
  if (effects.reputation < -4) {
    return "The move created pressure on trust, which can weaken future retention.";
  }
  if (effects.revenue > 900 || effects.cash > 900) {
    return "The company gained financial breathing room, opening more strategic options.";
  }
  return "The result nudged multiple parts of the business instead of moving one stat in isolation.";
}

function renderHistory() {
  historyList.innerHTML = "";

  if (state.history.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "timeline-entry current-entry";
    emptyItem.innerHTML = `
      <div class="week-chip">Week ${state.week}</div>
      <div>
        <mark>${promptBadge(activePrompt)}</mark>
        <strong>${activePrompt.title}</strong>
        <span>${activePrompt.text}</span>
      </div>
    `;
    historyList.append(emptyItem);
    return;
  }

  state.history.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "timeline-entry";
    item.innerHTML = `
      <div class="week-chip">Week ${entry.week}</div>
      <div>
        <mark>${entry.outcome === "bad" ? "Damage Report" : entry.outcome === "good" ? "Momentum Log" : "Founder Note"}</mark>
        <strong>${entry.title}</strong>
        <span>You chose: ${entry.decision}</span>
        <small>${formatDelta(entry.delta)}</small>
        <p>${entry.insight}</p>
      </div>
    `;
    historyList.append(item);
  });

  const currentItem = document.createElement("li");
  currentItem.className = "timeline-entry current-entry";
  currentItem.innerHTML = `
    <div class="week-chip">Week ${state.week}</div>
    <div>
      <mark>${promptBadge(activePrompt)}</mark>
      <strong>${activePrompt.title}</strong>
      <span>${activePrompt.text}</span>
    </div>
  `;
  historyList.append(currentItem);
  historyList.scrollTop = historyList.scrollHeight;
}

function promptBadge(prompt) {
  if (prompt.type === "event") {
    if (prompt.title.toLowerCase().includes("user") || prompt.title.toLowerCase().includes("onboarding")) {
      return "User Feedback";
    }
    return "Market Event";
  }
  return "Week Report";
}

function renderTimelineView() {
  const entries = state.history.map((entry) => ({
    ...entry,
    eventType: inferEventType(entry),
    impact: timelineImpactScore(entry.delta),
  }));
  const visibleEntries = entries.filter((entry) => matchesTimelineFilter(entry, activeTimelineFilter));

  summarySurvived.textContent = state.history.length;
  const bestEntry = [...entries].sort((a, b) => b.impact - a.impact)[0];
  const worstEntry = [...entries].sort((a, b) => a.impact - b.impact)[0];
  const growthEntry = [...entries].sort((a, b) => b.delta.users - a.delta.users)[0];
  summaryBestWeek.textContent = bestEntry ? `Week ${bestEntry.week}` : "-";
  summaryWorstWeek.textContent = worstEntry ? `Week ${worstEntry.week}` : "-";
  summaryGrowthMoment.textContent = growthEntry && growthEntry.delta.users > 0 ? `+${growthEntry.delta.users} users` : "-";
  trajectoryLabel.textContent = `Current trajectory: ${currentTrajectory()}`;

  timelineDetailList.innerHTML = "";

  if (state.history.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "timeline-empty";
    emptyItem.textContent = "Your founder story will appear here after your first decision.";
    timelineDetailList.append(emptyItem);
    return;
  }

  if (visibleEntries.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "timeline-empty";
    emptyItem.textContent = "No entries match this filter yet.";
    timelineDetailList.append(emptyItem);
    return;
  }

  visibleEntries.forEach((entry) => {
    const item = document.createElement("li");
    item.className = `timeline-detail-entry ${entry.outcome === "good" ? "entry-win" : entry.outcome === "bad" ? "entry-loss" : "entry-mixed"} ${entry.week === state.week - 1 ? "latest-entry" : ""}`;
    item.innerHTML = `
      <div class="timeline-node">${entry.eventType.icon}</div>
      <article>
        <div class="timeline-detail-top">
          <span>Week ${entry.week}</span>
          <mark>${entry.eventType.label}</mark>
        </div>
        <h3>${entry.title}</h3>
        <p class="decision-line">Decision: ${entry.decision}</p>
        <p class="outcome-line">${timelineOutcomeSummary(entry)}</p>
        <small>${formatDelta(entry.delta)}</small>
        <p>${entry.insight}</p>
      </article>
    `;
    timelineDetailList.append(item);
  });
}

function inferEventType(entry) {
  const text = `${entry.title} ${entry.decision} ${entry.insight}`.toLowerCase();

  if (entry.week === 1) return { label: "Launch Day", icon: "LD", group: "market" };
  if (text.includes("viral") || entry.delta.users >= 30) return { label: "Growth Spike", icon: "GS", group: "wins" };
  if (text.includes("user") || text.includes("onboarding") || text.includes("complain")) return { label: "User Feedback", icon: "UF", group: "product" };
  if (text.includes("market") || text.includes("partnership") || text.includes("launch") || text.includes("pricing") || text.includes("positioning") || text.includes("community") || text.includes("regulation")) return { label: "Market Event", icon: "ME", group: "market" };
  if (text.includes("outage") || text.includes("crash") || text.includes("quality") || text.includes("reliability")) return { label: "Product Crisis", icon: "PC", group: "product" };
  if (text.includes("runway") || text.includes("cash") || text.includes("burn")) return { label: "Failure Risk", icon: "FR", group: "losses" };
  if (text.includes("competitor")) return { label: "Competitor Move", icon: "CM", group: "market" };
  if (entry.outcome === "bad" || entry.delta.cash < -1200 || entry.delta.reputation <= -6) return { label: "Failure Risk", icon: "FR", group: "losses" };
  if (entry.outcome === "good") return { label: "Small Win", icon: "SW", group: "wins" };
  return { label: "Founder Note", icon: "FN", group: "all" };
}

function matchesTimelineFilter(entry, filter) {
  if (filter === "all") return true;
  if (filter === "wins") return entry.outcome === "good" || entry.eventType.group === "wins";
  if (filter === "losses") return entry.outcome === "bad" || entry.eventType.group === "losses";
  if (filter === "market") return entry.eventType.group === "market";
  if (filter === "product") return entry.eventType.group === "product";
  return true;
}

function timelineImpactScore(delta) {
  return delta.users + delta.reputation * 5 + delta.growthRate * 4 + delta.revenue / 80 + delta.cash / 160;
}

function timelineOutcomeSummary(entry) {
  if (entry.outcome === "good") {
    return "Momentum improved after this call.";
  }
  if (entry.outcome === "bad") {
    return "This decision increased pressure on the company.";
  }
  return "A trade-off move with mixed consequences.";
}

function currentTrajectory() {
  const recent = state.history.slice(-3);
  const recentScore = recent.reduce((score, entry) => score + timelineImpactScore(entry.delta), 0);
  const runwayWeeks = calculateRunwayWeeks();

  if (runwayWeeks <= 4 || recentScore < -20 || state.reputation < 35) return "Risky";
  if (recentScore > 35 || state.growthRate >= 15) return "Rising";
  return "Stable";
}

function setCenterView(view) {
  activeCenterView = view;
  overviewView.classList.toggle("is-hidden", view !== "overview");
  timelineView.classList.toggle("is-hidden", view !== "timeline");
  teamView.classList.toggle("is-hidden", view !== "team");
  productView.classList.toggle("is-hidden", view !== "product");
  marketView.classList.toggle("is-hidden", view !== "market");
  dossierNavButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  if (view === "timeline") {
    renderTimelineView();
  }
  if (view === "team") {
    renderTeamView();
  }
  if (view === "product") {
    renderProductView();
  }
  if (view === "market") {
    renderMarketView();
  }
}

function setTimelineFilter(filter) {
  activeTimelineFilter = filter;
  timelineFilterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
  renderTimelineView();
}

function renderTeamView() {
  if (!state.team) return;

  const teamSize = getTeamSize();
  const teamCost = getTeamCost();
  state.team.efficiency = calculateTeamEfficiency();
  teamSizeStat.textContent = teamSize;
  teamCostStat.textContent = formatMoney(teamCost);
  teamMoraleStat.textContent = state.team.morale;
  teamEfficiencyStat.textContent = state.team.efficiency;
  teamMoraleBar.style.width = `${state.team.morale}%`;
  teamEfficiencyBar.style.width = `${state.team.efficiency}%`;
  teamMoraleBar.className = state.team.morale < 40 ? "bar-danger" : state.team.morale < 65 ? "bar-risk" : "bar-good";
  teamEfficiencyBar.className = state.team.efficiency < 45 ? "bar-danger" : state.team.efficiency < 70 ? "bar-risk" : "bar-good";
  teamStatusLine.textContent = teamSize <= 2
    ? "Lean team. Every hire changes runway."
    : state.team.morale < 45
      ? "Team pressure is high. Morale needs attention."
      : "Team operating rhythm is stable.";

  const strengths = getTeamStrengths();
  teamStrongText.textContent = strengths.strong.length ? strengths.strong.join(", ") : "Founder focus";
  teamWeakText.textContent = strengths.weak.length ? strengths.weak.join(", ") : "No glaring gap";
  teamActionMessage.textContent = state.team.message;

  teamRolesList.innerHTML = "";
  Object.entries(teamRoles).forEach(([role, config]) => {
    const count = state.team.roles[role];
    const row = document.createElement("article");
    row.className = "team-role-row";
    row.innerHTML = `
      <div class="role-icon">${config.icon}</div>
      <div class="role-copy">
        <strong>${config.label}</strong>
        <span>${config.impact}</span>
        <em>${formatMoney(config.cost)} / week</em>
      </div>
      <div class="role-count">${count}</div>
      <div class="role-actions">
        <button type="button" data-action="hire" data-role="${role}">Hire</button>
        <button type="button" data-action="fire" data-role="${role}">Fire</button>
      </div>
    `;
    teamRolesList.append(row);
  });
}

function getTeamStrengths() {
  const scores = {
    Product: state.team.roles.engineer * 3 + state.team.roles.designer,
    Design: state.team.roles.designer * 3,
    Growth: state.team.roles.marketer * 3,
    Revenue: state.team.roles.sales * 3,
    Ops: state.team.roles.operations * 3,
  };
  const ordered = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return {
    strong: ordered.filter(([, score]) => score >= 3).slice(0, 3).map(([label]) => label),
    weak: ordered.filter(([, score]) => score === 0).slice(0, 3).map(([label]) => label),
  };
}

function renderProductView() {
  if (!state.product) return;

  const health = productHealth();
  productStatusLine.textContent = health === "Excellent"
    ? "Product is compounding trust and growth."
    : health === "Healthy"
      ? "Product health is stable."
      : health === "Fragile"
        ? "Product is fragile. Bugs and debt can slow growth."
        : "Product is broken. Stabilize before scaling.";
  productHealthBadge.textContent = health;
  productHealthBadge.className = `health-${health.toLowerCase()}`;
  setProductMetric(productQualityStat, productQualityBar, state.productQuality, false);
  setProductMetric(productStabilityStat, productStabilityBar, state.product.stability, false);
  setProductMetric(productUxStat, productUxBar, state.product.ux, false);
  setProductMetric(productFeatureStat, productFeatureBar, state.product.featureDepth, false);
  setProductMetric(productDebtStat, productDebtBar, state.product.technicalDebt, true);
  productActionMessage.textContent = state.product.message;

  productUpgradeList.innerHTML = "";
  Object.entries(productUpgrades).forEach(([key, upgrade]) => {
    const card = document.createElement("article");
    card.className = "product-upgrade-card";
    card.innerHTML = `
      <div>
        <strong>${upgrade.label}</strong>
        <span>${upgrade.impact}</span>
        <em>${formatMoney(upgrade.cost)}</em>
      </div>
      <button type="button" data-upgrade="${key}">Ship</button>
    `;
    productUpgradeList.append(card);
  });

  renderRoadmapList(roadmapBacklog, state.product.roadmap.backlog);
  renderRoadmapList(roadmapProgress, state.product.roadmap.inProgress);
  renderRoadmapList(roadmapShipped, state.product.roadmap.shipped.slice(0, 6));
}

function renderMarketView() {
  if (!state.market) return;

  const fit = marketFitStatus();
  marketFitBadge.textContent = fit;
  marketFitBadge.className = `fit-${fit.toLowerCase().replaceAll(" ", "-")}`;
  marketStatusLine.textContent = fit === "Category Leader"
    ? "The market is starting to move around your category."
    : fit === "Strong Fit"
      ? "Clear market pull. Competitors will notice."
      : fit === "Emerging Fit"
        ? "The wedge is forming, but the story still needs pressure-testing."
        : "Weak market fit. Narrow the buyer, message, or price.";

  setMarketMetric(marketSizeStat, marketSizeBar, state.market.marketSize, false);
  setMarketMetric(marketDemandStat, marketDemandBar, state.market.demand, false);
  setMarketMetric(marketCompetitionStat, marketCompetitionBar, state.market.competition, true);
  setMarketMetric(marketDifferentiationStat, marketDifferentiationBar, state.market.differentiation, false);
  setMarketMetric(marketPricingPowerStat, marketPricingPowerBar, state.market.pricingPower, false);
  setMarketMetric(marketPressureStat, marketPressureBar, state.market.competitorPressure, true);

  renderMarketChoices(segmentOptions, "segment", marketSegments);
  renderMarketChoices(positioningOptions, "positioning", marketPositionings);
  renderMarketChoices(pricingOptions, "pricing", marketPricing);
  renderMarketActions();

  const segment = marketSegments[state.market.segment];
  const positioning = marketPositionings[state.market.positioning];
  const pricing = marketPricing[state.market.pricing];
  marketActionMessage.textContent = state.market.message;
  marketWedgeText.textContent = `${segment.label} · ${positioning.label} · ${pricing.label}`;
  marketRiskText.textContent = marketRiskTextFor();
  marketReportText.textContent = state.market.lastAction || "Your market read will update as you make choices.";
}

function renderMarketChoices(container, kind, options) {
  container.innerHTML = "";
  Object.entries(options).forEach(([key, option]) => {
    const button = document.createElement("button");
    button.className = `market-choice ${state.market[kind] === key ? "active" : ""}`;
    button.type = "button";
    button.dataset.marketKind = kind;
    button.dataset.marketKey = key;
    button.innerHTML = `<i>${option.icon}</i><strong>${option.label}</strong><span>${option.note}</span>`;
    container.append(button);
  });
}

function renderMarketActions() {
  marketActionList.innerHTML = "";
  Object.entries(marketActions).forEach(([key, action]) => {
    const card = document.createElement("article");
    card.className = "market-action-card";
    card.innerHTML = `
      <div>
        <strong>${action.label}</strong>
        <span>${action.impact}</span>
        <em>${formatMoney(action.cost)}</em>
      </div>
      <button type="button" data-market-action="${key}">Run</button>
    `;
    marketActionList.append(card);
  });
}

function setMarketMetric(statElement, barElement, value, inverse) {
  statElement.textContent = value;
  barElement.style.width = `${value}%`;
  const danger = inverse ? value > 72 : value < 38;
  const risk = inverse ? value > 55 : value < 58;
  barElement.className = danger ? "bar-danger" : risk ? "bar-risk" : "bar-good";
}

function marketRiskTextFor() {
  if (state.market.competitorPressure >= 78) return "High pressure: competitors are likely to copy, discount, or reframe the category.";
  if (state.market.competition >= 70 && state.market.differentiation < 55) return "Crowded lane: buyers may compare you directly against alternatives.";
  if (state.market.pricingPower < 35) return "Pricing risk: growth may rise while revenue quality stays weak.";
  if (state.market.demand < 42) return "Demand risk: this market needs more validation before scaling spend.";
  return "Competitor pressure is manageable.";
}

function setProductMetric(statElement, barElement, value, inverse) {
  statElement.textContent = value;
  barElement.style.width = `${value}%`;
  const danger = inverse ? value > 70 : value < 40;
  const risk = inverse ? value > 45 : value < 65;
  barElement.className = danger ? "bar-danger" : risk ? "bar-risk" : "bar-good";
}

function renderRoadmapList(element, items) {
  element.innerHTML = "";
  if (items.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "Empty";
    element.append(empty);
    return;
  }
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.append(li);
  });
}

function formatDelta(delta) {
  return [
    formatChange(delta.users, "users"),
    formatChange(delta.revenue, "revenue"),
    formatChange(delta.cash, "cash"),
    formatChange(delta.burnRate, "burn"),
    formatChange(delta.reputation, "rep"),
    formatChange(delta.productQuality, "quality"),
    formatChange(delta.growthRate, "growth"),
  ].join(" · ");
}

function formatPlainDelta(delta) {
  return [
    formatPlainChange(delta.users, "users"),
    formatPlainChange(delta.revenue, "revenue"),
    formatPlainChange(delta.cash, "cash"),
    formatPlainChange(delta.reputation, "rep"),
    formatPlainChange(delta.growthRate, "growth"),
  ].join(" · ");
}

function summarizeEffects(effects) {
  return [
    formatPlainChange(effects.users, "users"),
    formatPlainChange(effects.reputation, "rep"),
    formatPlainChange(effects.growthRate, "growth"),
  ].join(", ");
}

function captureStats() {
  return {
    users: state.users,
    revenue: state.revenue,
    cash: state.cash,
    burnRate: state.burnRate,
    reputation: state.reputation,
    productQuality: state.productQuality,
    growthRate: state.growthRate,
  };
}

function diffStats(before, after) {
  return Object.keys(before).reduce((delta, key) => {
    delta[key] = after[key] - before[key];
    return delta;
  }, {});
}

function normalizeEffects(effects = {}) {
  return {
    users: effects.users || 0,
    revenue: effects.revenue || 0,
    cash: effects.cash || 0,
    burnRate: effects.burnRate || 0,
    reputation: effects.reputation || 0,
    productQuality: effects.productQuality || 0,
    growthRate: effects.growthRate || 0,
  };
}

function combineEffects(...effectSets) {
  return effectSets.reduce((combined, effects) => {
    Object.keys(combined).forEach((key) => {
      combined[key] += effects[key] || 0;
    });
    return combined;
  }, normalizeEffects());
}

function combineInto(target, effects) {
  Object.keys(target).forEach((key) => {
    target[key] += effects[key] || 0;
  });
}

function formatChange(value, label) {
  const prefix = value >= 0 ? "+" : "";
  const tone = value > 0 ? "delta-positive" : value < 0 ? "delta-negative" : "delta-neutral";
  const wrapped = (text) => `<b class="${tone}">${text}</b>`;
  if (["revenue", "cash", "burn"].includes(label)) {
    return wrapped(`${prefix}${formatMoney(value)} ${label}`);
  }
  if (label === "growth") {
    return wrapped(`${prefix}${value}% ${label}`);
  }
  return wrapped(`${prefix}${value} ${label}`);
}

function formatPlainChange(value, label) {
  const prefix = value >= 0 ? "+" : "";
  if (["revenue", "cash", "burn"].includes(label)) {
    return `${prefix}${formatMoney(value)} ${label}`;
  }
  if (label === "growth") {
    return `${prefix}${value}% ${label}`;
  }
  return `${prefix}${value} ${label}`;
}

function updateProgressBars() {
  const runwayWeeks = calculateRunwayWeeks();
  const runwayPercent = clamp((runwayWeeks / 24) * 100, 0, 100);
  runwayLabel.textContent = runwayWeeks <= 4 ? `${runwayWeeks} weeks left` : `${runwayWeeks} weeks`;
  reputationLabel.textContent = state.reputation;
  qualityLabel.textContent = state.productQuality;
  runwayBar.style.width = `${runwayPercent}%`;
  reputationBar.style.width = `${state.reputation}%`;
  qualityBar.style.width = `${state.productQuality}%`;
  runwayBar.className = runwayWeeks <= 4 ? "bar-danger" : runwayWeeks <= 8 ? "bar-risk" : "bar-good";
  runwayWarningText.textContent = runwayWeeks <= 4
    ? "Danger: runway is getting scary."
    : runwayWeeks <= 8
      ? "Warning: sustainability pressure rising."
      : "Cash position stable.";
  reputationBar.className = state.reputation < 35 ? "bar-danger" : state.reputation < 60 ? "bar-risk" : "bar-good";
  qualityBar.className = state.productQuality < 40 ? "bar-danger" : state.productQuality < 65 ? "bar-risk" : "bar-good";
}

function calculateRunwayWeeks() {
  if (state.burnRate <= 0) {
    return 99;
  }

  return Math.max(0, Math.floor(state.cash / state.burnRate));
}

function runwayClass(runwayWeeks) {
  if (runwayWeeks <= 4) {
    return "runway-danger";
  }
  if (runwayWeeks <= 8) {
    return "runway-warning";
  }
  return "runway-safe";
}

function pulseChangedStats(delta) {
  if (!delta) {
    return;
  }

  const statMap = [
    [usersStat, delta.users, true],
    [revenueStat, delta.revenue, true],
    [cashStat, delta.cash, true],
    [burnStat, delta.burnRate, false],
    [runwayStat, delta.cash - delta.burnRate, true],
    [growthStat, delta.growthRate, true],
    [reputationStat, delta.reputation, true],
  ];

  statMap.forEach(([element, value, positiveIsGood]) => {
    element.classList.remove("flash-positive", "flash-negative", "flash-risk");
    if (value === 0) {
      return;
    }
    const isPositive = positiveIsGood ? value > 0 : value < 0;
    const className = Math.abs(value) <= 2 ? "flash-risk" : isPositive ? "flash-positive" : "flash-negative";
    window.requestAnimationFrame(() => {
      element.classList.add(className);
    });
  });
}

function showResultToast(delta, outcome) {
  const highlights = [
    ["users", delta.users],
    ["revenue", delta.revenue],
    ["cash", delta.cash],
    ["rep", delta.reputation],
    ["growth", delta.growthRate],
  ]
    .filter(([, value]) => value !== 0)
    .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
    .slice(0, 4);

  resultToast.className = `result-toast result-${outcome}`;
  resultToast.innerHTML = highlights.map(([label, value]) => `<span>${formatChange(value, label)}</span>`).join("");

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    resultToast.classList.add("is-hidden");
  }, 1700);
}

function classifyDecision(effects = {}) {
  const normalized = normalizeEffects(effects);
  const positives = Number(normalized.users > 0) + Number(normalized.revenue > 0) + Number(normalized.cash > 0) + Number(normalized.reputation > 0) + Number(normalized.productQuality > 0) + Number(normalized.growthRate > 0);
  const negatives = Number(normalized.cash < 0) + Number(normalized.burnRate > 0) + Number(normalized.reputation < 0) + Number(normalized.productQuality < 0) + Number(normalized.growthRate < 0) + Number(normalized.users < 0);
  if (positives > 0 && negatives > 0) {
    return "choice-risk";
  }
  if (positives >= negatives) {
    return "choice-positive";
  }
  return "choice-negative";
}

function decisionPreview(effects = {}) {
  const normalized = normalizeEffects(effects);
  const preview = [];
  if (normalized.users) preview.push(formatShortChange(normalized.users, "users"));
  if (normalized.cash) preview.push(formatShortChange(normalized.cash, "cash"));
  if (normalized.reputation) preview.push(formatShortChange(normalized.reputation, "rep"));
  if (normalized.productQuality) preview.push(formatShortChange(normalized.productQuality, "quality"));
  if (normalized.growthRate) preview.push(formatShortChange(normalized.growthRate, "growth"));
  return preview.slice(0, 3).join(" · ");
}

function formatShortChange(value, label) {
  const prefix = value > 0 ? "+" : "";
  if (label === "cash") {
    return `${prefix}${formatMoney(value)}`;
  }
  if (label === "growth") {
    return `${prefix}${value}% ${label}`;
  }
  return `${prefix}${value} ${label}`;
}

function formatMoney(value) {
  const absValue = Math.abs(value);
  const prefix = value < 0 ? "-" : "";

  if (absValue >= 1000000) {
    return `${prefix}$${(absValue / 1000000).toFixed(1)}M`;
  }
  if (absValue >= 1000) {
    return `${prefix}$${(absValue / 1000).toFixed(1)}K`;
  }
  return `${prefix}$${absValue.toLocaleString()}`;
}

function createSeededRandom(seedText) {
  let seed = 2166136261;
  for (let index = 0; index < seedText.length; index += 1) {
    seed ^= seedText.charCodeAt(index);
    seed = Math.imul(seed, 16777619);
  }

  return function random() {
    seed += 0x6d2b79f5;
    let value = seed;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function randomBetween(min, max) {
  return Math.floor(rng() * (max - min + 1)) + min;
}

function randomIndex(length) {
  return Math.floor(rng() * length);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

function playSound(type) {
  if (audioMuted) {
    return;
  }

  const context = getAudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const now = context.currentTime;
  const settings = {
    click: { start: 330, end: 430, duration: 0.055, volume: 0.025, wave: "triangle" },
    positive: { start: 520, end: 760, duration: 0.16, volume: 0.04, wave: "sine" },
    negative: { start: 180, end: 95, duration: 0.22, volume: 0.045, wave: "sawtooth" },
  }[type];

  oscillator.type = settings.wave;
  oscillator.frequency.setValueAtTime(settings.start, now);
  oscillator.frequency.exponentialRampToValueAtTime(settings.end, now + settings.duration);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(settings.volume, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + settings.duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + settings.duration + 0.02);
}

function toggleAudio() {
  audioMuted = !audioMuted;
  muteButton.textContent = audioMuted ? "Muted" : "Sound on";
  muteButton.setAttribute("aria-pressed", String(audioMuted));
  if (!audioMuted) {
    playSound("click");
  }
}

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;
  themeButton.textContent = theme === "dark" ? "Light" : "Dark";
  themeButton.setAttribute("aria-pressed", String(theme === "light"));
}

function toggleTheme() {
  setTheme(currentTheme === "dark" ? "light" : "dark");
}

function restartCurrentRun() {
  const formData = new FormData();
  formData.set("idea", startup.idea || "New startup");
  formData.set("audience", startup.audience || "early adopters");
  formData.set("niche", startup.niche || "productivity");
  formData.set("startupType", startup.startupType || "saas");
  formData.set("style", startup.style || "balanced");
  formData.set("goal", startup.goal || "profit");
  startGame(formData);
}

function resetToLanding() {
  simulationPage.classList.add("is-hidden");
  endingPage.classList.add("is-hidden");
  landingPage.classList.remove("is-hidden");
  startupForm.reset();
  document.querySelector("#ideaInput").focus();
}

startupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  startGame(new FormData(startupForm));
});

dossierNavButtons.forEach((button) => {
  button.addEventListener("click", () => setCenterView(button.dataset.view));
});

timelineFilterButtons.forEach((button) => {
  button.addEventListener("click", () => setTimelineFilter(button.dataset.filter));
});

teamRolesList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  if (button.dataset.action === "hire") {
    hireRole(button.dataset.role);
  } else {
    fireRole(button.dataset.role);
  }
});

productUpgradeList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-upgrade]");
  if (!button) return;
  applyProductUpgrade(button.dataset.upgrade);
});

marketView.addEventListener("click", (event) => {
  const choiceButton = event.target.closest("button[data-market-kind]");
  if (choiceButton) {
    applyMarketChoice(choiceButton.dataset.marketKind, choiceButton.dataset.marketKey);
    return;
  }

  const actionButton = event.target.closest("button[data-market-action]");
  if (actionButton) {
    applyMarketAction(actionButton.dataset.marketAction);
  }
});

restartButton.addEventListener("click", resetToLanding);
playAgainButton.addEventListener("click", restartCurrentRun);
tryStrategyButton.addEventListener("click", resetToLanding);
themeButton.addEventListener("click", toggleTheme);
muteButton.addEventListener("click", toggleAudio);

setTheme("dark");
