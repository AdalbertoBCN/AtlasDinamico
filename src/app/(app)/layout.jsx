import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import { getAllTemas, getAllSeries } from "@/utils/getAPI";

export default async function RootLayout({ children }) {

  const temas = await getAllTemas();
  
  const series = await getAllSeries(temas);

  return (
    <div className="w-screen h-screen flex">
      <SideBar series={series} />
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col">
          <TopBar/>
          <div className="w-full h-full flex items-center justify-center p-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
