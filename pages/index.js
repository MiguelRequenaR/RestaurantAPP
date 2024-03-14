import Layout from "@/layout/Layout";
import useRest from "@/hooks/useRest";

export default function Home() {

  const { categoriaActual } = useRest();

  return (
    <Layout pagina={`Menú ${categoriaActual.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual.nombre}</h1>
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
