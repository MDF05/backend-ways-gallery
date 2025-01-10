-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "hiredId" INTEGER;

-- CreateTable
CREATE TABLE "Hire" (
    "id" SERIAL NOT NULL,
    "hiringId" INTEGER NOT NULL,
    "hiredId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "DateEnd" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Hire_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hire" ADD CONSTRAINT "Hire_hiringId_fkey" FOREIGN KEY ("hiringId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hire" ADD CONSTRAINT "Hire_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
