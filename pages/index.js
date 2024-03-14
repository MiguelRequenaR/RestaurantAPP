import Layout from "@/layout/Layout";
import useRest from "@/hooks/useRest";
import Producto from "@/components/Producto";

export default function Home() {

  const { categoriaActual } = useRest();

  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
        <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
        <p className="text-2xl my-10">
            Elige y personaliza tu pedido
        </p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">  
          {categoriaActual?.productos?.map((producto) => (
              <Producto 
                  key={producto.id}
                  producto={producto}
              />
          ))}
        </div>
    </Layout>
  );
}

//Consulta a la base de datos
//usa serversideprops cuando en el componente categorias se quiera mostrar los resultados
// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient();
//   const categorias = await prisma.categoria.findMany();
//   return {
//     props: {
//       categorias,
//     },
//   };
// };
