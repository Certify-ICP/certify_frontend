import React from "react";
import Nav from "./navbar";
import Footer from "./footer";

function Org() {
  return (
    <div className="absolute flex flex-row-reverse w-screen inset-0 font-['Rubik'] bg-white">
      <div className=" flex justify-center items-center w-[700px] bg-[#012a4a]">
        <form action="" className=" bg-[#012a4a] h-[400px] flex flex-col justify-center items-center ">
          <h3 className="text-white text-[30px] ">Login</h3>
          <input
            type="email"
            className=" w-[400px] h-[40px] m-3 rounded-lg p-2  "
            placeholder="Email"
            required
          />
          <input
            type="password"
            className=" w-[400px] h-[40px] m-3 rounded-lg p-2  "
            placeholder="Password"
            required 
          />
          <input
            type="submit"
            value="Submit"
            className=" bg-white h-[40px] text-[#012a4a] w-[300px] rounded-lg my-8 "
          />
        </form>
      </div>
    </div>
  );
}

export default Org;
