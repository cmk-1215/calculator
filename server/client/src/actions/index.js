import axios from "axios";

//used pre-deployment
const ROOT_URL = `http://localhost:5000`;

export const ADD_EQUATION = "ADD_EQUATION";
export const GET_RECENT_EQUATIONS = "GET_RECEDNT_EQUATIONS"




//Requirements in body: title, imdb_id, img, rating_num, userName, email, description
export function addEquation(equation) {
    const url = `/api/equations`;
    
    const request = axios({
      method: "post",
      url: url,
      data: {
        problem: equation, 
      }
    })
  
    return {
      type: ADD_EQUATION,
      payload: request,
    };
  }


export function getRecentEquations() {
  const url = `/api/equations`;
  const request = axios.get(url);

  return {
      type: GET_RECENT_EQUATIONS,
      payload: request,
    };
      
  }
