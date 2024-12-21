export default async function Proizvod({ params }: { params: { id : string } }) {
   
    const {id} = await params;
    return <h1>Proizvod: {id}</h1>
}