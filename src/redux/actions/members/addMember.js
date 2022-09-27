import axios from "axios";
import { baseUrl } from "../../../utils/Constants";
import {
  getMembersFailure,
  getMembersRequest,
  getMembersSuccess,
} from "../../types/members/membersTypes";
import { getMembers } from "./getMembers";

export const addMembers = (
  email,
  password,
  firstName,
  lastName,
  linkedIn,
  facebook,
  avatar,
  token
) => {
  return (dispatch) => {
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
        dispatch(getMembersSuccess(token))
      });
  };
};
