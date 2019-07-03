import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {
  msg: {},
  status: null,
  id: null
};

// GET_ERROR FUNCTION
// after itemAction.js sent get request to the backend item, itemReducer get the payload(state) and combine with (initial state) from Action
// return state at the end

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id
      };
    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null
      };

    default:
      return state;
  }
}
