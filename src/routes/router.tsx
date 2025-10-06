import {
  createBrowserRouter,
} from "react-router";
import Landing from "../pages/Landing/Landing";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import AddDocument from "../pages/AddDocument/AddDocument";
import AddConsultion from "../pages/AddConsultion/AddConsultion";
import Chat from "../pages/Chat/Chat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children:[{
      path: "/login",
      element: <Login/>
    },
    {
      path: "/add-document",
      element: <AddDocument/>
    },
    {
      path: "/add-consultion",
      element: <AddConsultion/>
    },
    {
      path: "/chat",
      element: <Chat/>
    }
  ]
  }
  
]);