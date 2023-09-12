import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import PrivateRoute from "./components/PrivateRoute.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
// import HomeScreenAdmin from "./screens/HomeScreenAdmin.jsx";

//admin
import AdminHomeScreen from "./screens/AdminHomeScreen.jsx"
import AdminLoginScreen from "./screens/AdminLoginScreen.jsx"
import AdminRegisterScreen from "./screens/AdminRegisterScreen.jsx"
 import UsersList from "./screens/usersList.jsx"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />

      </Route> 


      <Route index={true} path='/admin' element={<AdminHomeScreen/>}/>
      <Route path = '/adminlogin' element={<AdminLoginScreen/>}/>
      <Route path = '/adminregister' element={<AdminRegisterScreen/>}/>
      <Route path="/admin/usersList" element={<UsersList />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </Provider>
);
