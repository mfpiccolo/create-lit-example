const UPDATE_TAB = "UPDATE_TAB";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export default (state = initialState, action) => {
  let lib;
  switch (action.type) {
    case UPDATE_TAB:
      const { tabNumber, greeting } = action.payload;
      return {
        ...state,
        global: {
          ...state.global,
          activeTab: tabNumber,
          greeting
        }
      };
    case INCREMENT:
      return {
        ...state,
        global: {
          ...state.global,
          votes: state.global.votes + 1
        },
        [action.payload.lib]: {
          votes: state[action.payload.lib].votes + 1
        }
      };
    case DECREMENT:
      return {
        ...state,
        global: {
          ...state.global,
          votes: state.global.votes + 1
        },
        [action.payload.lib]: {
          votes: state[action.payload.lib].votes - 1
        }
      };
    default:
      return state;
  }
};
