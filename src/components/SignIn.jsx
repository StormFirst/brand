import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { HiMiniEye, HiEyeSlash } from "react-icons/hi2";
import { auth } from "../api/firebase";

function SignIn({ setIsSignIn }) {
  const defaultData = {
    email: "",
    password: "",
  };
  const [signInData, setSignInData] = useState(defaultData);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = signInData.email;
    const password = signInData.password;
    if (email && password) signInUser(email, password);
  };

  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

  const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
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
          <form className="flex flex-col mt-3" onSubmit={onSubmit}>
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
            <div className="flex justify-between mt-2 font-['Nunito', sans-serif] font-semibold text-[16px]">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <button>Forgot Password</button>
            </div>
            <button
              className="mt-2 py-2 rounded-md bg-black text-white font-['Nunito', sans-serif] font-semibold text-[18px]"
              type="submit"
            >
              Sign In
            </button>
            <button
              className="mt-2 py-2 rounded-md border border-black font-['Nunito', sans-serif] font-semibold text-[18px] flex items-center justify-center gap-3"
              onClick={signInWithGoogle}
            >
              <FcGoogle size="22px" />
              <span>Sign In With Google</span>
            </button>
          </form>
          <p
            className="mt-32 text-center text-slate-500 font-['Nunito', sans-serif] font-semibold text-[18px] hover:underline cursor-pointer"
            onClick={() => setIsSignIn(false)}
          >
            Don't have an account ? <span className="text-black">Sign Up</span>
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

export default SignIn;
