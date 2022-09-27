import axios from "axios";
import { baseUrl } from "../../../utils/Constants";
import {
  getMembersFailure,
  getMembersRequest,
  getMembersSuccess,
} from "../../types/members/membersTypes";

export const getMembers = (token) => {
  return (dispatch) => {
    dispatch(getMembersRequest());
    axios
      .get(`${baseUrl}/admins/get-members/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("members: ", response.data);
        const myData = response.data.members; // store the members from databease after request from server on myData variable
          let rowsWithId = []; // create an empty array where the rows that we will render on UI will be saved

          myData.map((item, index) => {
            //map is a function in JS arrays - it will return an array with the same lenght but modified as we want
            // console.log("index: ", index);
            return rowsWithId.push({ ...item, id: index }); // '... item' means that it will add every item from mapped array - myData - and it will show the
            // object with  all properties + id with the value index that represend the item position from
            // array starting from 0
          });
        dispatch(getMembersSuccess(rowsWithId));
      })
      .catch((error) => {
        console.log("error: ", error);
        dispatch(getMembersFailure(error.data));
      });
  };
};
