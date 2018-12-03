import { component, useReducer } from "haunted";
import { html } from "lit-html";
import { styles } from "./lit-app-styles.js";
import "./hello-world.js";

const UPDATE_TAB = "UPDATE_TAB";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const initialState = {
  activeTab: 1,
  votes: 0,
  count: 0,
  greeting: "Vote for LitHTML"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TAB:
      const { tabNumber, greeting } = action.payload;
      return {
        ...state,
        activeTab: tabNumber,
        greeting
      };
    case INCREMENT:
      return {
        ...state,
        votes: state.votes + 1,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        votes: state.votes + 1,
        count: state.count - 1
      };
    default:
      return state;
  }
};

function LitApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { greeting, activeTab, votes, count } = state;

  return html`
    ${styles}

    <div class="app">
      <header class="app-header">
        <img src="../assets/logo.svg" class="app-logo" alt="logo" />
        <h1 class="app-title">Ranking UI Libs</h1>
      </header>

      <hello-world
        .activeTab="${activeTab}"
        .greeting="${greeting}"
        .votes="${votes}"
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
