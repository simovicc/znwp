"use client"
import { useState } from "react";

export const Brojac = () => {
    console.log("Brojacka komponenta");
    const [brojac, setCount] = useState(0);

    return  (
        <button onClick={() => setCount(brojac + 1)}>Kliknuo {brojac} puta.</button>
    )
}