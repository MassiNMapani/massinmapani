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

  /* ================= PRODUCTS ================= */

  products: [
    {
      slug: "travel-plan-through-the-beauty-of-namibia",
      name: "Travel Plan: Through the Beauty of Namibia",
      status: "Available",
      price: "$49",
      coverImage: "/images/placeholder-product.svg",
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
