import ProductFrom from "@/app/component/ProductFrom";
import React from "react";

const page = () => {
  return (
    <div >
      <h1
        className="m-8 text-5xl font-bold text-center "
        style={{ fontSize: "50px", textTransform: "uppercase" }}
      >
        Product
      </h1>
    <div >
      <ProductFrom /> </div>
    </div>
  );
};

export default page;
