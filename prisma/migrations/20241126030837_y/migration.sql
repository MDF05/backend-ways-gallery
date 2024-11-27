/*
  Warnings:

  - You are about to drop the column `name` on the `Profile` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Profile_name_key";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "name",
ADD COLUMN     "bestArt" TEXT,
ADD COLUMN     "fullName" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "greeting" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "image" TEXT;
