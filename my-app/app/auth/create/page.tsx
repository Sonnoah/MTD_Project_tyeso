import CreateForm from "@/app/component/createForm";
import React from "react";

const CreatePage = () => {
  return (
    <section>
      <div className="text-center">
        <h1
          className="m-8 text-5xl font-bold"
          style={{ fontSize: "50px", textTransform: "uppercase" }}
        >
          CREATE
        </h1>
      </div>
      <div className=" justify-center max-w-md mx-auto mt-5">
        <CreateForm />
      </div>
    </section>
  );
};

export default CreatePage;
