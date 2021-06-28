import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { fetchBooks } from "./actions/bookActions";
import { fetchLibraries } from "./actions/libraryActions";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchBooks());
store.dispatch(fetchLibraries());
export default store;
