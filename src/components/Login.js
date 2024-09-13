import React, { useRef, useState } from "react";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  //  To handle errorMsg lets create a state variable
  const [errorMessage, setErrorMessage] = useState(null);

  //  Navigate is also a hook
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //  Lets now use -> useRef hook instead of useState .
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  // console.log(name) ;

  const toggleSignInForm = () => {
    //   Using toggle Feature here
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    // Validate the form data
    const enteredName = name.current ? name.current.value : "Invalid Name"; // Handle Sign In where name is not present

    const msg = validate(
      email.current.value,
      password.current.value,
      enteredName
    );
    setErrorMessage(msg);

    //  If data is valid then ofc msg will be null .
    if (msg) return null;

    //  Sign In / Sign up Logic here , else part
    if (!isSignInForm) {
      //  Sign Up logic here (Register as a new User here).
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          //  Update Profile here
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/116819942?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser ;  // auth is coming for the firebase, which will update it 
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });

          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Success");
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent form from Submitting and Repeated Regreshing of  the page is also stopped .
        }}
        className=" w-3/12 absolute p-12 bg-black bg-opacity-80 rounded my-36 mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-4xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className=" p-3 mb-6  w-full bg-gray-700 opacity-40 rounded"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile Number"
          className=" p-3   mb-4 w-full bg-gray-700 opacity-40 rounded  "
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" p-3 mb-6  w-full bg-gray-700 opacity-40 rounded"
        ></input>

        {errorMessage && (
          <p className="text-red-400 font-bold text-lg py-2">{errorMessage}</p>
        )}

        <button
          className=" py-3  bg-red-600 w-full  text-xl rounded"
          onClick={handleButtonClick}
        >
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
