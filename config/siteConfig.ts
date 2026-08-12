// =============================================================================
//  SITE CONFIGURATION — The ONLY file a buyer needs to edit to make this site
//  their own.  Every visible string, image path, link, and metadata value on
//  the entire site is sourced from this file.  Change values here, save, and
//  the whole site updates — no hunting through components.
//
//  HOW TO CUSTOMIZE:
//    1. Read through the sections below (SEO, Hero, Navigation, Menu, Story,
//       Location, Footer, Social).
//    2. Replace each placeholder value with your own text, images, and links.
//    3. Swap the images in /public/ with your own, keeping the same filenames
//       OR update the paths below to match your filenames.
//    4. For the theme (colors, fonts, spacing), edit app/theme.tsx.
//    5. Save, run `npm run dev`, and verify everything looks right.
// =============================================================================

// ---- SEO & Metadata ---------------------------------------------------------
//  These values populate the browser tab title, search-engine snippets, and
//  Open Graph preview cards when someone shares your site link.
export const seo = {
  /** Browser tab title + OG title (used as default throughout the site) */
  title: "Brew Haven",
  /**
   * Meta description shown in search results and social previews.
   * Keep it under 160 characters so it doesn't get truncated.
   */
  description:
    "Artisan coffee, fresh pastries, and warm hospitality in the heart of the city. Visit Brew Haven for your perfect cup.",
  /** Full URL where the site is deployed (no trailing slash).  Update this
   *  BEFORE deploying so OG images resolve correctly. */
  siteUrl: "https://your-site.vercel.app",
  /** Path to the Open Graph preview image (1200×630 px recommended).
   *  Replace /og-image.jpg in the public/ folder with your own. */
  ogImage: "/og-image.png",
};

// ---- Navigation Links -------------------------------------------------------
//  Links shown in the top nav bar (desktop) and hamburger menu (mobile).
//  Each must have a `label` (display text) and an `href` (anchor or URL).
export const navigation = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
] as const;

// ---- Hero Section -----------------------------------------------------------
export const hero = {
  /** Large background image behind the hero text.  Place your image at
   *  public/cafebg.jpg or update this path. */
  backgroundImage: "/cafebg.jpg",
  /** Alt text for the background image — helps with accessibility & SEO */
  backgroundAlt: "Interior of Brew Haven coffee shop with warm lighting",
  /** Brand name shown in the nav bar and hero */
  brandName: "Brew Haven",
  /** Main hero headline — the first thing visitors see */
  headline: "Welcome To Brew Haven",
  /** Subtitle below the headline */
  subtitle:
    "Experience the perfect blend of artisan coffee, fresh pastries, and warm hospitality",
  /** CTA button text (scrolls to the Location section) */
  ctaText: "Visit Us",
  /** Where the CTA button links to */
  ctaHref: "#location",
};

// ---- Featured Menu Section --------------------------------------------------
export const featuredMenu = {
  /** Section heading */
  title: "Featured Menu",
  /** Section sub-heading / description */
  subtitle:
    "Discover our handpicked selection of artisan coffee and fresh baked goods",
  /** Menu items that appear as cards.  Add, remove, or reorder as needed. */
  items: [
    {
      name: "Latte",
      price: 5.0,
      description:
        "Discover our handpicked selection of artisan coffee and fresh baked goods",
      /** Image path relative to the public/ folder */
      image: "/latte.jpg",
      /** Alt text for the image */
      alt: "Freshly prepared latte with latte art",
    },
    {
      name: "Croissant",
      price: 4.7,
      description:
        "Buttery, flaky croissant baked fresh daily in our kitchen",
      image: "/croissant.jpg",
      alt: "Golden-brown flaky croissant",
    },
    {
      name: "Chocolate Cookie",
      price: 6.5,
      description:
        "Rich, chewy chocolate cookie loaded with chunks of premium dark chocolate",
      image: "/cookie.jpg",
      alt: "Chocolate chip cookie with melted dark chocolate chunks",
    },
  ],
};

// ---- Our Story Section ------------------------------------------------------
export const story = {
  /** Section heading */
  title: "Our Story",
  /** Founding story / intro paragraph */
  description:
    "Founded in 2018, Brew Haven has been serving the community with exceptional coffee and creating memorable moments. We believe in quality, sustainability, and the power of a good cup of coffee to bring people together.",
  /** The three value cards that animate in as the user scrolls */
  values: [
    {
      title: "Made with Love",
      description:
        "Every cup is crafted with passion and precision by our expert baristas.",
    },
    {
      title: "Sustainable Sourcing",
      description:
        "We work directly with farmers to bring you ethically sourced, organic coffee beans.",
    },
    {
      title: "Community First",
      description:
        "More than a cafe, we're a gathering place for neighbors, friends, and coffee lovers.",
    },
  ],
};

// ---- Location / Contact Section ---------------------------------------------
export const location = {
  /** Section heading */
  title: "Visit Us",
  /** Section subtitle */
  subtitle: "We'd love to see you at Brew Haven",
  /** Physical address — each string is one line */
  address: ["123 Coffee Street", "Downtown District", "City, State 12345"],
  /** Contact phone number */
  phone: "+639123456789",
  /** Contact email address */
  email: "brewhaven@gmail.com",
  /** Opening hours — days + time pairs */
  hours: [
    { days: "Monday - Friday", time: "7:00 AM - 8:00 PM" },
    { days: "Saturday", time: "8:00 AM - 9:00 PM" },
    { days: "Sunday", time: "8:00 AM - 9:00 PM" },
  ],
};

// ---- Footer -----------------------------------------------------------------
export const footer = {
  /** Brand name repeated in the footer */
  brandName: "Brew Haven",
  /** Short description / mission statement */
  description:
    "Your neighborhood coffee shop serving exceptional coffee and creating memorable moments since 2018.",
  /** Copyright line — use {{year}} as a placeholder for the current year */
  copyright: "© {{year}} Brew Haven. All rights reserved.",
  /** Section heading for the link column */
  quickLinksTitle: "Quick Links",
  /** Quick-links in the footer (usually mirrors main nav) */
  quickLinks: [
    { label: "Hero", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ],
  /** Section heading for the social column */
  followUsTitle: "Follow Us",
};

// ---- Social Media Links -----------------------------------------------------
//  Icons only (no URLs) are rendered in the footer.  Remove or comment out
//  any you don't need.  The site includes icons for: facebook, instagram, x.
export const socialLinks = {
  facebook: "https://facebook.com/",
  instagram: "https://instagram.com/",
  x: "https://x.com/",
};
