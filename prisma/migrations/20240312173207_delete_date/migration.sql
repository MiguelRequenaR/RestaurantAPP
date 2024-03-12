/*
  Warnings:

  - You are about to drop the column `createdAt` on the `categoria` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `categoria` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `orden` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `orden` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `producto` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `producto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `categoria` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `orden` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `producto` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;
