export const GET_MEMBERS_REQUEST = 'GET_MEMBERS_REQUEST';
export const GET_MEMBERS_SUCCESS = 'GET_MEMBERS_SUCCESS';
export const GET_MEMBERS_FAILURE = 'GET_MEMBERS_FAILURE';

export const getMembersRequest = () => {
  return {
    type: GET_MEMBERS_REQUEST
  }
};

export const getMembersSuccess = (response) => {
  return {
    type: GET_MEMBERS_SUCCESS,
    payload: response
  }
};

export const getMembersFailure = (error) => {
  return {
    type: GET_MEMBERS_FAILURE,
    payload: error
  }
};