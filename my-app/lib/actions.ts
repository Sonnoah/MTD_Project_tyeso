"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ContactSchema = z.object({
  productname: z.string().min(1),
  price: z.string().min(1),
  remain: z.string().min(1),
});

export const saveContact = async (prevSave: any, formData: FormData) => {
  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.stock.create({
      data: {
        productname: validatedFields.data.productname,
        price: validatedFields.data.price,
        remain: validatedFields.data.remain,
      },
    });
  } catch (error) {
    return { message: "Failed to create " };
  }

  revalidatePath("/auth/stock");
  redirect("/auth/stock");
};

export const updateStock = async (
  id: string,
  prevSave: any,
  formData: FormData
) => {
  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.stock.update({
      data: {
        productname: validatedFields.data.productname,
        price: validatedFields.data.price,
        remain: validatedFields.data.remain,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to update " };
  }

  revalidatePath("/auth/stock");
  redirect("/auth/stock");
};

export const deleteStock = async (id: string) => {
  try {
    await prisma.stock.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete contact" };
  }

  revalidatePath("/auth/stock");
};
