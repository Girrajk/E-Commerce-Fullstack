import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session or authentication tokens
    localStorage.removeItem("token");
    sessionStorage.removeItem("user");

    // Redirect to login page
    navigate("/login");
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen text-xl">
      Logging out...
    </div>
  );
 
};

export default Logout;