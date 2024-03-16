import Layout from "@/layout/Layout"
import useRest from "@/hooks/useRest"
import ResumenProducto from "@/components/ResumenProducto";

export default function Resumen() {

    const { pedido } = useRest();

    return (
        <Layout pagina="Resumen">
            <h1 className="text-4xl font-black">Resumen</h1>
            <p className="text-2xl my-10">Revisa los productos de tu pedido</p>
            {pedido.length === 0 ? (
                <p className="text-center text-2xl">
                    No hay productos
                </p>
            ) : (
                pedido.map((producto) => (
                    <ResumenProducto 
                        key={producto.id}
                        producto={producto}
                    />
                ))
            )}
        </Layout>
    )
}