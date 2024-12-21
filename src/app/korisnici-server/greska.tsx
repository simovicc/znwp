"use client"

import { useEffect } from "react"

export default function Greska({greska} : {greska: Error}) {
    
    useEffect(() => {
        console.log(greska);
    }, [greska]);

    return (
        <div className="flex items-center justify-centar h-screen">
            <div className="text-xl text-purple-800">Greska u dohvatanju korisnika.</div>
        </div>
    )
}