
export default function Home() {
  return <h1>Next JS</h1>;
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
