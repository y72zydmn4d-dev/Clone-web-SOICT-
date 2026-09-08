import type { News } from "./types";

const filler = [
  "SOICT continues to strengthen the bridge between rigorous academic training and technology that matters in everyday life.",
  "The initiative brings students, researchers and industry partners together around open questions and measurable impact.",
  "Participants will have opportunities to share ideas, develop practical solutions and join an international community of learners."
];

export const news: News[] = [
  ["AI research team wins national innovation challenge", "Research", "2026-09-02", "Dr. Minh Anh", true], ["SOICT welcomes the new cohort of digital pioneers", "Campus", "2026-08-28", "Communications Office", true], ["New industry partnership expands semiconductor curriculum", "Education", "2026-08-21", "Academic Affairs", true], ["Student team earns top prize at regional programming contest", "Students", "2026-08-16", "Student Services"], ["A practical guide to responsible AI for public services", "Research", "2026-08-11", "Dr. Quang Nguyen"], ["Fall semester: important dates and academic support", "Campus", "2026-08-05", "Academic Affairs"], ["SOICT researchers publish new work on multimodal learning", "Research", "2026-07-24", "Research Office"], ["Applications open for the 2026 master’s programs", "Education", "2026-07-18", "Graduate School"], ["Alumni spotlight: designing humane digital products", "Community", "2026-07-09", "Communications Office"], ["Cybersecurity lab launches student mentoring series", "Research", "2026-06-29", "Cybersecurity Lab"], ["Summer school connects ASEAN technology communities", "Events", "2026-06-18", "International Office"], ["Open-source tools built by SOICT students reach 10k users", "Students", "2026-06-11", "Innovation Hub"], ["Faculty forum explores the future of computing education", "Education", "2026-05-27", "Dean's Office"], ["A new interdisciplinary lab for smart and sustainable cities", "Research", "2026-05-15", "Research Office"]
].map(([title, category, date, author, featured], index) => ({
  id: index + 1, slug: `${String(title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${index + 1}`,
  title: String(title), category: String(category), date: String(date), author: String(author), featured: Boolean(featured),
  excerpt: `A closer look at ${String(title).toLowerCase()}, and the people shaping the next chapter at SOICT.`, content: filler,
  image: `https://images.unsplash.com/photo-${[1516321318423, 1517245386807, 1504384308090, 1522202176988, 1523240795612, 1497366754035, 1550751827, 1517077304055, 1532619675605, 1552664730, 1519389950473, 1509062522246, 1541339907198, 1496171367470][index]}?auto=format&fit=crop&w=1200&q=80`
}));
