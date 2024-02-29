import React, { Component, useState } from "react";
import { getStock } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { DeleteButton, EditButton } from "@/app/component/buttons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const UpdatestockForm = async () => {
  const session = await getServerSession(authOptions);
  const stock = await getStock();

  if (session?.user) {
  return (
    <div className="text-center justify-center">
      <h1
        className="m-8 text-5xl font-bold "
        style={{ fontSize: "50px", textTransform: "uppercase" }}
      >
        Update Product STOCK
      </h1>
      <div className="tooltip mb-5" data-tip="Create">
        <a href="/auth/create">
          <button className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </a>
      </div>

      <div>
        <table className=" w-full text-sm text-center text-gray-500">
          <thead className=" text-sm  uppercase">
            <tr>
              <th
                className="px-10 py-6 font-medium text-sm"
                style={{ backgroundColor: "#D04848", color: "white" }}
              >
                {" "}
                #{" "}
              </th>
              <th
                className="px-10 py-6 font-medium text-sm"
                style={{ backgroundColor: "#618264", color: "white" }}
              >
                {" "}
                Product Name{" "}
              </th>
              <th
                className="px-10 py-6 font-medium text-sm"
                style={{ backgroundColor: "#FBA834", color: "white" }}
              >
                {" "}
                Price{" "}
              </th>
              <th
                className="px-10 py-6 font-medium text-sm"
                style={{ backgroundColor: "#FF5B22", color: "white" }}
              >
                {" "}
                Remain{" "}
              </th>
              <th
                className="px-10 py-6font-medium text-sm"
                style={{ backgroundColor: "#6895D2", color: "white" }}
              >
                {" "}
                Created At{" "}
              </th>
              <th
                className="px-10 py-6 font-medium text-sm"
                style={{ backgroundColor: "#22A699", color: "white" }}
              >
                {" "}
                Actions{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {stock.map((stock, index) => (
              <tr key={stock.id} className="bg-white border-b">
                <td className="px-3 py-6 font-medium text-gray-700 text-sm">
                  {index + 1}
                </td>
                <td className="px-3 py-6 font-medium text-gray-700 text-sm">
                  {stock.productname}
                </td>
                <td className="px-3 py-6 font-medium text-gray-700 text-sm">
                  {stock.price}
                </td>
                <td className="px-3 py-6 font-medium text-gray-700 text-sm">
                  {stock.remain}
                </td>
                <td className="px-3 py-6 font-medium text-gray-700 text-sm">
                  {formatDate(stock.createdAt.toString())}
                </td>
                <td className="px-3 py-6 font-medium text-gray-700 text-sm flex justify-center">
                  <EditButton id={stock.id} />
                  <DeleteButton id={stock.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
return <h2 className="text-center">Please login to see this admin page</h2>;
};
export default UpdatestockForm;
