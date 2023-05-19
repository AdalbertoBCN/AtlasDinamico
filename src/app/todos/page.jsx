const getData = async ()=>{
    const temas = await fetch('https://ipea.gov.br/atlasviolencia/api/v1/temas', {
        cache: 'no-store'
    }).then(data => data.json());

    const serie = await fetch(`https://ipea.gov.br/atlasviolencia/api/v1/series/${temas[0].id}`).then(data => data.json());

    const valores = await fetch(`https://ipea.gov.br/atlasviolencia/api/v1/valores-series/${serie[0].id}/1`).then(data => data.json());

    return [{tema: temas[0].titulo, serie: serie[0].titulo, valores}];
    
}

export default async function Todos(){
    const data = await getData();
    console.log(data);
    return (
        <div className="container">
            <ul>
                
            </ul>
        </div>
    )

}