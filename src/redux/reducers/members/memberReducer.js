import { GET_MEMBERS_FAILURE, GET_MEMBERS_REQUEST, GET_MEMBERS_SUCCESS } from "../../types/members/membersTypes"

const initialState = {
  loading: false,
  hasErrors: {
    status: false,
    message: ''
  },
  members: [],
  member: {}
}

export const memberReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEMBERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        hasErrors: {
          message: '',
          status: false
        },
        members: [...action.payload]
      }
    case GET_MEMBERS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: {
          status: true,
          message: action.payload
        }
      }
    default: 
      return state
  }
}