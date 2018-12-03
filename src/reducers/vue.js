export const initialState = {
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
