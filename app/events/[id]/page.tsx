import { events } from "@/data/events";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return events.map((event) => ({
    id: String(event.id),
  }));
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = events.find((e) => String(e.id) === id);
  if (!event) notFound();

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p className="text-gray-500 mt-2">{event.date}</p>
      <p className="mt-4">{event.description}</p>
    </div>
  );
}
