import { prisma } from "@/lib/prisma";
import Image from "next/image";
import ProductCard from "./ProductCard";
import Link from "next/link";

const ProductFrom = async () => {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div>
      <div className="hero rounded-xl bg-base-200 m-10 ">
        <div className="hero-content mb-10 flex-col lg:flex-row ">
          <Image
            src={products[0].imageUrl}
            alt={products[0].name}
            width={400}
            height={800}
            className=" w-full max-w-sm rounded-lg shadow-2x1 mr-10"
            priority
          />
          <div>
            <h1 className="text-5x1 font-bold ">{products[0].name}</h1>
            <p className="py-6 ">{products[0].description}</p>
            <div className="card-actions mt-10 ">
              <Link
                href={"/products/" + products[0].id}
                className="btn btn-warning "
              >
                Check it out
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" ml-20 mr-20 my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
        {products.slice(1).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductFrom;
