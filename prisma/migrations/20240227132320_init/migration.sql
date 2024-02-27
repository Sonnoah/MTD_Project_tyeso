-- CreateTable
CREATE TABLE "Stock" (
    "id" TEXT NOT NULL,
    "productname" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "remain" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);
