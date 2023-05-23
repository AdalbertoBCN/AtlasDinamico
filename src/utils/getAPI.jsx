const getAllTemas = async (id) => {
    const temas = await fetch("https://ipea.gov.br/atlasviolencia/api/v1/temas", {
        cache: "force-cache",
    }).then((data) => data.json());

    return temas;
}

const getAllSeries = async (temas) => {

    const seriesPromises = temas.map(async (tema) => {
        const serie = await fetch(
            `https://ipea.gov.br/atlasviolencia/api/v1/series/${tema.id}`,
            {
                cache: "force-cache",
            }
        ).then(data => data.json());

        const modifiedSerie = serie.map(item => {
            const modifiedTitle = item.titulo.replace("Faixa Etária de", "de");

            return { titulo: modifiedTitle, id: item.id }
        })

        return { title: tema.titulo, id: tema.id, series: modifiedSerie }
    })

    const series = await Promise.all(seriesPromises);

    return series.filter(item => item.series.length > 0);
}

const getTema = async (id) => {

    const temas = await fetch("https://ipea.gov.br/atlasviolencia/api/v1/temas", {
        cache: "force-cache",
    }).then((data) => data.json());

    return temas.find(item => item.id == id);
}

const getSerie = async (tema, id) => {
    const response = await fetch(
        `https://ipea.gov.br/atlasviolencia/api/v1/series/${tema.id}`,
        {
            cache: "force-cache",
        }
    ).then(data => data.json());

    return response.find(item => item.id == id);
}


const getValues = async (serie) => {
    const response = await fetch(
        `https://ipea.gov.br/atlasviolencia/api/v1/valores-series/${serie.id}/1`,
        {
            cache: "force-cache",
        }
    );
    const info = await response.json();

    return { title: serie.titulo, values: info };
};

const createChart = (info) => {
    return {
        labels: info.values.map((data) => data.periodo.substring(0, 4)),
        datasets: [
            {
                label: info.title,
                data: info.values.map((data) => data.valor),
                borderColor: 'rgb(195, 111, 214)',
                backgroundColor: 'rgb(195, 111, 214)'
            },
        ],
    };
}

const createCompChart = (info, info2) => {
    return {
        labels: info.values.map((data) => data.periodo.substring(0, 4)),
        datasets: [
            {
                label: info.title,
                data: info.values.map((data) => data.valor),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: info2.title,
                data: info2.values.map((data) => data.valor),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
}

export { getAllTemas, getAllSeries, getTema, getSerie, getValues, createChart, createCompChart }

