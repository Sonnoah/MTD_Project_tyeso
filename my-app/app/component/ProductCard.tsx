import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;

  return (
    <Link
      href={"/products/" + product.id}
      className=" card w-full bg-base-100  transition-shadow hover:shadow-xl mb-10 "
    >
      <figure>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={800}
          height={400}
          className=" h-48  object-cover "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        {/* <p>{product.description}</p> */}
        {isNew && <div className="badge badge-warning">NEW</div>}
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
}
