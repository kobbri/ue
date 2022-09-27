import React, { useState } from "react";
import "./EditTable.css";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const EditTable = () => {
  // text input 
  const [contentText, setContentText] = useState(
    window.localStorage.getItem("content")
  );
 
  // gender radio
  const [gender, setGender] = useState(window.localStorage.getItem("gender"));

  const handleChange = (event) => {
    setGender(event.target.value)
    window.localStorage.setItem("gender", event.target.value);
  }

  // select input
  const [select, setSelect] = useState(window.localStorage.getItem("select"));

  const handleChangeSelect = (eve) => {
    setSelect(eve.target.value)
    window.localStorage.setItem("select", eve.target.value);
  }

  return (
    <Grid container style={{ marginTop: 50 }}>
      <Grid item xs={4}>
        {/* text input */}
        <input
          onChange={(e) => {
            setContentText(e.target.value);
            window.localStorage.setItem("content", e.target.value);
          }}
          type="text"
          value={contentText?.length > 0 ? contentText : "Editable text"}
        />
      </Grid>

      <Grid item xs={4}>
        {/* // raio button input  */}

        {/* <form>
            <input type="checkbox" id="male" name="select" value="select" />
            <label for="male">Male</label>
            <input type="checkbox" id="female" name="select" value="select" />
            <label for="female">Female</label>
            <input type="checkbox" id="other" name="select" value="select" />
            <label for="other">Other</label>
        </form> */}
        <form>
          <p>Gender</p>
          <div>
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={handleChange}
            />
            Male
          </div>
          <div>
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={handleChange}
            />
            Female
          </div>
          <div>
            <input
              type="radio"
              value="transgender"
              checked={gender === "transgender"}
              onChange={handleChange}
            />
            Transgender
          </div>
        </form>
      </Grid>

      <Grid item xs={4}>
        {/* select  */}
        <Box sx={{ minWidth: 40, maxWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Age
            </InputLabel>
            <NativeSelect
              defaultValue={select}
              onChange={handleChangeSelect}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
              
            </NativeSelect>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
};
export default EditTable;
