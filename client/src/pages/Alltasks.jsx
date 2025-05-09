import React, { useState } from "react";
import Cards from "../components/home/Cards";
import { IoIosAddCircle } from "react-icons/io";
import InputData from "../components/home/InputData";

function Alltasks() {
  const [inputDiv, setInputDiv] = useState("hidden");
  return (
    <>
      <div>
        <button
          className="w-full flex justify-end px-4 py-2"
          onClick={() => setInputDiv("fixed")}
        >
          <IoIosAddCircle className="text-5xl text-gray-300 hover:text-gray-600 hover:cursor-pointer transition-all duration-300" />
        </button>
        <div>
          <Cards home={"true"} inputDiv={inputDiv} setInputDiv={setInputDiv} />
        </div>
      </div>
      <InputData inputDiv={inputDiv} setInputDiv={setInputDiv} />
    </>
  );
}

export default Alltasks;
