/*
  Warnings:

  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Chats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_productId_fkey";

-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_userId_fkey";

-- DropForeignKey
ALTER TABLE "Chats" DROP CONSTRAINT "Chats_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "Chats" DROP CONSTRAINT "Chats_senderId_fkey";

-- DropForeignKey
ALTER TABLE "ImageProduct" DROP CONSTRAINT "ImageProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_productId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_profileId_fkey";

-- DropTable
DROP TABLE "Cart";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Chats";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "Transaction";
