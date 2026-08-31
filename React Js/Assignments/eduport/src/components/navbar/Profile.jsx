import React, { useContext, useEffect, useState } from "react";
import CreateNavbar from "./CreateNavbar";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";
const Profile = () => {
  let navigate=useNavigate();
  let [data, setData] = useState({
    profile:[],
  });
  let {userId}=useContext(authContext);
  let {profile}=data;
  let profileData = [
    {
      name: "Notification",
      path: "#",
    },
    {
      name: "Log in",
      path: "/login",
    },
    {
      name: "sign in",
      path: "/register",
    },
  ];
  let profileDataLogin = [
    {
      name: "Notification",
      path: "#",
    },
    {
      name: "Log Out",
      path: "#",
    },
  ];
  let profileDataSetting = () => {
    if (userId) {
      setData({ ...data, profile: profileDataLogin });
    } else {
      setData({ ...data, profile: profileData });
    }
  };
  useEffect(() => {
    profileDataSetting();
  }, [userId]);

  let removeId=()=>{
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("role");
    navigate("/login");
  };
  console.log(userId);
  return (
    <div>
      <section>
        <CreateNavbar data={profile} removeId={removeId} />
      </section>
    </div>
  );
};

export default Profile;
