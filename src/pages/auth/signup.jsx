import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";
import AuthLayout from "@/components/layouts/AuthLayout/AuthLayout";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <AuthLayout title="Sign up">
      <div className="flex flex-col gap-4">
        {/* name input */}
        <div className="flex gap-2 pl-5 bg-white group rounded-3xl hover:ring-2 active:ring-2 ring-blue-300">
          <MdOutlinePersonOutline className="w-10 h-auto pl-2 text-gray-600" />
          <input
            type="email"
            className="w-full px-2 py-4 text-gray-600 bg-white outline-none rounded-3xl"
            placeholder="Enter your name"
            size="lg"
          />
        </div>
        {/* company name input */}
        <div className="flex gap-2 pl-5 bg-white group rounded-3xl hover:ring-2 active:ring-2 ring-blue-300">
          <HiOutlineBuildingOffice2 className="w-10 h-auto pl-2 text-gray-600" />
          <input
            type="text"
            className="w-full px-2 py-4 text-gray-600 bg-white outline-none rounded-3xl"
            placeholder="Enter your company name"
            size="lg"
          />
        </div>
        {/* email input */}
        <div className="flex gap-2 pl-5 bg-white group rounded-3xl hover:ring-2 active:ring-2 ring-blue-300">
          <MdOutlineEmail className="w-10 h-auto pl-2 text-gray-600" />
          <input
            type="email"
            className="w-full px-2 py-4 text-gray-600 bg-white outline-none rounded-3xl"
            placeholder="Enter your email"
            size="lg"
          />
        </div>

        {/*password input */}
        <div className="flex gap-2 pl-5 pr-5 bg-white group rounded-3xl hover:ring-2 active:ring-2 ring-blue-300">
          <input
            type={showPassword ? "text" : "password"}
            className="bg-white text-gray-600 w-full rounded-3xl py-4 px-[52px] outline-none"
            placeholder="Enter your password"
            size="lg"
          />
          {showPassword ? (
            <AiOutlineEye
              className="w-10 h-auto pr-3 text-gray-600 cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="w-10 h-auto pr-3 text-gray-600 cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button className="flex items-center justify-center w-full py-3 text-lg font-semibold rounded-full shadow-sm bg-primary shadow-black hover:brightness-95">
          Sign in
        </button>
        <fieldset className="border-t border-black">
          <legend className="px-4 mx-auto text-lg text-black">or</legend>
        </fieldset>
        <button className="flex items-center justify-center w-full py-3 text-lg font-semibold rounded-full shadow-sm bg-primary shadow-black hover:brightness-95">
          Sign in with &nbsp; <FcGoogle className="w-6 h-auto" />
        </button>
      </div>
    </AuthLayout>
  );
};

export default Signup;
