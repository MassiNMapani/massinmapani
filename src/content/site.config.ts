export type SocialPlatform =
  | "Instagram"
  | "TikTok"
  | "LinkedIn"
  | "Facebook"
  | "YouTube"
  | "Twitch"
  | "X";

export const siteConfig = {
  name: "Massi Mapani",
  title: "Massi Mapani",
  domain: "https://massinmapani.com",
  description:
    "Software Engineer & Technology Consultant building resilient, compliant systems and products across Africa and beyond.",
  businessEmail: "business@massinmapani.com",

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Speaking", href: "/speaking" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Products", href: "/products" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" }
  ],

  /* ================= SOCIAL LINKS ================= */

  socialLinks: [
    {
      platform: "Instagram" as SocialPlatform,
      url: "https://www.instagram.com/massi_n_m/",
      handle: "@massi_n_m"
    },
    {
      platform: "TikTok" as SocialPlatform,
      url: "https://www.tiktok.com/@zedscareerfirst",
      handle: "@zedscareerfirst"
    },
    {
      platform: "LinkedIn" as SocialPlatform,
      url: "https://www.linkedin.com/in/massi-mapani/",
      handle: "Massi Mapani"
    },
    {
      platform: "Facebook" as SocialPlatform,
      url: "https://web.facebook.com/massi.mwah/",
      handle: "Massi Mwah"
    },
    {
      platform: "YouTube" as SocialPlatform,
      url: "https://www.youtube.com/@massimapani8951",
      handle: "@massimapani8951"
    },
    {
      platform: "Twitch" as SocialPlatform,
      url: "https://www.twitch.tv/massinmapani",
      handle: "massinmapani"
    },
    {
      platform: "X" as SocialPlatform,
      url: "https://x.com/mas_mapani",
      handle: "@mas_mapani"
    }
  ],

  /* ================= SOCIAL STATS ================= */

  socialStats: [
    { platform: "Instagram" as SocialPlatform, label: "Instagram", value: "841" },
    { platform: "TikTok" as SocialPlatform, label: "TikTok", value: "51" },
    { platform: "LinkedIn" as SocialPlatform, label: "LinkedIn", value: "845" },
    { platform: "Facebook" as SocialPlatform, label: "Facebook", value: "904" },
    { platform: "YouTube" as SocialPlatform, label: "YouTube", value: "8 subscribers" },
    { platform: "Twitch" as SocialPlatform, label: "Twitch", value: "0" },
    { platform: "X" as SocialPlatform, label: "X", value: "116" }
  ],

  /* ================= HERO ================= */

  hero: {
    kicker: "Systems leadership with measurable outcomes",
    title: "Massi Mapani",
    subtitle:
      "I design and deliver resilient digital systems that help institutions scale performance, governance, and trust.",
    mission:
      "From Zambia to the UK and South Africa, my work blends engineering rigor, responsible automation, and leadership that builds long-term capacity.",
    quote:
      "Great systems are not loud. They are dependable, accountable, and built to last."
  },

  homeTiles: [
    {
      label: "ABOUT",
      href: "/about",
      title: "Leadership rooted in engineering discipline",
      image: "/images/placeholder-portrait-1.svg",
      className: "col-span-12 md:col-span-7 row-span-2"
    },
    {
      label: "PROJECTS",
      href: "/work",
      title: "Scalable architecture with compliance built in",
      image: "/images/placeholder-architecture.svg",
      className: "col-span-12 md:col-span-5 row-span-1"
    },
    {
      label: "SPEAKING",
      href: "/speaking",
      title: "Panels, talks, and practical technology guidance",
      image: "/images/placeholder-speaking.svg",
      className: "col-span-12 md:col-span-5 row-span-1"
    },
    {
      label: "PARTNERSHIPS",
      href: "/partnerships",
      title: "Advisory and strategic collaborations",
      image: "/images/placeholder-partnerships.svg",
      className: "col-span-12 md:col-span-4 row-span-1"
    },
    {
      label: "PRODUCTS",
      href: "/products",
      title: "Digital products for intentional travel",
      image: "/images/placeholder-product.svg",
      className: "col-span-12 md:col-span-4 row-span-1"
    },
    {
      label: "COMMUNITY",
      href: "/community",
      title: "Mentorship, pathways, and community impact",
      image: "/images/placeholder-community.svg",
      className: "col-span-12 md:col-span-4 row-span-1"
    },
    {
      label: "CONTACT",
      href: "/contact",
      title: "Open for leadership, consulting, and speaking",
      image: "/images/placeholder-contact.svg",
      className: "col-span-12 md:col-span-12 row-span-1"
    }
  ],

  /* ================= ABOUT ================= */

  about: {
    intro:
      "Massi Mapani is a Software Engineer and technology consultant with international experience delivering scalable, compliant digital systems across telecommunications, finance, energy, and enterprise environments in Zambia, the United Kingdom, and South Africa.",
    body: [
      "Her work centers on systems that improve institutional performance, increase reliability, and support long-term growth. She helps organizations move from fragmented manual operations to structured digital services with clearer governance and stronger decision intelligence.",
      "She combines cloud engineering, full-stack delivery, automation, and reliability thinking with stakeholder-led execution. The priority is durable adoption, not short-term feature volume.",
      "Massi champions responsible automation and AI-adjacent tooling that improves service delivery in emerging markets while keeping accountability, context, and human oversight in view.",
      "She also mentors and builds pathways for women in technical and leadership roles, expanding access to high-impact careers in technology."
    ],
    principles: ["Resilient", "Inclusive", "Measurable impact", "Long-term adoption"],
    toolbox: [
      "Cloud Architecture",
      "Full-stack Engineering",
      "Reliability",
      "Compliance by Design",
      "Workflow Automation",
      "AI-adjacent Tooling",
      "Technical Strategy",
      "Governance"
    ]
  },

  /* ================= WORK ================= */

  work: {
    intro:
      "Case studies focused on execution quality, operational resilience, and measurable impact across regulated and growth-stage environments.",
    projects: [
      {
        slug: "telecom-reliability-program",
        title: "Telecom Reliability Program",
        summary:
          "Reduced incident recovery time while modernizing core service workflows.",
        tags: ["Cloud", "Reliability", "Compliance"],
        problem:
          "Critical services were constrained by fragmented operational tooling and unclear escalation pathways.",
        approach:
          "Introduced observability standards, service ownership boundaries, and automated runbooks tied to incident classes.",
        impact:
          "Improved fault resolution speed and reduced repeat incidents while aligning controls to audit requirements.",
        stack: ["TypeScript", "Node.js", "AWS", "Terraform", "Grafana"],
        metrics: [
          "MTTR down 38%",
          "SLA adherence up 17%",
          "Escalation clarity across 4 teams"
        ]
      },
      {
        slug: "finance-control-layer",
        title: "Finance Control Layer Modernization",
        summary:
          "Implemented compliant workflow orchestration for high-volume approvals.",
        tags: ["Automation", "Compliance", "Full-stack"],
        problem:
          "Manual controls and disconnected systems slowed approval cycles and limited traceability.",
        approach:
          "Built policy-aware workflow services with event logging and role-based approvals.",
        impact:
          "Increased throughput and audit-readiness while reducing manual bottlenecks.",
        stack: ["Next.js", "PostgreSQL", "Redis", "Docker"],
        metrics: [
          "Cycle time down 42%",
          "Audit response prep down 55%",
          "Error rate down 29%"
        ]
      },
      {
        slug: "energy-platform-rollout",
        title: "Energy Operations Platform Rollout",
        summary:
          "Scaled operational reporting across regional teams with governance controls.",
        tags: ["Cloud", "Automation", "Reliability"],
        problem:
          "Reporting inconsistencies and delayed field updates impacted planning and service quality.",
        approach:
          "Designed unified data ingestion, quality checks, and operator dashboards with clear accountability.",
        impact:
          "Improved reporting confidence and supported faster, evidence-based decisions.",
        stack: ["React", "Node.js", "Azure", "Power BI"],
        metrics: [
          "Reporting latency down 46%",
          "Data quality score up 31%",
          "Adoption in 3 regions"
        ]
      }
    ]
  },

  /* ================= SPEAKING ================= */

  speaking: {
    intro:
      "Conversations on building institutions through better technology decisions.",
    engagements: [
      {
        title: "Designing Reliable Digital Services",
        type: "Panel",
        org: "Tech Leadership Forum",
        year: "2025"
      },
      {
        title: "Compliance as a Product Feature",
        type: "Talk",
        org: "Engineering Governance Summit",
        year: "2024"
      },
      {
        title: "Mentorship Pathways for Women in Engineering",
        type: "Podcast",
        org: "Women Build Systems",
        year: "2024"
      }
    ],
    cta: "Invite Massi to speak"
  },

  /* ================= PARTNERSHIPS ================= */

  partnerships: {
    intro:
      "Strategic collaborations for organizations building high-trust digital products and services.",
    logos: ["Atlas Telecom", "Northbridge Finance", "Aster Energy", "Civic Enterprise"],
    cards: [
      {
        title: "Brand Collaborations",
        description:
          "Selective collaborations with mission-aligned brands in technology, education, and leadership development."
      },
      {
        title: "Executive Advisory",
        description:
          "Guidance on platform strategy, operating models, and delivery systems for regulated or complex environments."
      },
      {
        title: "Capability Programs",
        description:
          "Mentorship and workforce pathway initiatives to strengthen technical leadership pipelines."
      }
    ]
  },

  /* ================= PRODUCTS ================= */

  products: [
    {
      slug: "travel-plan-through-the-beauty-of-namibia",
      name: "Travel Plan: Through the Beauty of Namibia",
      status: "Available",
      price: "$49",
      coverImage: "/images/placeholder-product.svg",
      gumroadUrl:
        "https://www.lemonzm.com/creators/kp_965267704da44a67afc56bd54fa614b5",
      paypalUrl: "https://www.paypal.com/ncp/payment/UX83SWELWFY9E",
      description:
        "A refined travel planning guide for first-time and returning travelers exploring Namibia with structure and confidence.",
      whatYouGet: [
        "Route planning templates",
        "Budget and logistics checklist",
        "Cultural etiquette notes",
        "Safety and timing guidance"
      ],
      whoItsFor:
        "Travelers who value clear itineraries, practical advice, and premium planning support.",
      format: "Digital PDF + checklist bundle"
    },
    {
      slug: "namibia-travel-contact-list-first-time-traveler-warnings",
      name: "Namibia Travel Contact List + First-Time Traveler Warnings",
      status: "Coming Soon",
      price: "$79",
      coverImage: "/images/placeholder-product-2.svg",
      gumroadUrl:
        "https://www.lemonzm.com/creators/kp_965267704da44a67afc56bd54fa614b5",
      paypalUrl: "", // Add PayPal link when ready
      description:
        "A paid directory of vetted contacts and practical warnings for smoother travel operations.",
      whatYouGet: [
        "Curated contact list",
        "Regional warning notes",
        "Transport and communication tips",
        "Arrival-readiness checklist"
      ],
      whoItsFor:
        "First-time visitors, independent professionals, and small groups planning with limited local network access.",
      format: "Digital directory + field notes"
    }
  ],

  productIpNote:
    "All digital products are issued under a personal-use license. Redistribution, resale, or public sharing is prohibited.",

  /* ================= COMMUNITY ================= */

  community: {
    intro:
      "Community impact through mentorship, practical education, and platform-building for women in technical leadership.",
    mentorship:
      "Massi mentors emerging engineers and future technology leaders through structured guidance on career strategy, technical depth, and leadership confidence.",
    highlights: [
      "Built mentorship pathways for women transitioning into software and cloud roles",
      "Supported community workshops on practical automation and system reliability",
      "Advised teams on responsible AI-adjacent adoption grounded in governance"
    ]
  },

  /* ================= CONTACT ================= */

  contact: {
    heading: "Let’s build something that lasts.",
    description:
      "For consulting, advisory, speaking, and partnerships, share your context and goals. You will receive a response via email.",
    newsletterHeading: "Join the newsletter",
    newsletterDescription:
      "Periodic insights on systems strategy, reliability, and career pathways."
  }
} as const;

export type SiteConfig = typeof siteConfig;
