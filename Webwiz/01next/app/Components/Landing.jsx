import React from "react";

function Landing() {
  return (
    <div className="h-[90vh] flex justify-center items-center flex-col gap-y-2">
      <h1 className="text-white text-[90px] font-mono font-extrabold">
        Web Wizards 2.0
      </h1>
      <p className="text-white text-[20px] w-[50%] text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis,
        sit. Perspiciatis laudantium totam vel minus iusto reiciendis veritatis
        debitis est.
      </p>
      <button className="bg-black text-md text-white px-5 py-2 rounded-md">
        Login
      </button>
    </div>
  );
}

export default Landing;
