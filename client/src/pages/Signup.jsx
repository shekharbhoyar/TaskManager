import React from "react";

function Signup() {
  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div className=" text-2xl font-semibold">Signup</div>
        <input
          type="username"
          placeholder="Username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          name="password"
        />
        <button className="bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;
