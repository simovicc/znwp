type Korisnik = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
}

export default async function serverskiKorisnici() {
    const odgovor = await fetch("https://jsonplaceholder.typicode.com/users");
    const korisnici = await odgovor.json();

    return (
        <ul className="space-y-7 p-2">
            {korisnici.map((korisnik: Korisnik) => (
                <li
                    key={korisnik.id}
                    className="p-3 bg-stone-200 shadow-md rounded-lg text-gray-700">
                    
                    {korisnik.name} ({korisnik.email})
                </li>
            ))}

        </ul>
    )
}