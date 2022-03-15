import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home/Home";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import SignIn from "./components/SignIn/SignIn";
import BeDonorForm from './components/Home/BeDonorForm/BeDonorForm';
import SearchDetail from './components/SearchDetail/SearchDetail';
// import Donor from './components/Donor/Donor';
import AppointmentRequest from './components/AppointmentRequest/AppointmentRequest';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
// import Admin from "./components/Admin/Admin/Admin";
import AddAdmin from "./components/Admin/AddAdmin/AddAdmin";
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllDonors from "./components/Admin/AllDonors/AllDonors";

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
            {/* <Route path="donor" element={<PrivateRoute><Donor /></PrivateRoute>} /> */}
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/beDonor" element={<PrivateRoute><BeDonorForm /></PrivateRoute>} />
            <Route path="/searchDetail" element={<PrivateRoute><SearchDetail /></PrivateRoute>} />
            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/getAppointment" element={<AppointmentRequest />} />
            <Route path="/addAdmin" element={<AddAdmin />} />
            <Route path='/allDonors' element={<AllDonors />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </DonorContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
