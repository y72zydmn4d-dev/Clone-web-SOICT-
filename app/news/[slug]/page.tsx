import { news } from "@/data/news";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return news.map((item: any) => ({
    slug: String(item.slug || item.id),
  }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item: any = news.find((n: any) => String(n.slug || n.id) === slug);
  if (!item) notFound();

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <p className="text-gray-500 mt-2">{item.date}</p>
      <div className="mt-4">{item.content || item.excerpt || ""}</div>
    </div>
  );
}
