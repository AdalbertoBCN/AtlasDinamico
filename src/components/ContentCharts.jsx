import { getTema, getSerie, getValues, createChart } from "@/utils/getAPI";
import { notFound } from "next/navigation";

export default async function ContentCharts({ idTema, idSerie, Chart }) {
    try {
        const tema = await getTema(idTema);
        const serie = await getSerie(tema, idSerie);
        const info = await getValues(serie);
        const chartInfo = createChart(info);
        
        return (
            <>
                <Chart chartData={chartInfo} />
            </>
        );
    } catch (error) {
        notFound();
    }
}
