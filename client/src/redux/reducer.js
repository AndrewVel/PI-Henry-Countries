import { GET_COUNTRIES } from "./actions";

const initialState = {
  countries: [],
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: actions.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
