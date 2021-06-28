import axios from "axios";
import * as actionTypes from "./types";

export const fetchLibraries = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/libraries");
      dispatch({
        type: actionTypes.FETCH_LIBRAREIS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
