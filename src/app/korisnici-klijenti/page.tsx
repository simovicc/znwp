"use client"
import { useEffect, useState } from "react"

type Korisnik = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
}

export default function KorisniciKlijenti() {
    const [korisnici, setUsers] = useState<Korisnik[]>([]);
    const [ucitavanje,  setLoading] = useState(true);
    const [greska, setError] = useState("");

    useEffect(() => {
        async function dohvatiKorisnike() {
            try {
                const odgovorServera = await fetch("https://jsonplaceholder.typicode.com/users");
                
                if (!odgovorServera.ok) throw new Error ("Korisnik nije u bazi");
                const podaci = await odgovorServera.json();
                setUsers(podaci);  

            } catch (error) {
                setError("Korisnik nije u bazi.");
                if (error instanceof Error) {
                    setError(`Korisnici $(error.message) nisu u bazi.`);
                }
            } finally {
                setLoading(false);
            }
        }

        dohvatiKorisnike();
    }, []);

    if (ucitavanje) return <div>Ucitavanje ...</div>
    if (greska) return <div>{greska}</div>

    return (
        <ul className="space-y-7 p-2">
            {korisnici.map((korisnik) => (
                <li
                    key={korisnik.id}
                    className="p-3 bg-stone-200 shadow-md rounded-lg text-gray-700">
                    
                    {korisnik.name} ({korisnik.email})
                </li>
            ))}

        </ul>
    )
}