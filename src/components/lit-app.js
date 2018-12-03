import { component, useReducer, createContext, useContext } from "haunted";
import { html } from "lit-html";
import { styles } from "./lit-app-styles.js";
import "./hello-world.js";

const UPDATE_TAB = "UPDATE_TAB";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

import initialState from "../reducers/initialState";

import "./store-context";

const reducer = (state = initialState, action) => {
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
          votes: state.global.votes - 1
        },
        [action.payload.lib]: {
          votes: state[action.payload.lib].votes - 1
        }
      };
    default:
      return state;
  }
};

function LitApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    global: { greeting, activeTab }
  } = state;

  return html`
    ${styles}
    <store-provider .value="${state}">
      <div class="app">
        <header class="app-header">
          <img src="../assets/logo.svg" class="app-logo" alt="logo" />
          <h1 class="app-title">Ranking UI Libs</h1>
        </header>

        <hello-world
          .activeTab="${activeTab}"
          .greeting="${greeting}"
          @DISPATCH="${el => dispatch(el.detail)}"
        >
        </hello-world>

        <a
          aria-label="Create lit app on Github"
          href="https://github.com/thepassle/create-lit-app"
        >
          <img src="../assets/github.svg" class="app-gh" alt />
        </a>
      </div>
    </store-provider>
  `;
}

customElements.define("lit-app", component(LitApp));
