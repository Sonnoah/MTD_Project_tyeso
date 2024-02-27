import { prisma } from "@/lib/prisma";

const ITEMS_PER_PAGE = 5;

export const getStock = async () => {
  try {
    const stock = await prisma.stock.findMany();
    return stock;
  } catch (error) {
    throw new Error("Failed to fetch stock data");
  }
};

export const getStockById = async (id: string) => {
  try {
    const stock = await prisma.stock.findUnique({
      where: { id },
    });
    return stock;
  } catch (error) {
    throw new Error("Failed to fetch stock data");
  }
};
