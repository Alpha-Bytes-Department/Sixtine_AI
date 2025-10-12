import { createBrowserRouter } from "react-router";
import Landing from "../pages/Landing/Landing";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import AddDocument from "../pages/AddDocument/AddDocument";
import AddConsultion from "../pages/AddConsultion/AddConsultion";
import Chat from "../pages/Chat/Chat";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/EditProfile/EditProfile";
import Setting from "../pages/Setting/Setting";
import AudioExtraction from "../pages/AudioExtraction/AudioExtraction";
import ChatHistory from "../pages/ChatHistory/ChatHistory";
import Forms from "../pages/Forms/Forms";
import Users from "../pages/Users/Users";
import Patients from "../pages/Patients/Patients";
import PatientDetails from "../pages/PatientDetails/PatientDetails";
import PatientDocDetail from "../pages/PatientDocDetails/PatientDocDetail";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
      {
        path: "settings",
        element: <Setting />,
      },
      {
        path: "add-document",
        element: <AddDocument />,
      },
      {
        path: "add-consultion",
        element: <AddConsultion />,
      },
      {
        path: "extract-audio",
        element: <AudioExtraction />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "chats-history",
        element: <ChatHistory/>
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "patients",
        element: <Patients />,
      },
      {
        path: "patients/:patientId",
        element: <PatientDetails />,
      },
      {
        path: "patients/:patientId/document/:docId",
        element: <PatientDocDetail />,
      },
      {
        path: "forms",
        element: <Forms />,
      }
    ],
  },
]);
