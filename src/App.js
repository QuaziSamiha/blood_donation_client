import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';

import AboutUs from "./components/AboutUs/AboutUs";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home/Home";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import SignIn from "./components/SignIn/SignIn";
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/signIn" element={<SignIn />} />
          {/* <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} /> */}
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
