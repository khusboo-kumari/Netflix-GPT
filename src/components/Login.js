import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    //   Using toggle Feature here
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg"
          alt="background"
          className="object-cover w-full h-full  bg-black opacity-91"
        />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black bg-opacity-80 rounded my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-4xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className=" p-3 mb-6  w-full bg-gray-700 opacity-40 rounded"
          ></input>
        )} 
        <input
          type="text"
          placeholder="Email or mobile Number"
          className=" p-3   mb-4 w-full bg-gray-700 opacity-40 rounded  "
        ></input>
        
        <input
          type="password"
          placeholder="Password"
          className=" p-3 mb-6  w-full bg-gray-700 opacity-40 rounded"
        ></input>
        <button className=" py-3  bg-red-600 w-full  text-xl rounded">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-4 m-4 text-xl cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now "}
        </p>
      </form>
    </div>
  );
};

export default Login;
