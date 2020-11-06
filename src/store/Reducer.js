import { DECREMENT, INCREMENT } from "./Action";

const INITIAL_STATE = {
  count: 0,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      //   console.log(action);
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default: {
      return state;
    }
  }
};
