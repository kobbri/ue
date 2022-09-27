import React, { useEffect, useState } from "react";
import MyButton from "../../components/buttons/MyButton";
import { Box } from "@mui/system";

const DeleteMembers = ({deleteMemberById, memberIdProps, setMemberIdProps}) => {

  const [memberId, setMemberId] = useState('');
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    setAccessToken(window.localStorage.getItem("token"));
  }, [accessToken]);

  useEffect(() => {
    setMemberId(memberIdProps);
  }, [memberIdProps, setMemberIdProps ]);


  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h3>Delete selected member</h3>
      <MyButton disabled={memberId.length > 0 ? false : true} style={{ color: "red" }} type="submit" variant="outlined" onClick={() => {deleteMemberById(memberId, accessToken); setMemberId(''); setMemberIdProps('')}}>
        Delete
      </MyButton>
      
    </Box>
  );
};
export default DeleteMembers;