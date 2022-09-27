import React, { useEffect } from "react";
import "./Home.css";
import axios from "axios";
import { baseUrl } from "../../utils/Constants";
import { useState } from "react";

const Home = () => {
  const [access_token, setAccess_token] = useState(window.localStorage.getItem("token"));
  const [emailFromInput, setEmailFromInput] = useState("");
  const [passwordFromInput, setPasswordFromInput] = useState("");
  const [data, setData] = useState([]);

  const handleLogin = () => {
    axios
      .post(`${baseUrl}/admins/login`, {
        email: emailFromInput,
        password: passwordFromInput,
      })
      .then((response) => {
        console.log("response: ", response);
        window.localStorage.setItem("token", response.data.accessToken);
        setAccess_token(response.data.accessToken);
        const myAdmin = JSON.stringify(response.data.admin)
        window.localStorage.setItem("admin", myAdmin)
      })
      .catch((error) => {
        console.log("error: ", error);
      })
      .finally(() => {
        window.location.pathname="/patch";
      });
  };

  const handleMembers = () => {
    axios
      .get(`${baseUrl}/admins/get-members/all`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
      .then((response) => {
        console.log("response: ", response.data.members);
        setData(response.data.members);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
      
  };
  const getMembers = () => {
    return access_token && access_token?.length !== 0 ? handleMembers() : null ;
  }
  useEffect(() => {
    getMembers();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Home (Public) - Hi, {data[0]?.firstName} </h1>
      <form action="">
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          id="email"
          name="Email"
          placeholder="Email"
          onChange={(e) => {
            setEmailFromInput(e.target.value);
          }}
        />

        <label htmlFor="Password">Password</label>
        <input
          type="password"
          id="password"
          name="Password"
          placeholder="Password"
          onChange={(e) => {
            setPasswordFromInput(e.target.value)
          }}
        />
      </form>
      {/* <input type="submit" value="Sign in" onSubmit={onLogin}/> */}
      <button name="LogIn" type="button" onClick={handleLogin} disabled={false}>
        Log in here
      </button>
    </>
  );
};
export default Home;
