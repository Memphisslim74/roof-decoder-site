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
  links?: { label: string; href: string }[];
  subsections?: {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
    links?: { label: string; href: string }[];
  }[];
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
    slug: "roof-repair-vs-replacement-colorado",
    title: "Roof Repair or Replacement? A Northern Colorado Homeowner Decision Guide",
    description:
      "Decide whether to repair or replace a Colorado roof using damage extent, roof age, leaks, matching materials, code, cost, and insurance scope.",
    category: "Roof Planning",
    readTime: "9 min read",
    published: "2026-09-03",
    updated: "2026-09-03",
    image: "/roof-decoder-hero.webp",
    imageAlt: "Architectural asphalt shingle roof on a Northern Colorado home",
    intro:
      "A roof leak does not automatically mean you need a new roof, and a few intact shingles do not automatically mean a repair is the smart choice. The right answer depends on where the problem started, how much of the roof is affected, whether the surrounding materials can accept a durable repair, and the long-term cost—not a salesperson's preferred solution.",
    sections: [
      {
        heading: "Start with the condition of the whole roof",
        paragraphs: [
          "Repair versus replacement is not simply a comparison between a small invoice and a large one. A repair is valuable when it corrects a defined problem and leaves a serviceable roof around it. Replacement becomes more reasonable when the visible problem is one symptom of widespread aging, storm damage, installation defects, or moisture below the shingles.",
          "The Asphalt Roofing Manufacturers Association emphasizes that asphalt-shingle roofs are repairable. Its 2026 guidance identifies individual damaged shingles, wind-lifted tabs, backed-out fasteners, and flashing around penetrations as examples that may be repaired by a qualified professional. The question is not whether a repair is technically possible. It is whether that repair is appropriate for this roof and likely to hold up.",
        ],
        links: [
          { label: "Read ARMA's 2026 guidance on repairable asphalt roofs", href: "https://www.asphaltroofing.org/asphalt-shingle-roofs-are-repairable-what-you-need-to-know/" },
        ],
        subsections: [
          {
            heading: "A repair is usually worth considering when",
            bullets: [
              "Damage is limited to a small, identifiable area.",
              "The leak comes from one flashing detail, pipe boot, vent, or isolated puncture.",
              "Surrounding shingles remain flexible, well-adhered, and in serviceable condition.",
              "Matching or compatible materials are available.",
              "The roof deck is dry and sound outside the affected area.",
              "There is no pattern of repeat repairs or leaks across multiple slopes.",
            ],
          },
          {
            heading: "Replacement deserves a closer look when",
            bullets: [
              "Damage, curling, cracking, or granule loss is widespread rather than isolated.",
              "Leaks appear in multiple areas or return after previous repairs.",
              "Shingles are too brittle to lift and reseal without causing more damage.",
              "Decking deterioration, trapped moisture, or ventilation problems affect a larger assembly.",
              "Prior layers, patches, or incompatible materials make another repair unreliable.",
              "The repair would consume a meaningful share of replacement cost without providing a dependable service period.",
            ],
          },
        ],
      },
      {
        heading: "Roof age is evidence—not a verdict",
        paragraphs: [
          "Roof age helps frame the decision, but real roofs do not age on a universal clock. Product quality, installation, ventilation, pitch, sun, maintenance, wind, hail, snow, and previous repairs all affect condition. A newer roof can fail early; an older roof can remain serviceable.",
          "A durable repair may preserve years of service on a healthy roof. On an older roof with brittle materials and several warning signs, repeated patches can postpone an unavoidable replacement while hidden damage grows. Ask the inspector to explain observed condition instead of relying on age alone.",
        ],
      },
      {
        heading: "Inspect the assembly, not just the visible shingle",
        paragraphs: [
          "A ceiling stain may be several feet from the entry point because water can travel along decking, rafters, fasteners, or underlayment. A repair recommendation should connect the symptom to a documented cause.",
          "The National Roofing Contractors Association advises homeowners to assess storm damage from the ground and leave close inspection and repair to trained professionals. Walking a steep, wet, or damaged roof creates a serious fall risk.",
        ],
        links: [
          { label: "Review NRCA's homeowner roofing safety guidance", href: "https://www.nrca.net/news-events/press-room/storm-roof-repairs" },
        ],
        subsections: [
          {
            heading: "Exterior inspection points",
            bullets: [
              "Every roof slope, ridge, hip, valley, eave, and transition",
              "Shingle adhesion, cracking, missing tabs, granule condition, and exposed fasteners",
              "Wall, chimney, skylight, valley, and step flashing",
              "Pipe boots, vents, gutters, edge metal, and storm-related collateral damage",
              "Soft or uneven decking and evidence of previous repairs",
            ],
          },
          {
            heading: "Interior and attic inspection points",
            bullets: [
              "Water stains, wet insulation, active drips, and moisture patterns",
              "Decking discoloration, rot, fastener staining, and daylight through openings",
              "Blocked intake vents, unbalanced exhaust, condensation, and bathroom vents terminating in the attic",
            ],
          },
        ],
      },
      {
        heading: "Test whether the proposed repair is truly repairable",
        paragraphs: [
          "Ask the contractor to identify the repair area, failed component, materials being removed, and how new work will tie into the existing system. Can shingles be lifted without tearing? Is a compatible replacement available? Will flashing be rebuilt or covered with sealant? What workmanship coverage applies?",
          "Color mismatch is mostly cosmetic, but compatibility and sealability affect performance. Discontinued products do not automatically require replacement. The inspector should explain any practical limitation and why it changes the scope.",
        ],
      },
      {
        heading: "Local code can change the scope",
        paragraphs: [
          "A small repair and a reroof may trigger different permit, inspection, and material requirements. Fort Collins currently states that Class 4 impact-resistant shingles are required when replacing 50% or more of a roof on the portion being replaced. Loveland's 2024 code amendments took effect July 1, 2026. Boulder uses a detailed roof-inspection process that includes photo documentation and ventilation verification for applicable permitted projects.",
          "Berthoud properties may fall under different municipal or county authorities, while Greeley has its own process. The contractor should verify the authority for the exact address. A Loveland project may require a different approach than work in Fort Collins, Greeley, Boulder, or a Berthoud-area county jurisdiction.",
        ],
        links: [
          { label: "Fort Collins roofing permit requirements", href: "https://www.fortcollins.gov/Business/Permits-and-Licensing/Building-Permits" },
          { label: "Loveland's current building code information", href: "https://www.lovgov.org/services/development-services/building-division/loveland-building-code" },
          { label: "Boulder's official roof inspection guide", href: "https://bouldercolorado.gov/roof-inspection-guide" },
          { label: "Berthoud roofing guidance", href: "/locations/berthoud" },
          { label: "Loveland roofing guidance", href: "/locations/loveland" },
          { label: "Fort Collins roofing guidance", href: "/locations/fort-collins" },
          { label: "Greeley roofing guidance", href: "/locations/greeley" },
          { label: "Boulder roofing guidance", href: "/locations/boulder" },
        ],
      },
      {
        heading: "Compare the long-term math",
        paragraphs: [
          "A repair quote should explain what it fixes, what it does not fix, and the expected result. A replacement quote should define tear-off, decking terms, underlayment, ice barrier, flashing, ventilation, edge metal, permits, cleanup, and warranties.",
          "Compare repair cost with the roof's documented condition. One targeted repair on a healthy roof can be responsible. Repairs across several slopes, repeated interior damage, and an approaching replacement can make the cheaper option more expensive. These are planning judgments, not guaranteed service-life predictions.",
        ],
        links: [
          { label: "See 2026 Northern Colorado roof replacement cost factors", href: "/blog/roof-replacement-cost-northern-colorado-2026" },
          { label: "Learn how to compare roofing proposals", href: "/blog/how-to-compare-roofing-quotes-northern-colorado" },
        ],
      },
      {
        heading: "Keep the insurance decision separate",
        paragraphs: [
          "A contractor can document storm damage and price the work; the insurer decides coverage under the policy. A replacement recommendation does not guarantee coverage, and repairability does not determine how deductibles, depreciation, exclusions, or matching provisions apply.",
          "Compare the construction recommendation with the insurer's written scope. Ask about quantity and line-item differences. Confirm policy language and deadlines with the insurer or licensed agent, and treat a supplement as a request for review—not promised payment.",
        ],
        links: [
          { label: "Read the Colorado roof insurance guide", href: "/blog/does-insurance-pay-for-roof-replacement-colorado" },
          { label: "Use the Northern Colorado hail-damage guide", href: "/hail-damage" },
        ],
      },
      {
        heading: "Questions to ask before deciding",
        bullets: [
          "What caused the problem, and what evidence supports that conclusion?",
          "Is the damage isolated or present across multiple slopes and components?",
          "Can the existing shingles be lifted and resealed without creating new damage?",
          "Are compatible materials available, and does any mismatch affect performance or only appearance?",
          "What decking, flashing, or ventilation problems were found?",
          "What permit and material requirements apply to this address and scope?",
          "What is excluded, what could change the price, and how are changes approved?",
          "What workmanship coverage applies to the repair or replacement?",
          "If repair is recommended, what signs would mean replacement should be reconsidered?",
        ],
      },
      {
        heading: "Your next step: get the recommendation in writing",
        paragraphs: [
          "Do not settle for “you need a roof” or “we can patch it.” Ask for photographs, the cause, the remaining roof condition, viable options, and each option's limits. A written scope prevents a temporary repair from being mistaken for a complete solution.",
          "If you have a proposal, submit it through the Roof Quote Decoder for a plain-English review. Otherwise, schedule a local evaluation of the entire system and the rules for your property.",
        ],
        links: [
          { label: "Upload your proposal through the Roof Quote Decoder", href: "/roof-quote-decoder" },
          { label: "What to do after a Northern Colorado hailstorm", href: "/blog/what-to-do-after-hail-damage-northern-colorado" },
        ],
      },
    ],
    faq: [
      {
        question: "Can a Colorado asphalt-shingle roof be repaired instead of replaced?",
        answer:
          "Yes. Isolated shingle, flashing, fastener, vent, or puncture problems may be repairable when the surrounding roof remains serviceable and compatible materials can be installed correctly. A qualified inspection should confirm the cause, repair area, and condition of the remaining system.",
      },
      {
        question: "Does one roof leak mean the entire roof needs replacement?",
        answer:
          "No. One leak may come from a localized flashing or penetration problem, but it can also reveal broader installation, decking, or ventilation issues. Trace the entry point and inspect the full roof before choosing the scope.",
      },
      {
        question: "Will homeowners insurance decide whether my roof is repaired or replaced?",
        answer:
          "The insurer decides coverage and claim payment under the policy. A roofing contractor evaluates construction conditions and recommends a scope. Compare both written documents, ask about differences, and confirm coverage questions with the insurer or licensed agent.",
      },
    ],
  },
  {
    slug: "roof-replacement-cost-northern-colorado-2026",
    title: "2026 Roof Replacement Costs in Northern Colorado: A Homeowner's Guide",
    description:
      "Plan a 2026 Northern Colorado roof replacement with realistic cost ranges, price factors, local permit considerations, and quote-comparison tips.",
    category: "Roof Costs",
    readTime: "9 min read",
    published: "2026-08-27",
    updated: "2026-08-27",
    image: "/blog/roofing-quote-guide.webp",
    imageAlt: "Homeowner reviewing a roofing estimate, calculator, and shingle samples",
    intro:
      "For many Northern Colorado homes, a complete asphalt-shingle roof replacement in 2026 is reasonable to budget at roughly $12,000 to $25,000. A smaller, simple roof may cost less, while a large, steep, cut-up, or premium roof can move well beyond that range. The important word is budget: no regional average can replace a roof measurement and a written, property-specific scope.",
    sections: [
      {
        heading: "The short answer: a practical 2026 planning range",
        paragraphs: [
          "A useful starting range for architectural asphalt shingles in Northern Colorado is about $600 to $900 per roofing square installed. One roofing square equals 100 square feet of actual roof surface. That rough range may include tear-off, disposal, a coordinated shingle system, standard flashing and ventilation work, labor, overhead, and permits, but only a written proposal tells you what is truly included.",
          "Public cost sources vary because they use different project sizes and data sets. HomeGuide's 2026 national guide reports $300 to $600 per square for a new roof, while Angi's current Denver data places many complete projects between about $7,400 and $16,500. Colorado projects with impact-resistant materials, steeper roofs, multiple stories, extensive flashing, or decking repairs can price higher. The broader local planning range above is an estimate, not a guaranteed market rate or offer.",
        ],
        bullets: [
          "15-square roof: roughly $9,000 to $13,500",
          "20-square roof: roughly $12,000 to $18,000",
          "25-square roof: roughly $15,000 to $22,500",
          "30-square roof: roughly $18,000 to $27,000",
        ],
        links: [
          { label: "Review HomeGuide's 2026 national cost data", href: "https://homeguide.com/costs/roof-replacement-cost" },
          { label: "Review Angi's current Denver roof-cost data", href: "https://www.angi.com/articles/how-much-does-roof-replacement-cost/co/denver" },
        ],
      },
      {
        heading: "Why your home's square footage is not the roof size",
        paragraphs: [
          "A 2,000-square-foot house does not necessarily have a 2,000-square-foot roof. Roof pitch, overhangs, attached garages, porches, additions, dormers, and waste around hips and valleys all increase the measured roofing area. A ranch home may have more roof surface than a two-story house with the same finished living area.",
          "Ask each contractor to show the measured number of squares and explain the waste factor. If one proposal measures 22 squares and another measures 29, the price difference may begin with measurement rather than materials or profit.",
        ],
      },
      {
        heading: "What changes the final roof replacement price",
        paragraphs: [
          "Roof size is only the first variable. Labor and safety requirements rise on steep roofs, high eaves, limited-access properties, and homes with many valleys, walls, skylights, chimneys, or penetrations. Removing two layers costs more than removing one. Disposal, material staging, landscaping protection, and difficult driveway access can also affect the work plan.",
          "Decking is another major unknown because some deterioration cannot be confirmed until the old roof is removed. Your quote should state how many sheets, if any, are included and give a unit price for additional decking. The same clarity should apply to step flashing, chimney flashing, pipe boots, skylights, gutters, fascia, and ventilation changes.",
          "Material choice matters, but compare the whole system. Standard architectural shingles, Class 4 impact-resistant shingles, premium designer shingles, standing-seam metal, and specialty products carry different material and installation costs. Starter, ridge cap, underlayment, ice barrier, ventilation, fasteners, and warranty eligibility should be named—not hidden behind a single shingle brand.",
        ],
        links: [
          { label: "Learn what Class 4 shingles actually mean", href: "/blog/what-class-4-shingles-mean-colorado" },
          { label: "Compare roofing quotes line by line", href: "/blog/how-to-compare-roofing-quotes-northern-colorado" },
        ],
      },
      {
        heading: "Local permits and code details belong in the price",
        paragraphs: [
          "Northern Colorado is not one building jurisdiction. Requirements can differ between a city, an unincorporated county address, and even nearby homes with different governing authorities. Fort Collins states that roof repairs or replacements larger than one roofing square require a permit and that asphalt re-roofs require Class IV impact-resistant shingles. Its 2024 International Codes and local amendments apply to permits submitted on or after April 1, 2026.",
          "Loveland's 2024 code changes took effect July 1, 2026. Boulder requires permits and inspections for regulated work, and its roof-inspection guide calls for photo documentation and verification of ventilation on applicable permitted projects. Berthoud properties may fall within different county or municipal boundaries, and Greeley maintains its own permitting process. A contractor should identify the actual authority for your address instead of assuming every Front Range project follows the same checklist.",
          "The bigger question is whether the proposal includes the materials and labor needed to meet the requirements that apply to the home. Before signing, ask who obtains the permit, who schedules inspections, what code-related work is included, and how a newly discovered requirement will be approved and priced.",
        ],
        links: [
          { label: "Fort Collins building permits and roofing application", href: "https://www.fcgov.com/building/permit-exempt" },
          { label: "Loveland's current building code information", href: "https://www.lovgov.org/services/development-services/building-division/loveland-building-code" },
          { label: "Boulder's official roof inspection guide", href: "https://bouldercolorado.gov/roof-inspection-guide" },
          { label: "Berthoud roof quote guidance", href: "/locations/berthoud" },
          { label: "Loveland roof quote guidance", href: "/locations/loveland" },
          { label: "Fort Collins roof quote guidance", href: "/locations/fort-collins" },
          { label: "Greeley roof quote guidance", href: "/locations/greeley" },
          { label: "Boulder roof quote guidance", href: "/locations/boulder" },
        ],
      },
      {
        heading: "The quote should separate known costs from possible costs",
        paragraphs: [
          "A homeowner should be able to identify the base contract price, selected material system, measured quantity, taxes, permits, warranties, payment schedule, and exclusions. Variables should have written unit prices or a clear change-order method. Phrases such as “decking as needed” or “code upgrades extra” are not enough when no rate or approval process is provided.",
        ],
        bullets: [
          "Number of tear-off layers and disposal included",
          "Decking allowance and price per additional sheet",
          "Exact shingle, starter, ridge, and underlayment products",
          "Flashing, ventilation, ice barrier, and edge-metal scope",
          "Permit, inspection, tax, delivery, and cleanup responsibility",
          "Workmanship warranty and manufacturer-warranty level",
          "Payment milestones, financing cost, exclusions, and change orders",
        ],
      },
      {
        heading: "Insurance scope and roof price are not the same thing",
        paragraphs: [
          "If hail or wind is involved, the insurer's estimate and the contractor's proposal may organize quantities and line items differently. The carrier decides coverage under the policy; the contractor defines the construction scope and price. Neither document should be treated as automatic proof that the other is complete.",
          "Compare the deductible, depreciation, covered scope, contractor scope, and any proposed supplements separately. A supplement asks the insurer to review additional documentation and is not a promise of payment. Confirm coverage questions and deadlines with the insurer or licensed agent, and do not assume an advertised material upgrade will produce a premium discount unless the carrier confirms it for the exact product and policy.",
        ],
        links: [
          { label: "Read the Colorado roof insurance guide", href: "/blog/does-insurance-pay-for-roof-replacement-colorado" },
          { label: "Use the Northern Colorado hail-damage guide", href: "/hail-damage" },
        ],
      },
      {
        heading: "How to control cost without buying the cheapest roof",
        paragraphs: [
          "Get two or three detailed proposals built around the same material level and written scope. Resolve measurement differences, ask for unit prices, and remove optional upgrades you do not value. If financing is involved, compare the total financed cost—not only the monthly payment. Ask whether the cash price changes when dealer fees are built into a financing plan.",
          "The lowest bid is not automatically wrong, and the highest bid is not automatically better. Value comes from a complete system, trained installation, reliable supervision, property protection, enforceable warranty terms, and a contractor that will still respond after the final payment.",
        ],
      },
      {
        heading: "Your next step: turn the estimate into a clear scope",
        paragraphs: [
          "Before choosing a roofer, mark every major item as included, excluded, allowance, or unclear. Then ask the contractor to revise vague answers into the proposal. A professional quote review can help identify missing scope, open-ended charges, and questions worth resolving before you sign.",
          "For a Berthoud, Loveland, Fort Collins, Greeley, or Boulder property, start with the actual roof—not a regional average. Upload the proposal for review or schedule a local inspection so the recommendation reflects the home's measurements, condition, jurisdiction, and material goals.",
        ],
        links: [
          { label: "Upload your proposal through the Roof Quote Decoder", href: "/roof-quote-decoder" },
          { label: "What to do after a Northern Colorado hailstorm", href: "/blog/what-to-do-after-hail-damage-northern-colorado" },
        ],
      },
    ],
    faq: [
      {
        question: "How much does a 2,000-square-foot roof cost in Northern Colorado in 2026?",
        answer:
          "If 2,000 square feet is the measured roof surface, a rough asphalt-shingle planning range is about $12,000 to $18,000. If 2,000 square feet describes the home's living area, the roof may be larger. Pitch, waste, layers, access, decking, flashing, ventilation, material, and jurisdiction can move the price outside that range.",
      },
      {
        question: "Do Class 4 shingles make a Northern Colorado roof more expensive?",
        answer:
          "Often, yes. The upgrade depends on the exact product and complete system. Class 4 describes performance in a defined impact test; it does not make a roof hail-proof or guarantee an insurance discount. Compare the added cost, warranty, and policy effect before deciding.",
      },
      {
        question: "Why can two roof replacement quotes be thousands of dollars apart?",
        answer:
          "The contractors may be pricing different measurements, materials, tear-off layers, decking assumptions, flashing, ventilation, permits, labor standards, warranties, overhead, financing, or exclusions. Normalize the scope before comparing the totals.",
      },
    ],
  },
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
