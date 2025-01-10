/*
  Warnings:

  - You are about to drop the column `userId` on the `Hire` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Hire" DROP CONSTRAINT "Hire_userId_fkey";

-- AlterTable
ALTER TABLE "Hire" DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "Hire" ADD CONSTRAINT "Hire_hiredId_fkey" FOREIGN KEY ("hiredId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
