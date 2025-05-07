import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

function Cards() {
  const data = [
    {
      title: "The best coding channel",
      desc: " i want to create the best channel for coding where i can explain each and every topic clearly",
    },
    {
      title: "The best sport",
      desc: " i want to create the best channel for coding where i can explain each and every topic clearly",
    },
    {
      title: "Assignment ",
      desc: " i want to create the best channel for coding where i can explain each and every topic clearly abgd absg asbdjh abdsha avbdaga avsagfag da dsjjsd ",
    },
    {
      title: "Project",
      desc: " i want to create the best channel for coding where i can explain each and every topic clearly",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data &&
        data.map((items, i) => (
          <div className="bg-gray-800 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <h1 className="text-xl font-semibold">{items.title}</h1>
              <p className="text-gray-300 my-3">{items.desc}</p>
            </div>
            <div className="mt-4 w-full flex items-center">
              <button className="bg-red-300  w-3/6 rounded p-2">
                Incomplete
              </button>
              <div className="text-white w-3/6  text-2xl flex justify-around font-semibold">
                <button>
                  <FaRegHeart />
                </button>
                <button>
                  <FaEdit />
                </button>
                <button>
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      <div className="bg-gray-800 rounded-xl p-4 flex flex-col justify-center items-center hover:scale-105 hover:cursor-pointer transition-all duration-300">
        <IoIosAddCircle className="text-5xl" />
        <h2 className="text-2xl text-gray-300">Add Tasks</h2>
      </div>
    </div>
  );
}

export default Cards;
