import AddproductForm from "@/app/component/AddproductForm";


const page = () => {
  return (
    <div className="justify-center max-w-md mx-auto mt-5">
    <h1
      className="m-8 text-5xl font-bold "
      style={{ fontSize: "50px", textTransform: "uppercase" }}
    >
      Add Product 
    </h1>
        <AddproductForm />
      </div>
  );
};

export default page;
