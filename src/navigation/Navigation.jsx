import React, {useState, useEffect} from "react";
import {  NavLink , useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState();

  const onLogout = () => {
    window.localStorage.removeItem("user");
    navigate('/');
    setToken();
    return window.localStorage.removeItem('token');
  }

  useEffect(()=>{
    setToken(window.localStorage.getItem('token'));
  }, [token]);

  return (
    <nav className={"nav-container"}>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/edittable">Edit table</NavLink>
      <NavLink to="/patch">Patch</NavLink>
      <NavLink to="/members">Members</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/admin">Admin</NavLink>
      {token && (
        <button type="button" onClick={(onLogout)}>Sign out</button>
        )}
      
    </nav>
  );
};
export default Navigation;
