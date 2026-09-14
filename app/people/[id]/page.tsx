import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail } from "lucide-react";
import { people } from "@/data/people";
import { PersonCard } from "@/components/ui";

export function generateStaticParams() {
  return people.map((p) => ({
    id: String(p.id),
  }));
}

export default async function PersonDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const person = people.find((x) => x.id === Number(id));
  if (!person) return notFound();

  return (
    <article className="container-site py-12">
      <Link href="/people" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-brand">
        <ArrowLeft size={16} /> All people
      </Link>
      <div className="grid gap-9 lg:grid-cols-[.65fr_1.35fr]">
        <div className="overflow-hidden rounded-3xl image-shade">
          <img src={person.avatar} alt={person.name} className="h-full min-h-96 w-full object-cover object-top opacity-85" />
        </div>
        <div>
          <p className="eyebrow">{person.department}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">{person.name}</h1>
          <p className="muted mt-3 text-lg">{person.position}</p>
          <a href={`mailto:${person.email}`} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-white">
            <Mail size={16} /> {person.email}
          </a>
          <div className="prose-academic mt-9">
            <h2>Biography</h2>
            <p>{person.biography}</p>
          </div>
          <h2 className="mt-8 font-bold">Research interests</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {person.interests.map((x) => (
              <span key={x} className="rounded-full bg-sky px-3 py-1.5 text-sm font-semibold text-brand dark:bg-brand/20">
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Meet more faculty</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {people.filter((x) => x.id !== person.id).slice(0, 4).map((x) => (
            <PersonCard item={x} key={x.id} />
          ))}
        </div>
      </section>
    </article>
  );
}
