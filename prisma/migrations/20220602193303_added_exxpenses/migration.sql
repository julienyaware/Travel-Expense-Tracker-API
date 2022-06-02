-- CreateTable
CREATE TABLE "Expenses" (
    "id" SERIAL NOT NULL,
    "trip" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,

    CONSTRAINT "Expenses_pkey" PRIMARY KEY ("id")
);
