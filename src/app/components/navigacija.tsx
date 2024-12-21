"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navigacija = () => {
    
    const putanja = usePathname();
    
    return (
        <nav>
            <Link href="/" className={putanja === "/" ? "font-bold mr-3" : "mr-3 text-stone-300"}>Pocetna</Link>
            <Link href="/about" className={putanja === "/about" ? "font-bold mr-3" : "mr-3 text-stone-300"}>O nama</Link>
            <Link 
                href="/proizvod/Samsung" 
                className={putanja.startsWith("/proizvod/Samsung") ? "font-bold mr-3" : "mr-3 text-stone-300"}>Proizvod
            </Link>
        </nav>
    )
}