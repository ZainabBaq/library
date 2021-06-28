import * as actionTypes from "../actions/types";
const initialState = { libraries: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LIBRAREIS:
      return {
        ...state,
        libraries: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
