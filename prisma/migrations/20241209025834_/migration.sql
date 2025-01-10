/*
  Warnings:

  - You are about to drop the `ImageProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ImageProduct" DROP CONSTRAINT "ImageProduct_projectId_fkey";

-- DropTable
DROP TABLE "ImageProduct";

-- CreateTable
CREATE TABLE "ImageProject" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "projectId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ImageProject_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImageProject" ADD CONSTRAINT "ImageProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
