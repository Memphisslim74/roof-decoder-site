export type CityPage = {
  slug: string;
  city: string;
  county: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  localNote: string;
  concerns: { title: string; text: string }[];
  neighborhoods: string[];
  faq: { question: string; answer: string }[];
};

export const cities: CityPage[] = [
  {
    slug: "berthoud",
    city: "Berthoud",
    county: "Larimer and Weld counties",
    eyebrow: "Berthoud roof quote help",
    title: "Understand Your Berthoud Roofing Quote Before You Sign",
    description:
      "Compare roofing estimates, understand hail-related line items, and get a local second opinion for your Berthoud, Colorado roof.",
    intro:
      "A roofing estimate can look complete while still leaving out ventilation, flashing, code upgrades, disposal, or the exact shingle system being installed. Roof Quote Decoder helps Berthoud homeowners slow the process down, compare the real scope, and ask better questions before choosing a contractor.",
    localNote:
      "Berthoud sits in an active Front Range hail corridor and spans two counties, so the right roof plan has to account for the home, the jurisdiction, and the actual damage—not just a price per square.",
    concerns: [
      {
        title: "Hail and wind exposure",
        text: "Look for a documented inspection of shingles, soft metals, flashing, vents, gutters, and collateral damage rather than a roof-only glance.",
      },
      {
        title: "Class 4 options",
        text: "Confirm the exact manufacturer, product line, impact rating, color, accessories, and warranty level included in the proposal.",
      },
      {
        title: "Ventilation and code",
        text: "A complete replacement scope should address intake, exhaust, decking conditions, underlayment, ice barrier, and local permit requirements.",
      },
    ],
    neighborhoods: ["Downtown Berthoud", "Hammond Farm", "Heron Lakes", "Prairiestar", "Vantage", "Berthoud Lake area"],
    faq: [
      {
        question: "Can someone review a roof quote for a Berthoud home?",
        answer:
          "Yes. A useful review compares scope, materials, quantities, exclusions, warranties, ventilation, and payment terms—not only the bottom-line price.",
      },
      {
        question: "Do Berthoud roofs need Class 4 shingles?",
        answer:
          "Requirements vary by project and jurisdiction, but impact-resistant shingles are worth discussing because of Northern Colorado hail exposure. Ask your roofer and insurer about product eligibility, code requirements, and any available policy discount.",
      },
      {
        question: "Should I get a roof inspection after hail if I do not see a leak?",
        answer:
          "Visible leaks are not the only sign of damage. A qualified local inspection can document shingle, vent, flashing, gutter, and soft-metal conditions before small problems become larger ones.",
      },
    ],
  },
  {
    slug: "loveland",
    city: "Loveland",
    county: "Larimer County",
    eyebrow: "Loveland roofing estimate review",
    title: "A Clearer Way to Compare Roofing Quotes in Loveland",
    description:
      "A local Loveland roof quote resource covering replacement estimates, hail damage, insurance scopes, Class 4 shingles, and contractor questions.",
    intro:
      "Two Loveland roofing quotes can be thousands of dollars apart and still appear to promise the same roof. The difference is often hidden in quantities, accessories, labor standards, warranty coverage, and exclusions. We help homeowners translate the proposal into plain English before making a major decision.",
    localNote:
      "Loveland homes range from established neighborhoods with older decking and ventilation to newer developments with different code and HOA considerations. A trustworthy estimate should reflect the actual house—not a one-size-fits-all package.",
    concerns: [
      {
        title: "Scope versus price",
        text: "Compare tear-off layers, decking allowance, flashing, ventilation, underlayment, edge metal, permits, cleanup, and workmanship coverage line by line.",
      },
      {
        title: "Insurance estimate gaps",
        text: "Carrier estimates and contractor scopes often use different language. Missing or disputed items should be documented and discussed, not quietly passed to the homeowner.",
      },
      {
        title: "Product-system details",
        text: "A shingle name alone is not a complete roof system. Confirm compatible starter, ridge, underlayment, ventilation, nails, flashing, and installation requirements.",
      },
    ],
    neighborhoods: ["Centerra", "Mariana Butte", "North Loveland", "Namaqua Hills", "Lakes at Centerra", "Downtown Loveland"],
    faq: [
      {
        question: "How many roofing quotes should I get in Loveland?",
        answer:
          "There is no required number, but two or three detailed scopes usually make omissions and assumptions easier to spot. Compare the same materials and work before comparing price.",
      },
      {
        question: "What should a Loveland roof replacement estimate include?",
        answer:
          "At minimum, look for defined materials, quantities, removal, disposal, decking terms, ventilation, flashing, permits, warranty language, payment schedule, exclusions, and change-order terms.",
      },
      {
        question: "Can a roofer help explain my insurance estimate?",
        answer:
          "A contractor can explain construction scope and document observed damage. Coverage decisions belong to your insurer, and policy questions should be confirmed with your licensed insurance professional.",
      },
    ],
  },
  {
    slug: "fort-collins",
    city: "Fort Collins",
    county: "Larimer County",
    eyebrow: "Fort Collins roof quote guidance",
    title: "Decode Your Fort Collins Roof Estimate With Confidence",
    description:
      "Understand Fort Collins roofing quotes, hail damage scopes, Class 4 shingle options, ventilation, warranties, and insurance-related line items.",
    intro:
      "A good Fort Collins roofing proposal should tell you exactly what will be removed, installed, protected, warranted, and charged. Roof Quote Decoder gives homeowners a practical framework for identifying vague language, missing scope, and meaningful differences between contractors.",
    localNote:
      "Fort Collins roofs face hail, high winds, snow, freeze-thaw cycles, and intense sun. Older homes may also have ventilation, flashing, or decking conditions that deserve attention before a replacement contract is signed.",
    concerns: [
      {
        title: "Complete weather protection",
        text: "The proposal should define underlayment, valleys, penetrations, wall flashing, edge protection, intake and exhaust—not just the field shingles.",
      },
      {
        title: "Older-home conditions",
        text: "Ask how hidden decking, multiple layers, obsolete vents, skip sheathing, and code-triggered work will be priced if discovered.",
      },
      {
        title: "Comparable warranties",
        text: "Manufacturer coverage and contractor workmanship coverage are different. Compare duration, transferability, exclusions, registration, and who is responsible for service.",
      },
    ],
    neighborhoods: ["Old Town", "Midtown", "Harmony Corridor", "Rigden Farm", "Fossil Lake", "North Fort Collins"],
    faq: [
      {
        question: "What makes a Fort Collins roofing quote complete?",
        answer:
          "A complete quote defines the full system, labor, quantities, permits, protection, cleanup, warranty, payment terms, exclusions, and how unforeseen conditions will be handled.",
      },
      {
        question: "Is the lowest roofing bid usually the best value?",
        answer:
          "Not necessarily. A lower bid may be efficient, or it may omit scope, use a different system, carry less warranty coverage, or rely on allowances. Normalize the scope before judging value.",
      },
      {
        question: "When should I request a hail inspection in Fort Collins?",
        answer:
          "After a significant storm, especially when neighbors report damage or you see marks on gutters, vents, siding, screens, or outdoor equipment. Avoid walking the roof yourself.",
      },
    ],
  },
  {
    slug: "greeley",
    city: "Greeley",
    county: "Weld County",
    eyebrow: "Greeley roof quote guidance",
    title: "Compare Your Greeley Roofing Quote With a Clearer Scope",
    description:
      "Understand Greeley roofing estimates, hail and wind exposure, impact-resistant shingles, ventilation, warranties, and variable project costs.",
    intro:
      "A complete Greeley roofing proposal should explain the system, quantities, labor, property protection, warranty, payment terms, and anything that could change the final price. Roof Quote Decoder helps homeowners find vague language and compare contractors on more than the bottom-line number.",
    localNote:
      "Greeley roofs face Front Range hail, wind, temperature swings, snow, and strong sun. The right proposal should reflect the home's age, roof geometry, ventilation, drainage, and actual inspection findings instead of relying on a generic replacement package.",
    concerns: [
      {
        title: "Hail and wind documentation",
        text: "Ask for photographs and clear observations covering every roof slope, ridge, vents, flashing, gutters, downspouts, siding, and other collateral surfaces.",
      },
      {
        title: "Ventilation and drainage",
        text: "Confirm intake, exhaust, valleys, penetrations, edge protection, gutters, and water-shedding details as part of the full roofing system.",
      },
      {
        title: "Defined variable costs",
        text: "Decking, additional tear-off layers, specialty flashing, access conditions, and code-related work should have clear unit prices and an approval process.",
      },
    ],
    neighborhoods: ["Downtown Greeley", "West Greeley", "Kelly Farm", "St. Michaels", "Promontory", "Poudre River Ranch"],
    faq: [
      {
        question: "What should a Greeley roofing estimate include?",
        answer:
          "Look for the exact material system, quantities, removal and disposal, decking terms, flashing, ventilation, permits, cleanup, warranty coverage, exclusions, and change-order process.",
      },
      {
        question: "Are impact-resistant shingles worth comparing in Greeley?",
        answer:
          "They are worth discussing because hail is a recurring regional exposure. Compare the exact product, complete system, warranty, upgrade cost, and any policy implications with your roofer and insurer.",
      },
      {
        question: "When should a Greeley homeowner request a hail inspection?",
        answer:
          "Consider an inspection after a significant storm, especially when you see dents on gutters or vents, damaged screens or siding, roofing debris, or neighborhood reports of damage. Avoid walking the roof yourself.",
      },
    ],
  },
  {
    slug: "boulder",
    city: "Boulder",
    county: "Boulder County",
    eyebrow: "Boulder roofing estimate guidance",
    title: "Decode Your Boulder Roofing Estimate Before Work Begins",
    description:
      "Compare Boulder roofing quotes with clear guidance on materials, ventilation, flashing, weather exposure, warranties, permits, and hidden-cost language.",
    intro:
      "Boulder roofing projects can involve very different home ages, roof shapes, access conditions, material choices, and jurisdictional requirements. A useful proposal should define those conditions in writing so the homeowner can compare complete systems instead of broad promises.",
    localNote:
      "Boulder roofs must manage hail, wind, snow, freeze-thaw cycles, intense sun, and property-specific design conditions. Older homes and complex roof-to-wall transitions deserve especially clear flashing, ventilation, decking, and change-order language.",
    concerns: [
      {
        title: "Property-specific scope",
        text: "The proposal should reflect roof geometry, access, existing layers, penetrations, wall intersections, drainage, and actual material quantities for the home.",
      },
      {
        title: "Flashing and ventilation",
        text: "Ask whether flashing will be replaced or reused and how intake and exhaust ventilation were calculated for the proposed roof system.",
      },
      {
        title: "Permits and project variables",
        text: "Confirm who handles permits and inspections, which requirements are included, and how unforeseen decking or code-related work will be documented and approved.",
      },
    ],
    neighborhoods: ["North Boulder", "South Boulder", "Table Mesa", "Gunbarrel", "Martin Acres", "Mapleton Hill"],
    faq: [
      {
        question: "What makes a Boulder roofing quote easy to compare?",
        answer:
          "A comparable quote identifies the complete system, quantities, labor, permits, flashing, ventilation, property protection, warranty, exclusions, payment terms, and variable-cost process.",
      },
      {
        question: "Should flashing be addressed in a Boulder roof replacement?",
        answer:
          "Yes. The quote should state which flashing will be replaced, reused, or evaluated after tear-off, especially at walls, chimneys, skylights, valleys, and penetrations.",
      },
      {
        question: "Can a roofer explain differences between a contractor scope and insurance estimate?",
        answer:
          "A roofer can explain construction scope and document observed conditions. Your insurer decides coverage, and policy questions should be confirmed with the insurer or a licensed insurance professional.",
      },
    ],
  },
];

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  published: string;
  updated: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: BlogSection[];
  faq: { question: string; answer: string }[];
};

export const posts: BlogPost[] = [
  {
    slug: "how-to-compare-roofing-quotes-northern-colorado",
    title: "How to Compare Roofing Quotes in Northern Colorado",
    description:
      "A practical, line-by-line guide to comparing roof replacement estimates in Berthoud, Loveland, Fort Collins, Greeley, and Boulder without choosing on price alone.",
    category: "Roof Quotes",
    readTime: "8 min read",
    published: "2026-08-20",
    updated: "2026-08-20",
    image: "/blog/roofing-quote-guide.webp",
    imageAlt: "Homeowner comparing a roofing estimate with a calculator and material samples",
    intro:
      "Roofing estimates are rarely written in the same format. One contractor may bundle the entire system into a few lines while another itemizes every vent, flashing detail, and sheet of decking. Before comparing totals, make sure the proposals are actually pricing the same roof.",
    sections: [
      {
        heading: "Start by confirming the basic scope",
        paragraphs: [
          "Every estimate should clearly identify the property, measured roof size, number of existing layers, removal and disposal, new roofing system, accessories, permits, cleanup, warranty, and payment terms. If a major part of the project is implied instead of written, ask for it to be added before signing.",
          "Pay special attention to the difference between an estimate and a fixed contract. Ask what can change the price, which items are allowances, and how additional work must be approved.",
        ],
      },
      {
        heading: "Compare complete roof systems—not shingle names",
        paragraphs: [
          "The visible shingle is only one part of the system. Starter strips, ridge caps, underlayment, valley protection, intake and exhaust ventilation, pipe boots, flashing, drip edge, fasteners, and sealants all affect performance.",
        ],
        bullets: [
          "Exact manufacturer and product line",
          "Impact rating and wind-rating requirements",
          "Starter and ridge products included",
          "Synthetic underlayment and ice-barrier locations",
          "Ventilation calculation and vent type",
          "Flashing replacement versus reuse",
        ],
      },
      {
        heading: "Find the costs that may appear later",
        paragraphs: [
          "Decking is one of the most common variables because its condition may not be visible until tear-off. The estimate should state whether any sheets are included, the unit price for additional decking, and how authorization will be documented. Use the same approach for multiple layers, steep charges, access limitations, code upgrades, and specialty flashing.",
          "A very low initial price can become expensive when predictable work is moved into open-ended change orders. Clear unit prices protect both the homeowner and contractor.",
        ],
      },
      {
        heading: "Understand the two different warranties",
        paragraphs: [
          "Manufacturer coverage generally applies to roofing products. Workmanship coverage applies to installation. Ask who registers the warranty, what level is included, what can void coverage, whether it transfers, and who handles a service call years later.",
          "Long warranty language is only meaningful when the scope, installer credentials, exclusions, and service responsibility are clear.",
        ],
      },
      {
        heading: "Use a normalized comparison",
        bullets: [
          "Mark each scope item as included, excluded, allowance, or unclear.",
          "Ask every contractor the same questions in writing.",
          "Compare material system, workmanship, communication, and financial terms.",
          "Verify current insurance, local presence, reviews, and manufacturer credentials.",
          "Do not sign under storm-driven pressure before the scope is understandable.",
        ],
        paragraphs: [
          "The best value is the proposal that delivers the right system, a complete scope, dependable installation, and clear accountability at a fair price. A local second opinion can help translate differences without turning the review into a high-pressure sales meeting.",
        ],
      },
    ],
    faq: [
      {
        question: "Why are two roof quotes so different?",
        answer:
          "Differences can come from measurements, material systems, ventilation, flashing, labor standards, warranties, overhead, exclusions, and how uncertain items are priced. Compare scope before total price.",
      },
      {
        question: "Should a roofing quote show the number of squares?",
        answer:
          "A professional proposal should make the measured scope understandable. Roofing is commonly measured in squares, with one square equal to 100 square feet of roof surface.",
      },
    ],
  },
  {
    slug: "what-class-4-shingles-mean-colorado",
    title: "What Class 4 Shingles Actually Mean for Colorado Homes",
    description:
      "Learn what a Class 4 impact rating tests, what it does not guarantee, and what Northern Colorado homeowners should compare before upgrading.",
    category: "Roof Materials",
    readTime: "7 min read",
    published: "2026-08-20",
    updated: "2026-08-20",
    image: "/roof-decoder-hero.webp",
    imageAlt: "Architectural shingle roof on a Northern Colorado home",
    intro:
      "Class 4 is the highest impact-resistance classification in the commonly referenced UL 2218 test. That makes it an important comparison point in hail-prone Northern Colorado—but it does not make a roof hail-proof, and the rating alone does not tell you whether the full system will perform well.",
    sections: [
      {
        heading: "What the rating tells you",
        paragraphs: [
          "Impact testing evaluates whether a roofing product resists specific forms of cracking or failure under controlled laboratory impacts. Products that meet the Class 4 criteria have demonstrated greater impact resistance than lower-rated products under that test method.",
          "The rating is useful, but it is one piece of the decision. Real hail varies in size, density, wind speed, angle, duration, and temperature. Roof age, deck condition, installation, ventilation, and previous weathering also matter.",
        ],
      },
      {
        heading: "What Class 4 does not promise",
        bullets: [
          "It does not mean the roof cannot be damaged by hail.",
          "It does not guarantee insurance coverage or claim approval.",
          "It does not replace correct installation and ventilation.",
          "It does not mean every Class 4 product uses the same technology.",
          "It does not automatically create an insurance discount.",
        ],
      },
      {
        heading: "Compare the actual product and system",
        paragraphs: [
          "Ask for the exact manufacturer and product line, then review the published impact rating, wind rating, warranty requirements, approved accessories, and installation instructions. Some impact-resistant shingles use polymer-modified asphalt, reinforced mats, or other construction approaches that feel and perform differently.",
          "Also compare the parts homeowners rarely see: starter, ridge, underlayment, flashing, ventilation, fastener pattern, and deck preparation. A premium shingle installed as part of an incomplete system is still an incomplete roof.",
        ],
      },
      {
        heading: "Questions to ask your insurer",
        bullets: [
          "Does this exact product qualify for a policy discount?",
          "Will the discount change the roof-loss settlement terms?",
          "Is documentation or certification required after installation?",
          "Are cosmetic-damage exclusions or special roof endorsements involved?",
          "How will roof age affect future coverage?",
        ],
        paragraphs: [
          "Insurance terms vary by carrier and policy. Ask your licensed agent to explain the complete effect rather than assuming an advertised discount is automatically a financial win.",
        ],
      },
      {
        heading: "When the upgrade makes sense",
        paragraphs: [
          "For many Berthoud, Loveland, Fort Collins, Greeley, and Boulder homeowners, impact resistance is a rational upgrade because hail is a recurring exposure. The decision is strongest when the product, complete system, installer, warranty, price difference, and insurance implications all make sense together.",
        ],
      },
    ],
    faq: [
      {
        question: "Are Class 4 shingles hail-proof?",
        answer:
          "No. Class 4 indicates performance in a defined impact test; severe real-world hail can still cause functional or cosmetic damage.",
      },
      {
        question: "Do Class 4 shingles lower Colorado insurance premiums?",
        answer:
          "Some insurers offer discounts for qualifying products, but eligibility and policy effects vary. Confirm the exact product and terms with your insurer before relying on savings.",
      },
    ],
  },
  {
    slug: "what-to-do-after-hail-damage-northern-colorado",
    title: "What to Do After a Northern Colorado Hailstorm",
    description:
      "A calm step-by-step hail damage checklist for homeowners in Berthoud, Loveland, Fort Collins, Greeley, and Boulder, from safety and documentation to inspection and insurance.",
    category: "Hail Damage",
    readTime: "8 min read",
    published: "2026-08-20",
    updated: "2026-08-20",
    image: "/blog/hail-damage-guide.webp",
    imageAlt: "Hailstones and subtle impact marks on a wet architectural shingle roof",
    intro:
      "After a Front Range hailstorm, homeowners are often flooded with door knocks, urgent promises, and conflicting advice. The best first move is usually not signing a contract. It is protecting people and property, documenting what happened, and getting reliable information about the roof.",
    sections: [
      {
        heading: "1. Start with safety and active leaks",
        paragraphs: [
          "Stay off wet or damaged roofing. Look from the ground for displaced materials, hanging gutters, broken skylights, tree damage, or obvious openings. Inside, check ceilings, attic areas, walls, and fixtures for water. If water is entering the home, contact a qualified local contractor for temporary protection and document the condition before emergency work begins.",
        ],
      },
      {
        heading: "2. Document the storm and visible conditions",
        bullets: [
          "Record the date and approximate time of the storm.",
          "Photograph hail beside a ruler or familiar object when safe.",
          "Photograph gutters, downspouts, screens, siding, fences, vehicles, and outdoor equipment.",
          "Save weather alerts, repair receipts, and contractor reports.",
          "Do not discard damaged personal property before asking your insurer about documentation.",
        ],
      },
      {
        heading: "3. Schedule a thorough local inspection",
        paragraphs: [
          "A useful hail inspection covers more than shingles. The inspector should evaluate roof slopes, ridge and hip caps, vents, pipe jacks, flashing, skylights, gutters, downspouts, siding, windows, paint, and other collateral surfaces. Ask for photographs and a clear explanation of functional versus cosmetic observations.",
          "Avoid anyone who promises claim approval before your insurer evaluates coverage or pressures you to sign over decision-making immediately.",
        ],
      },
      {
        heading: "4. Review your policy and contact your insurer",
        paragraphs: [
          "Check your wind-and-hail deductible, roof settlement terms, endorsements, reporting duties, and time limits. Your licensed agent or carrier should explain policy language. A roofer can document construction conditions and repair scope but should not present themselves as the person deciding coverage.",
          "When an adjuster inspects, provide your documentation and ask your contractor whether attending would help identify construction details or overlooked damage.",
        ],
      },
      {
        heading: "5. Compare the approved scope with the real project",
        paragraphs: [
          "Insurance estimates and contractor proposals often organize work differently. Compare quantities, material type, ventilation, flashing, code-required items, permits, taxes, overhead, and any damaged exterior components. Ask questions about gaps before work starts.",
          "Do not choose a contractor only because the contract total matches the insurer's first estimate. Choose based on complete scope, qualifications, communication, workmanship, and accountability.",
        ],
      },
      {
        heading: "Red flags after a storm",
        bullets: [
          "Pressure to sign before you understand the document",
          "Promises to waive or absorb your deductible without a lawful, documented basis",
          "No clear local address, insurance, references, or manufacturer credentials",
          "Large upfront payment without defined materials, schedule, and protections",
          "Claims that every roof in the neighborhood is automatically damaged",
        ],
      },
    ],
    faq: [
      {
        question: "How soon should I inspect my roof after hail?",
        answer:
          "Arrange a qualified inspection promptly enough to document conditions and meet policy duties, but do not let artificial urgency force a rushed contract.",
      },
      {
        question: "Can I identify hail damage from the ground?",
        answer:
          "You may see clues on gutters, vents, siding, screens, or vehicles, but confirming roof damage usually requires a safe, close inspection by a qualified professional.",
      },
    ],
  },
  {
    slug: "does-insurance-pay-for-roof-replacement-colorado",
    title: "Does Homeowners Insurance Pay for a Roof in Colorado?",
    description:
      "Understand the difference between covered storm damage, maintenance, deductibles, depreciation, exclusions, and contractor scope in a Colorado roof claim.",
    category: "Insurance Education",
    readTime: "9 min read",
    published: "2026-08-20",
    updated: "2026-08-20",
    image: "/blog/roofing-quote-guide.webp",
    imageAlt: "Homeowner reviewing roof-related documents at a kitchen table",
    intro:
      "Homeowners insurance may pay for covered roof damage caused by a sudden event such as hail or wind, but it does not automatically pay for every old, worn, or leaking roof. The policy, cause of loss, roof condition, endorsements, deductible, and documentation all affect the outcome.",
    sections: [
      {
        heading: "Coverage begins with the cause—not the contractor's opinion",
        paragraphs: [
          "A roofing contractor can inspect the roof, photograph conditions, explain construction scope, and provide an estimate. The insurance carrier determines whether the reported loss is covered under the policy. That distinction protects homeowners from promises nobody outside the insurer can guarantee.",
          "Hail and wind are commonly covered causes of loss, but wear, neglect, faulty installation, long-term leakage, deterioration, and cosmetic-only conditions may be handled differently or excluded. Read the policy and ask a licensed insurance professional to explain it.",
        ],
      },
      {
        heading: "Know your deductible and settlement method",
        paragraphs: [
          "Your deductible is the portion of a covered loss you are responsible for paying. Roof claims may also be settled using replacement cost value or actual cash value, and some policies use roof schedules or endorsements based on age and material.",
        ],
        bullets: [
          "Replacement Cost Value (RCV) generally reflects the cost to replace covered property, subject to policy terms.",
          "Actual Cash Value (ACV) generally accounts for depreciation.",
          "Recoverable depreciation may be released after eligible work is completed and documented.",
          "Nonrecoverable depreciation is not paid later.",
          "Policy language—not a general roofing article—controls your claim.",
        ],
      },
      {
        heading: "Why the first insurance estimate may change",
        paragraphs: [
          "An adjuster's initial estimate is based on information available at the time. Contractors may identify scope details, code requirements, hidden conditions, or quantity differences that deserve documentation. A supplement is a request for the carrier to review additional information; it is not a guarantee of payment.",
          "Ask for a written comparison between the insurer's scope and contractor proposal. That makes legitimate differences easier to understand and separates construction questions from coverage questions.",
        ],
      },
      {
        heading: "Questions homeowners should ask",
        bullets: [
          "What wind-and-hail deductible applies?",
          "Is the roof settled at replacement cost, actual cash value, or on a schedule?",
          "Are cosmetic damage exclusions or roof endorsements present?",
          "What deadlines apply to reporting, repairs, and depreciation recovery?",
          "Which documents are required after work is completed?",
          "How are code upgrades handled under this policy?",
        ],
      },
      {
        heading: "Choose the contractor independently",
        paragraphs: [
          "Insurance involvement does not remove the need to vet the contractor. Verify current insurance, local presence, written scope, materials, installation standards, payment schedule, warranty, and change-order process. Be cautious with vague contingency agreements or anyone who makes the deductible disappear through an undocumented arrangement.",
          "A trustworthy local roofer should help you understand the construction without pretending to control the insurance decision.",
        ],
      },
      {
        heading: "Important note",
        paragraphs: [
          "This guide provides general roofing education and is not legal, insurance, or claims-adjusting advice. Coverage varies. Confirm policy questions with your insurer, licensed agent, or qualified adviser.",
        ],
      },
    ],
    faq: [
      {
        question: "Will insurance replace an old roof after hail?",
        answer:
          "Age alone does not answer the question. Coverage depends on the cause of loss, policy terms, roof condition, endorsements, deductible, documentation, and carrier evaluation.",
      },
      {
        question: "Can a Colorado roofer waive my deductible?",
        answer:
          "Homeowners should be skeptical of any promise to make a required deductible disappear. Ask your insurer and qualified legal or insurance adviser about applicable requirements before signing.",
      },
    ],
  },
];

export const phoneDisplay = "970-501-8125";
export const phoneHref = "+19705018125";
export const bookingUrl = "https://www.myfamilyroofer.com/contact-info";
export const mainSiteUrl = "https://www.myfamilyroofer.com/";

export function cityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug);
}

export function postBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
