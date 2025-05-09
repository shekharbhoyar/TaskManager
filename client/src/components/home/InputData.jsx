import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

function InputData({ inputDiv, setInputDiv }) {
  return (
    <>
      <div
        className={`${inputDiv} top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}
      ></div>
      <div
        className={`${inputDiv} top-0 left-0 flex flex-col items-center  justify-center  h-screen w-full`}
      >
        <div
          className=""
          onClick={() => {
            setInputDiv("hidden");
          }}
        >
          <RxCrossCircled className="text-4xl hover:cursor-pointer" />
        </div>
        <div className=" w-2/6 bg-gray-900 p-4 rounded">
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-3 py-2 rounded w-full  bg-gray-700"
          ></input>
          <textarea
            name="desc"
            cols="30"
            rows="10"
            placeholder="Description..."
            className="px-3 py-2 rounded w-full bg-gray-700 my-3"
          ></textarea>
          <button className="px-3 py-2 bg-blue-500 rounded-xl text-black text-xl font-semibold">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default InputData;
