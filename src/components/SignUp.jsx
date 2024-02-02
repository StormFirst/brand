import React, { useState } from "react";
import { HiMiniEye, HiEyeSlash } from "react-icons/hi2";

function SignUp({ setIsSignIn }) {
  const defaultData = {
    name: "",
    email: "",
    password: "",
  };
  const [signUpData, setSignUpData] = useState(defaultData);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };


  return (
    <div className="flex h-full">
      <div className="w-2/4 flex flex-col items-center justify-center">
        <div className="w-max-[00px]">
          <h1 className="font-['Nunito', sans-serif] font-semibold text-[32px] text-center">
            Welcome Back
          </h1>
          <p className="font-['Nunito', sans-serif] font-semibold text-[18px] mt-4 text-slate-500 text-center">
            The Faster You Fill Up The Faster You Enjoying!
          </p>
          <form className="flex flex-col mt-3">
            <label className="flex flex-col font-['Nunito', sans-serif] font-semibold text-[18px]">
              <span>Name</span>
              <input
                type="text"
                className="mt-2 border rounded-md p-1"
                name="name"
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col font-['Nunito', sans-serif] font-semibold text-[18px]">
              <span>Email</span>
              <input
                type="email"
                className="mt-2 border rounded-md p-1"
                name="email"
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col font-['Nunito', sans-serif] font-semibold text-[18px]">
              <span>Password</span>
              <div className="flex items-center mt-2 gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  className="border w-full rounded-md p-1"
                  name="password"
                  onChange={handleChange}
                />
                {showPassword ? (
                  <HiMiniEye
                    className="cursor-pointer text-[20px]"
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                ) : (
                  <HiEyeSlash
                    className="cursor-pointer text-[20px]"
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                )}
              </div>
            </label>
            <button
              className="mt-2 py-2 rounded-md bg-black text-white font-['Nunito', sans-serif] font-semibold text-[18px]"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <p
            className="mt-32 text-center text-slate-500 font-['Nunito', sans-serif] font-semibold text-[18px] hover:underline cursor-pointer"
            onClick={() => setIsSignIn(true)}
          >
            Already have an account ?{" "}
            <span className="text-black">Sign In</span>
          </p>
        </div>
      </div>
      <div className="right-side w-2/4 rounded-tl-3xl rounded-bl-3xl p-20 flex items-end">
        <h1 className="text-white text-6xl">
          Discover <br />
          By Just Joining !
        </h1>
      </div>
    </div>
  );
}

export default SignUp;
