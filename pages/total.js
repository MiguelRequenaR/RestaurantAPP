import Layout from "@/layout/Layout"
import { useEffect, useCallback } from "react";
import useRest from "@/hooks/useRest";

export default function Total() {

    const { pedido } = useRest();

    const comprobarPedido = useCallback(() => {
        return (pedido.length === 0);
    }, [pedido]);

    useEffect(() => {
        comprobarPedido();
    }
    , [pedido, comprobarPedido]);

    const colocarorden = (e) => {
        e.preventDefault();
        console.log("colocar orden")
    }

    return (
        <Layout pagina="Total y Confirmar Pedido">
            <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
            <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

            <form
                onSubmit={colocarorden}
            >
                <div>
                    <label 
                        htmlFor="nombre"
                        className="block uppercase text-slate-800 font-bold text-xl"
                    >
                        Nombre
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                    />
                </div>
                <div className="mt-10">
                    <p className="text-2xl">
                        Total a pagar: {` `} <span className="font-bold"></span>
                    </p>
                </div>
                <div className="mt-5">
                    <input
                        type="submit"
                        className={`${comprobarPedido() ? "bg-amber-100" : "bg-amber-600 hover:bg-amber-800"} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center cursor-pointer`}
                        value="Confirmar Pedido"
                        disabled={comprobarPedido()}
                    />
                </div>
            </form>
        </Layout>
    )
}