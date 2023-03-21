import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

  const navigate = useNavigate();


  const handleLogin = () =>{  
    localStorage.setItem("user", JSON.stringify({ role: 'ADMIN' }));
    navigate("/devTools")
  }

  return (
    <>
     <div>Admin login</div>
     <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default AdminLogin;
