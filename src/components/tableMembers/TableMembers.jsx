import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {getMembers} from '../../redux/actions/members/getMembers';
import { useDispatch, useSelector } from "react-redux";

const TableMembers = (props) => {

    const dispatch = useDispatch();
    const membersFromRedux = useSelector(state => state.membersState)

    const { setMemberIdProps} = props;

    const [members, setMembers] = useState([]);
    const [accessToken, setAccessToken] = useState();
    

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "_id", headerName: "ID", width: 150 },
        { field: "firstName", headerName: "First name", width: 130 },
        { field: "lastName", headerName: "Last name", width: 130 },
        { field: "email", headerName: "Email", width: 180 },
        { field: "position", headerName: "Position", width: 30 },
        { field: "avatar", headerName: "Avatar", width: 130 },
        { field: "index", headerName: "Index", width: 130 },
        { field: "linkedIn", headerName: "LinkedIn", width: 120 },
        { field: "github", headerName: "GitHub", width: 120 },
      ];

      useEffect(() => {
        setMembers(membersFromRedux?.members);
        console.log('membersFromRedux: ', membersFromRedux)
      }, [membersFromRedux])
      

      const handleMembersWithToken = () => {
        accessToken ? dispatch(getMembers(accessToken)) : setMembers([]);

      }

      useEffect(() => {
        setAccessToken(window.localStorage.getItem("token"));
        handleMembersWithToken();
        // eslint-disable-next-line
      },[accessToken]);


  return (
    <div style={{ height: 430, width: "95%", marginTop: 30 }}>
      <DataGrid
        rows={members ? members : []}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onCellClick={(details, event) => {event.target.checked === true ? setMemberIdProps(details.row._id) : setMemberIdProps('')}}
      />
    </div>
  );
}

export default TableMembers;