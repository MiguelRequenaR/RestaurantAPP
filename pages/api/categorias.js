import { PrismaClient } from "@prisma/client";

//otra manera de consultar la base de datos con prisma
//el uso de la api se realiza cuando quieras tener información en el state
export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const categorias = await prisma.categoria.findMany();
  res.status(200).json(categorias);
}
