import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function loginHandler(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      await axios
        .post(`${import.meta.env.VITE_SERVER_URL}/admin/login`, {
          email,
          password,
        })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="w-[50%] h-[80%]">
      <form
        className="p-10 w-[80%] h-[75%] bg-slate-200 flex flex-col justify-center items-center "
        onSubmit={loginHandler}
      >
        <p className="mb-3">Admin Login</p>
        <div className="w-full h-fit  mb-10 flex justify-center items-center">
          <input
            type="email"
            className="w-[80%] h-8 rounded-md ps-3 border border-gray-600 outline-none"
            placeholder="Enter Email here.."
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="w-full h-fit  mb-10 flex justify-center items-center">
          <input
            type="password"
            className="w-[80%] h-8 rounded-md ps-3 border border-gray-600 outline-none"
            placeholder="Enter password here.."
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="w-full h-fit flex justify-center items-center">
          <button
            type="submit"
            className="w-20 h-10 bg-gray-400 rounded-md hover:bg-gray-500"
          >
            {" "}
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
