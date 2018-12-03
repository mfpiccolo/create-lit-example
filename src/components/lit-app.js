import { component, useReducer, createContext, useContext } from "haunted";
import { html } from "lit-html";
import { styles } from "./lit-app-styles.js";
import "./hello-world.js";

import initialState from "../reducers/initialState";

import "./store-context";

import reducer from "../reducers";

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
