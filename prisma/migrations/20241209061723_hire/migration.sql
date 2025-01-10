/*
  Warnings:

  - You are about to drop the column `DateEnd` on the `Hire` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Hire` table. All the data in the column will be lost.
  - Added the required column `endProject` to the `Hire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startProject` to the `Hire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hire" DROP COLUMN "DateEnd",
DROP COLUMN "startDate",
ADD COLUMN     "endProject" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startProject" TIMESTAMP(3) NOT NULL;
