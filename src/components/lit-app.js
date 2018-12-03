import { component, useReducer } from "haunted";
import { html } from "lit-html";
import { styles } from "./lit-app-styles.js";
import "./hello-world.js";

const UPDATE_TAB = "UPDATE_TAB";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const initialState = {
  activeTab: 1,
  clicks: 0,
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TAB:
      return {
        ...state,
        activeTab: action.payload.tabNumber
      };
    case INCREMENT:
      return {
        ...state,
        clicks: state.clicks + 1,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        clicks: state.clicks + 1,
        count: state.count - 1
      };
    default:
      return state;
  }
};

function LitApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { activeTab, clicks, count } = state;

  return html`
    ${styles}

    <div class="app">
      <header class="app-header">
        <img src="../assets/logo.svg" class="app-logo" alt="logo" />
        <h1 class="app-title">Welcome to LitHTML</h1>
      </header>

      <hello-world
        .activeTab="${activeTab}"
        .greeting="${"Welcome"}"
        .clicks="${clicks}"
        .count="${count}"
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
  `;
}

customElements.define("lit-app", component(LitApp));
