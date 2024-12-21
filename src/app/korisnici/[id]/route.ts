import { korisnici } from "../route";

export async function GET(_request: Request,
    { params }: {params: { id: string} }
) {
    const {id} = await params;
    const korisnik = korisnici.find((korisnik) => korisnik.id === parseInt(id));
    return Response.json(korisnik);
}