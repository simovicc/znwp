"use client"
import { useRouter } from "next/navigation"

export default function About() {

    const router = useRouter();

    return (
        <div>
            <h1>Trenutno se nalazite na About stranici.</h1>
            <button
                onClick={() => router.push('/')}
                className="bg-orange-500 text-white p-3 rounded-lg">
                Idi na pocetnu
            </button>
        </div>
    )
}