import Image from "next/image";
import useRest from "@/hooks/useRest";

const Categoria = ({categoria}) => {

    const { categoriaActual, handleClickCategoria } = useRest();

    const { nombre, icono, id } = categoria;

    return (
        <div 
            className={`
                ${categoriaActual?.id === id ? "bg-amber-400":""}
            flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
        >
            <Image
                src={`/assets/img/icono_${icono}.svg`}
                alt="Imagen categoria"
                width={70}
                height={70}

            />
            <button
                type="button"
                className="text-2xl font-bold hover:cursor-pointer"
                onClick={() => handleClickCategoria(id)}
            >
                {nombre}
            </button>
        </div>
    )
}

export default Categoria