import axios from "axios";

//used pre-deployment
const ROOT_URL = `http://localhost:5000`;

export const ADD_EQUATION = "ADD_EQUATION";




//Requirements in body: title, imdb_id, img, rating_num, userName, email, description
export function addEquation(equation) {
    const url = ROOT_URL+`/api/equations`;
    
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