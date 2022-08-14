import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Profil from "../../Pages/Profil";
import Trending from "../../Pages/Trending";
import Signup from "../../Pages/Signup";
import UserProfil from "../../Pages/UserProfil";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profil/:id" element={<Profil />} />
        <Route path="/userprofil/:id" element={<UserProfil />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
