

interface IPersonagem{
    params: {
        id: string;
    }
}

interface IData{
    name: string;
    gender: string;
    status: string;  
    species: string;
    id: string;
}

interface IdataStaticIndex{
    results:{
        id: number;
    }[]
}

const Personagem = async ({params: {id}} : IPersonagem) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {cache: 'no-store'})
    const data: IData = await res.json()

    console.log(data)
    return(
        <div>
            <h1>{data.id}</h1>
            <p>{data.species}</p>
            <p>{data.name}</p>
            <p>{data.gender}</p>
        </div>
    )
}

export default Personagem

export async function generateStaticParams(){
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data: IdataStaticIndex = await res.json()
    
    return data.results.map((item) => ({
        id: item.id.toString()
    }))
}