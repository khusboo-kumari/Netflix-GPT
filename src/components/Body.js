import {
  createBrowserRouter,
  RouterProvider,
  // useNavigate,
} from "react-router-dom";
import React, { useEffect } from "react";
// import Login from './Login'
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../utils/firebase";
import Browse from "./Browse";
import Login from "./Login";
// import { useDispatch } from "react-redux";
// import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  //  Use Hook, dispatch
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
