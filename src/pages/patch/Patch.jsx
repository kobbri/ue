import React, { useState , useEffect } from "react";
import "./Patch.css";
import MyInput from "../../components/buttons/MyInput";
import MyButton from "../../components/buttons/MyButton";
import { Grid } from "@mui/material";

const Patch = () => {

  const [isDisabled, setIsDisabled] = useState(true);
  const [admin, setAdmin] = useState(JSON.parse(window.localStorage.getItem("admin")))
  
  useEffect(() => {
      }, [])

  const handleClick = () => {
    setIsDisabled(!isDisabled)
  };
  return (
    <Grid container>
      <Grid item xs={4}></Grid>
      <Grid item xs={2}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "75px",
          }}
        >
          <label htmlFor="Email">Email</label>
          <MyInput
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            disabled={isDisabled}
            value={admin?.email}
          />
          <label htmlFor="FirstName">First Name</label>
          <MyInput
            type="text"
            id="FirstName"
            name="FirstName"
            placeholder="First Name"
            disabled={isDisabled}
            value={admin?.firstName}
          />
          <label htmlFor="LastName">Last Name</label>
          <MyInput
            type="text"
            id="LastName"
            name="LastName"
            placeholder="Last Name"
            disabled={isDisabled}
            value={admin?.lastName}
          />

          <MyButton type="submit" onClick={handleClick} disabled={isDisabled}>
            Save
          </MyButton>
        </form>
      </Grid>
      <Grid item xs={2}>
        <MyButton style={{ marginTop: "93px" }} type="submit" onClick={handleClick} disabled={!isDisabled}>
          Edit
        </MyButton>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};
export default Patch;
