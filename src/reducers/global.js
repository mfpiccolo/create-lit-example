import { INCREMENT, DECREMENT } from "../constants";

export const initialState = {
  activeTab: 1,
  greeting: "Vote for LitHTML",
  votes: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        votes: state.votes + 1
      };
    case DECREMENT:
      return {
        votes: state.votes + 1
      };
    default:
      return state;
  }
};
