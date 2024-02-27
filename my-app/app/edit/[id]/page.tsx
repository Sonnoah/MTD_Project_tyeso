
import UpdateForm from "@/app/component/editForm";
import { getStockById } from "@/lib/data";
import { notFound } from "next/navigation";

const UpdateStock = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const stock = await getStockById(id);

  if (!stock) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Update Stock</h1>
      <UpdateForm stock={stock}/>
    </div>
  );
};

export default UpdateStock;