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
import BeDonorForm from './components/Home/BeDonorForm/BeDonorForm';
import SearchDetail from './components/SearchDetail/SearchDetail';
import Donor from './components/Donor/Donor';
import AppointmentRequest from './components/AppointmentRequest/AppointmentRequest';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
export const DonorContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [searchDonorInfo, setSearchDonorInfo] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <DonorContext.Provider value={[searchDonorInfo, setSearchDonorInfo]}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            {/* it will be private Route */}
            <Route path="/donor" element={<Donor />} />
            <Route path="/signIn" element={<SignIn />} />
            {/* both will be private route */}
            <Route path="/beDonor" element={<BeDonorForm />} />
            <Route path="/searchDetail" element={<SearchDetail />} />
            {/* not private route */}
            <Route path="/getAppointment" element={<AppointmentRequest />} />
            {/* <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} /> */}
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </DonorContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
