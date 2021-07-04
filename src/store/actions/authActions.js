import axios from "axios";
import * as actionTypes from "./types";

export const signup = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:8000/signup`, userData);
      dispatch({
        type: actionTypes.SIGNUP,
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};
