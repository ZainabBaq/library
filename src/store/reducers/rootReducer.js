import { combineReducers } from "redux";
import libraryReducer from "./libraryReducer";
import bookReducer from "./bookReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  libraries: libraryReducer,
  books: bookReducer,
  user: authReducer,
});

export default rootReducer;
