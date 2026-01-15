import { articles } from "@/app/data"; // Vérifiez bien le chemin de l'import
import { Metadata } from "next";
import { notFound } from "next/navigation";

// 1. Correction de generateMetadata (doit être async)
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = articles.find((element) => element.id === parseInt(id));

  return {
    title: article?.title || "Article non trouvé",
    description: article?.description,
  };
}

// 2. Correction du composant (doit être async)
export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  // On attend que les paramètres soient disponibles
  const { id } = await params;
  
  // On cherche l'article
  const article = articles.find((element) => element.id === parseInt(id));

  // Si l'article n'existe pas, on renvoie une page 404
  if (!article) {
     notFound();
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{article.title} le {article.date} par {article.author}</h2>
      <div>{article.description}</div>
    </div>
  );
}