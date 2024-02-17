import React from "react";
import ShopImage from '../../Assets/Images/shopping_bags.png'
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="">
      <div className=" ">
        {/* Left column container with background */}
        <div className="g-6 flex  flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src={ShopImage}
              className="w-full"
              alt="ShopImage"  />
          </div>

          {/* Right column container */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 ">
            <form>
              {/* Sign in section */}
              <div className="items-center justify-center lg:justify-start">
                <h3 className="mb-0 mr-4 md:text-5xl text-3xl">Log in to Exclusive</h3>
                <p className="mt-3 md:text-lg  text-md font-semibold">Enter your details below</p>
              </div>

              {/* Email input */}
              <div className="relative my-6 ">
                <input
                  type="text"
                  className="peer block w-full rounded border-0 bg-transparent px-3 py-1 leading-normal outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 text- placeholder:text-neutral-400 placeholder-opacity-0"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
                <hr className="border-b-2 border-neutral-400 w-3/4 mt-2"/>
              </div>

              {/* Password input */}
              <div className="relative mb-6">
                <input
                  type="password"
                  className="peer block w-full rounded border-0 bg-transparent px-3 py-1 leading-normal outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 text- placeholder:text-neutral-400 placeholder-opacity-0"
                  id="exampleFormControlInput22"
                  placeholder="Password"
                />
                <hr className="border-b-2 border-neutral-400 w-3/4 mt-2"/>
              </div>

              {/* Remember me and Forgot password */}
              <div className="flex md:space-x-20 space-x-10">
              {/* Login button */}
              <div className="text-center lg:text-left ">
                <button
                  type="button"
                  className="mt-4  inline-block rounded bg-primary px-7 py-2 text-md font-semibold bg-red-500 leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Log in
                </button>
              </div>
                <a href="#!" className="text-md font-semibold text-primary text-red-600 hover:underline my-5">
                  Forgot password ?
                </a>
              </div>


              {/* Register link */}
              <p className="mt-2 text-sm font-semibold mb-6">
                Don't have an account?{" "}
                <Link to="/signUp" className="text-danger hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
                  <span className="underline underline-offset-8 decoration-red-600">Register</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
