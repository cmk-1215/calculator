import { ADD_EQUATION } from "../actions/index";


export default function (state = {}, action) {
  switch (action.type) {
    case ADD_EQUATION:
        if (action.payload.status === 200) {
            alert("Equation successfully added")
            return action.payload.data;
        } else {
            alert("Something went wrong, please try again")
          }
          /* falls through */
    default:
      return state;
      
  }
}