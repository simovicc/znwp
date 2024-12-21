export const korisnici = [
    {id: 1, ime: "Stefan Simovic"},
    {id: 2, ime: "Nenad Simovic"},
    {id: 3, ime: "Dusan Simovic"},
    {id: 4, ime: "Nevena Simovic"},
    {id: 5, ime: "Aleksandar Simovic"},
]

export async function GET() {
    return Response.json(korisnici)
}

export async function POST(request: Request) {
    const korisnik = await request.json();

    const noviKorisnik = {
        id: korisnici.length + 1,
        ime: korisnik.ime,
    }

    korisnici.push(noviKorisnik);

    return new Response(JSON.stringify(noviKorisnik), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201,
    })
}