import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import FormSubmitButton from "./FormSubmitButton";


async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

   redirect("/auth/product");
}

const AddproductForm = () => {
  return (
    <form action={addProduct}>
      <div className="mb-5">
        Product Name
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="Tyeso SSO1"
          className="mt-1 input input-bordered  bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-accent block w-full p-2.5"
        />
      </div>

      <div className="mb-5">
        Description
        <textarea
          required
          name="description"
          id="description"
          placeholder="coffee cup"
          className="mt-1 textarea textarea-bordered  bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-accent block w-full p-2.5"
        />
      </div>

      <div className="mb-5">
        Image URL
        <input
          required
          type="text"
          name="imageUrl"
          id="imageUrl"
          placeholder="https://img0310.son300"
          className="mt-1 input input-bordered  bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-accent block w-full p-2.5"
        />
      </div>

      <div className="mb-5">
        Price
        <input
          required
          type="text"
          name="price"
          id="price"
          placeholder="290"
          className="mt-1 input input-bordered  bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-accent block w-full p-2.5"
        />
        <FormSubmitButton className=" btn-block">Add Product</FormSubmitButton>
      </div>
    </form>
  );
};

export default AddproductForm;
