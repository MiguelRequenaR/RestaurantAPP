import { categorias } from "./data/categorias";
import { productos } from "./data/productos";
//se importa prismaclient para poder hacer las operaciones de base de datos
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () : Promise<void> => {
    try{
        //se crea la categoria y el producto
        //se usa el metodo createMany para crear multiples registros
        await prisma.categoria.createMany({
            data: categorias,
        });
        await prisma.producto.createMany({
            data: productos,
        });
    }
    catch(error){
        console.error(error);
    }
}

main()