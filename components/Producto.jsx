import Image from "next/image"
import { formatearDinero } from "@/helpers";
import useRest from "@/hooks/useRest";

const Producto = ({producto}) => {

    const { handleSetProducto, handleChangeModal } = useRest();

    const { nombre, imagen, precio } = producto;
    return (
        <div className="border p-3">
            <Image
                src={`/assets/img/${imagen}.jpg`}
                alt={`Imagen platillo ${nombre}`}
                width={400}
                height={500}
            />
            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatearDinero(precio)}
                </p>
            </div>
            <button
                type="button"
                className="bg-amber-600 hover:bg-amber-800 text-white w-full mt-5 p-3 uppercase font-bold rounded-lg"
                onClick={() => {
                    handleChangeModal();
                    handleSetProducto(producto);
                }}
            >
                Agregar
            </button>
        </div>
    )
}

export default Producto