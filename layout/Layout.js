import Head from "next/head";
import Sidebar from "@/components/Sidebar";

export default function Layout({children, pagina}) {
    return (
        <>
            <Head>
                <title>
                    Restaurante - {pagina}
                </title>
                <meta name="description" content="Restaurante"/>
            </Head>
            <div className="md:flex">
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                    <Sidebar />
                </aside>
                <main className="md:w-8/12 xl:w-1/4 2xl:w-1/5xl:w-1/4 2xl:w-1/5 ">
                    {children}
                </main>
            </div>
        </>
    )
}
