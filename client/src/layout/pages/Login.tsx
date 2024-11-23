import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SadSmileSVG from "../../assets/svgs/sad.svg?react";
import axios from "axios";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");
  const [, setUserInfo] = useState<any>(null);

  async function handleLogin() {
    try {
      const response = await axios.post("http://192.168.0.225:5174/api/login", {
        email,
        password,
      });
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      setUserInfo(user);
      console.log("User Info:", user);
      navigate("/home");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "An error occurred");
      } else {
        setError("An error occurred");
      }
      console.error("Error:", error.response?.data?.message);
    }
  }

  return (
    <div className="login-container overflow-hidden">
      <div className="sm:bg-[#21a378] bg-[#fff] justify-center h-52 w-screen inline-flex sm:m-0">
        <div className="absolute w-full max-w-[950px] cursor-default z-50">
          <div className="flex left-0 text-white text-xs mt-7">
            <div className="hidden sm:block">
              <SadSmileSVG />
            </div>
            <div className="hidden sm:block mt-2 ml-3">
              <h1>APP</h1>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#fff] w-full max-w-[950px] sm:h-[650px] h-[650px] cursor-default m-28 z-50 p-6 sm:pl-16">
          <div className="flex flex-col  mt-0 text-[#6d6a6a]">
            <div className="block justify-center items-center mt-20">
              <h1 className=" mb-5 text-2xl">Login</h1>
              <form
                className="w-full max-w-[500px]"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label block ">
                    Email Address:
                  </label>
                  <input
                    type="text"
                    className="form-control w-full"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label block">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control w-full px-3 py-2 "
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-red-500 mb-3">{error}</div>
                <button
                  type="submit"
                  className="hidden sm:block btn btn-primary text-[#21a378]"
                >
                  Login
                </button>

                <button
                  type="submit"
                  className="block sm:hidden btn btn-primary border-0 sm:text-[#21a378] text-[#fff] bg-[#21a378] sm:bg-white px-4 py-2 rounded w-full sm:w-auto"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#fff] sm:bg-[#111a21] w-full sm:h-144 h-144"></div>
    </div>
  );
};

export default Login;
