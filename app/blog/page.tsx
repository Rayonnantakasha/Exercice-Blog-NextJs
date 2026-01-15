import Link from "next/link";
import { articles } from "../data";
import { Metadata } from "next";

 export const metadata : Metadata = {
    title : "Rn Akasha - Le blog",
    description : "Bienvenue dans mon blog"
}

// Export par défaut du composant BlogPage
export default function BlogPage() {
  return (
    <>
      {articles.map((article) => {
        const link = `blog/${article.id}` // Création du lien dynamique vers la page de l’article
        return (
          <div 
            key={article.id} // Clé unique requise par React
            className="p-4"  
          >
            <h2>
              {article.title} le {article.date} par {article.author}
            </h2>

            {/* Lien Next.js vers l’article */}
            <Link 
              href={link} 
              className="text-red-300" // Couleur du texte
            >
              voir l&apos;article
            </Link>
          </div>
        )
      })}
    </>
  )
}
