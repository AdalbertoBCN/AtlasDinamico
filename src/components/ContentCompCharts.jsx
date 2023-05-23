import { getTema, getSerie, getValues, createCompChart } from "@/utils/getAPI";
import { notFound } from "next/navigation";

export default async function ContentCompCharts({ idTema, idSerie, Chart }) {

    try {
        const tema = await getTema(idTema);
        const serie = await getSerie(tema, idSerie);
        const info = await getValues(serie);

        const chartInfo = createCompChart(info,info);

        return (
            <>
                <Chart chartData={chartInfo} />
            </>
        );
    } catch (error) {
        notFound();
    }
}
