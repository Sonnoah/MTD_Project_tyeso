import { getStock } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export const StockForm = async () => {
  const stock = await getStock();

  return (
    <div className="text-center justify-center">
      <h1
        className="m-8 text-5xl font-bold "
        style={{ fontSize: "50px", textTransform: "uppercase" }}
      >
        Product STOCK
      </h1>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
    
  
};

export default StockForm;
