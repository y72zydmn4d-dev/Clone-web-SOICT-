export type News = { id: number; slug: string; title: string; excerpt: string; content: string[]; category: string; date: string; author: string; image: string; featured?: boolean };
export type Event = { id: number; title: string; description: string; category: string; date: string; time: string; location: string; organizer: string; image: string };
export type Person = { id: number; name: string; position: string; department: string; interests: string[]; email: string; avatar: string; biography: string };
export type Course = { id: number; name: string; degree: "Undergraduate" | "Graduate" | "PhD"; duration: string; credits: number; description: string; curriculum: string[]; careers: string[] };
export type Research = { id: number; title: string; short: string; description: string; faculty: string[]; projects: string[]; icon: string };
