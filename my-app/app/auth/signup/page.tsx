import SignUpForm from "@/app/component/SignUpForm";

const page = () => {
  return (
    <div className='justify-center m-10 max-w-2xl mx-auto '>
      <div className='border border-gray-300 rounded-lg p-8'>
        <h1 className="text-5xl mt-5 mb-10 font-semibold text-center text-info " style={{ fontSize: "60px", textTransform: "uppercase"}}>
          Register
        </h1>
        
        <div className='w-full'>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default page;
