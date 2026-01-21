'use client'
import { useRouter } from "next/navigation"


export default function ContactPage () {
    const router = useRouter()
    const handleSendContactForm = () =>{
        console.log("Formulaire envoyé")
     router.push("/blog")
    }
    return (
        <>
        <h1>Contactez-nous</h1>
        <button onClick={handleSendContactForm}>Valider le formulaire</button>
        </> 
    )
}