"use client";

import { updateStock } from "@/lib/actions";
import { useFormState } from "react-dom";
import React from "react";
import { SubmitButton } from "./buttons";
import type { Stock } from "@prisma/client";

  const UpdateForm = ({ stock }: { stock: Stock }) => {
  const UpdateStockWithId = updateStock.bind(null, stock.id)
  const [state, formAction] = useFormState(UpdateStockWithId, null);

  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          Product Name
          <input
            type="text"
            name="productname"
            id="productname"
            placeholder="Tyeso!"
            className="input input-bordered   bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-info block w-full p-2.5"
            defaultValue={stock.productname}
          />
          <div id="productname-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state?.Error?.productname}
            </p>
          </div>
        </div>

        <div className="mb-5 ">
          Price
          <input
            type="text"
            name="price"
            id="price"
            placeholder="290"
            className="input input-bordered   bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-info block w-full p-2.5"
            defaultValue={stock.price}
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.price}</p>
          </div>
        </div>

        <div className="mb-5">
          Remain
          <input
            type="text"
            name="remain"
            id="remain"
            placeholder="10"
            className="input input-bordered   bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-info block w-full p-2.5"
            defaultValue={stock.remain}
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.price}</p>
          </div>
        </div>

        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>
        <SubmitButton label="update" />
      </form>
    </div>
  );
};

export default UpdateForm;
