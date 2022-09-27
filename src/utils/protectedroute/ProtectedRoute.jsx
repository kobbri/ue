import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import "./ProtectedRoute.css"

const ProtectedRoute = ({children}) => {
  const token = window.localStorage.getItem('token');
  const location = useLocation();

  // console.log('locaion: ', location);
  // console.log('token: ', token);

  if(!token){
    return <Navigate to="/home" replace state={{from: location }}/>;
  }
  else
    return children;
}
export default ProtectedRoute;