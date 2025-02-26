import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

const Login = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-15">
        <div className="md:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1613252036716-e1efc9788e5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="object-cover w-full lg:h-screen"
          />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <h3 className="font-medium text-3xl font-display">3legant.</h3>
          </div>
        </div>

        <div className="md:w-1/2 w-full flex flex-col  justify-center p-6">
          <h3 className="text-xl font-display font-medium ">Sign Up</h3>
          <p className="text-[#6C7275] mb-4 mt-3">
            Already have an account?{" "}
            <span className="text-[#38CB89] font-display font-bold">
              Sign in
            </span>
          </p>

          <div className="w-full max-w-sm">
            <form action="" className="space-y-4">
              <Input
                placeholder="Your name"
                className="w-full py-5 border-0 border-b border-[#E8ECEF] rounded-lg"
              />
              <Input
                placeholder="User Name"
                className="w-full py-5 border-0 border-b border-[#E8ECEF] rounded-lg"
              />
              <Input
                placeholder="Email"
                className="w-full py-5 border-0 border-b border-[#E8ECEF] rounded-lg"
              />
              <Input
                placeholder="Password"
                type="password"
                className="w-full py-5 border-0 border-b border-[#E8ECEF] rounded-lg"
              />
              <div className="flex items-center space-x-2 py-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm text-[#6C7275]">
                  I agree with{" "}
                  <a className="text-[#141718] font-bold">Privacy Policy </a>
                  and{" "}
                  <a href="" className="text-[#141718] font-bold">
                    Terms of Use
                  </a>
                </label>
              </div>
              <div className="">
                <Button className="w-full bg-black text-white py-5 rounded-lg hover:bg-gray-800">
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
