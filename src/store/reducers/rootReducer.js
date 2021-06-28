import { combineReducers } from "redux";
import libraryReducer from "./libraryReducer";
import bookReducer from "./bookReducer";

const rootReducer = combineReducers({
  libraries: libraryReducer,
  books: bookReducer,
});

export default rootReducer;
