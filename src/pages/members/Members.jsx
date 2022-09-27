import React from "react";
import AddMembers from "../../components/addMembers/AddMembers";
import DeleteMembers from "../../components/deleteMember/DeleteMember";
import TableMembers from "../../components/tableMembers/TableMembers";
import { Grid } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../utils/Constants";
import { useState } from "react";
import { useEffect } from "react";

const Members = () => {
  const [updatedMembers, setUpdatedMembers] = useState([]);
  const [memberIdProps, setMemberIdProps] = useState("");

  const deleteMemberById = (memberId, token) => {
    axios
      .delete(`${baseUrl}/admins/delete-member/${memberId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((eroare) => {
        console.log(eroare);
      })
      .finally(() => {
        getMembers(token);
      });
  };
  const onAddMembers = (
    email,
    password,
    firstName,
    lastName,
    linkedIn,
    facebook,
    avatar,
    token
  ) => {
    axios
      .post(
        `${baseUrl}/admins/add-member`,
        {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          linkedIn: linkedIn,
          facebook: facebook,
          avatar: avatar,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("response ", response.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      })
      .finally(() => {
        getMembers(token);
      });
  };
  const getMembers = (token) => {
    if (token)
      axios
        .get(`${baseUrl}/admins/get-members/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const myData = response.data.members; // store the members from databease after request from server on myData variable
          let rowsWithId = []; // create an empty array where the rows that we will render on UI will be saved

          myData.map((item, index) => {
            //map is a function in JS arrays - it will return an array with the same lenght but modified as we want
            // console.log("index: ", index);
            return rowsWithId.push({ ...item, id: index }); // '... item' means that it will add every item from mapped array - myData - and it will show the
            // object with  all properties + id with the value index that represend the item position from
            // array starting from 0
          });
          setUpdatedMembers(rowsWithId);
          return rowsWithId;
          // async function - React hook useState - the setter for member where we will se the array for
          // DataGrid as is expected on the column const declared before
        })
        .catch((error) => {
          console.log("error: ", error);
        });
  };

  useEffect(() => {}, [memberIdProps, setMemberIdProps]);

  return (
    <Grid container>
      <Grid item xs={4}>
        <AddMembers onAddMembers={onAddMembers} />
      </Grid>
      <Grid item xs={8}>
        <TableMembers
          getMembers={getMembers}
          updatedMembers={updatedMembers}
          setMemberIdProps={setMemberIdProps}
        />
        <DeleteMembers
          deleteMemberById={deleteMemberById}
          memberIdProps={memberIdProps}
          setMemberIdProps={setMemberIdProps}
        />
      </Grid>
    </Grid>
  );
};
export default Members;
