import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import PriceTag from "@/app/component/PriceTag";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) {
    notFound();
  }

  return (
    <div className=" flex m-20 flex-col items-center justify-center ">
      <div className="flex lg:item-center ">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          className=" rounded-lg mr-10 "
          priority
        />

        <div>
          <h1
            className="text-5x1 font-bold"
            style={{ fontSize: "30px", textTransform: "uppercase" }}
          >
            {product.name}
          </h1>
          <PriceTag price={product.price} className="mt-4 " />
          <p className="py-6">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
