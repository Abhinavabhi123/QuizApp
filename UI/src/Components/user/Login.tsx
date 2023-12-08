import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()
  const [userLogin, setUserLogin] = useState<string>("login");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  function HandleClick(state: string) {
    state === "login" ? setUserLogin("login") : setUserLogin("register");
  }

  async function loginFormSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (userLogin === "login") {
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_SERVER_URL}/login`,
            { email, password },
            { withCredentials: true }
          );
          if(response.data.status===200){
            navigate("/home")
          }
        } catch (error) {
          console.error("Error making API call:", error);
        }
      }
      console.log(userLogin);

      if (userLogin === "register") {
        console.log("register");

        await axios
          .post(`${import.meta.env.VITE_SERVER_URL}/register`, {
            email,
            password,
          })
          .then((response) => {
            if (response.data === "success") {
              setUserLogin("login");
            }
          });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-[50%] h-[70%] bg-white rounded-md flex flex-col justify-center items-center">
      {userLogin === "login" ? (
        <form
          className="p-10 w-[80%] h-[75%] flex justify-center items-center flex-col bg-slate-200 rounded-md"
          onSubmit={loginFormSubmission}
        >
          <p className="mb-4">User Login</p>
          <div className="w-full h-fit  mb-10 flex justify-center items-center">
            <input
              type="email"
              className="w-[80%] h-8 rounded-md ps-3 border border-gray-600 outline-none"
              placeholder="Enter Email here.."
              required
              onChange={(e) => setEmail(e.target.value)}
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
              className="w-20 h-10 bg-gray-400 rounded-md  hover:bg-gray-500"
            >
              {" "}
              Login
            </button>
          </div>
          <div className="w-full h-fit flex justify-center items-center cursor-pointer">
            <p
              className="text-sm mt-10 text-blue-400"
              onClick={() => HandleClick("register")}
            >
              Create new account
            </p>
          </div>
        </form>
      ) : (
        <form
          className="p-10 w-[80%] h-[75%] bg-slate-200 flex justify-center items-center flex-col"
          onSubmit={loginFormSubmission}
        >
          <p className="mb-4">User Register</p>
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
              Register
            </button>
          </div>
          <div className="w-full h-fit flex justify-center items-center">
            <p
              className="text-sm mt-10 cursor-pointer text-blue-400"
              onClick={() => HandleClick("login")}
            >
              Have an account
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
