import produce from "immer";
import initialState from "./initialState";

import { UPDATE_TAB, INCREMENT, DECREMENT } from "../constants";

export default produce((draft, action) => {
  let lib;
  switch (action.type) {
    case UPDATE_TAB:
      const { activeLib, greeting } = action.payload;
      draft.global = { ...draft.global, activeLib, greeting };
      break;
    case INCREMENT:
      lib = action.payload.lib;
      draft.global.votes = draft.global.votes + 1;
      draft[lib].votes = draft[lib].votes + 1;
      break;
    case DECREMENT:
      lib = action.payload.lib;
      draft.global.votes = draft.global.votes + 1;
      draft[lib].votes = draft[lib].votes - 1;
      break;
  }
}, initialState);
