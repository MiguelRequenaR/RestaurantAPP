import Image from "next/image"
import useRest from "@/hooks/useRest"
import { formatearDinero } from "@/helpers"
import { useState, useEffect } from "react"

const ModalProducto = () => {

    const { producto, handleChangeModal, handleAgregarPedido, pedido } = useRest();
    const [cantidad, setCantidad] = useState(1);
    const [edicion, setEdicion] = useState(false);

    //Comprobar si el modal actual esta en el pedido
    useEffect(() => {
        if(pedido.some((pedidoState) => pedidoState.id === producto.id)) {
            const productoEdicion = pedido.find(pedidoState => pedidoState.id === producto.id);
            setEdicion(true);
            setCantidad(productoEdicion.cantidad)
        }else{
            setEdicion(false);
        }
    }, [producto, pedido])

    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <Image
                    src={`/assets/img/${producto.imagen}.jpg`}
                    alt={`Imagen producto ${producto.nombre}`}
                    width={300}
                    height={400}
                />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end text-amber-500">
                    <button
                        onClick={() => handleChangeModal()}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-8 h-8"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                            />
                        </svg>
                    </button>
                </div>
                <h1 className="text-3xl font-bold mt-5">
                    {producto.nombre}
                </h1>
                <p className="mt-5 font-black text-5xl text-amber-500">
                    {formatearDinero(producto.precio)}
                </p>
                <div className="flex gap-4 mt-5">
                    <button
                        type="button"
                        onClick={() => {
                            if(cantidad <= 1) return;
                            setCantidad(cantidad - 1)
                        }}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-7 h-7"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                            />
                        </svg>
                    </button>
                    <p className="text-3xl font-bold">
                        {cantidad}
                    </p>
                    <button
                        type="button"
                        onClick={() => {
                            if(cantidad >= 5) return; 
                            setCantidad(cantidad + 1);
                        }}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none"     
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor"     
                            className="w-7 h-7"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                            />
                        </svg>
                    </button>
                </div>
                <button
                    type="button"
                    className="
                    bg-amber-600 hover:bg-amber-800 text-white 
                    mt-5 py-2 px-5 uppercase font-bold rounded-lg"
                    onClick={() => handleAgregarPedido({...producto, cantidad})}
                >
                    {edicion ? 'Guardar cambios' : 'Agregar al pedido'}
                </button>
            </div>
        </div>
    )
}

export default ModalProducto