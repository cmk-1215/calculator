import { GET_RECENT_EQUATIONS } from "../actions/index";


export default function (state = [], action) {
  switch (action.type) {
    case GET_RECENT_EQUATIONS:
        return action.payload.data;
    default:
      return state;
      
  }
}