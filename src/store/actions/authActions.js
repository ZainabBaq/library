import axios from "axios";
import decode from "jwt-decode";
import * as actionTypes from "./types";

export const signup = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:8000/signup`, userData);
      dispatch(setUser(res.data.token));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signIn = (userData, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:8000/signin`, userData);
      dispatch(setUser(res.data.token));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signOut = (history) => {
  return setUser();
};

export const checkForToken = () => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) return setUser(token);
  }
  return setUser();
};

const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    return {
      type: actionTypes.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    return {
      type: actionTypes.SET_USER,
      payload: null,
    };
  }
};
