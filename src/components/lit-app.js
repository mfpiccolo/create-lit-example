import { component, useReducer } from "haunted";
import { html } from "lit-html";
import { styles } from "./lit-app-styles.js";
import "./hello-world.js";

import initialState from "../reducers/initialState";

import "./store-context";
import "./base-chart";

import reducer from "../reducers";

function LitApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    global: { greeting, activeLib, votes }
  } = state;

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45]
      }
    ]
  };

  return html`
    ${styles}
    <store-provider .value="${state}">
      <div class="app">
        <header class="app-header">
          <img src="../assets/logo.svg" class="app-logo" alt="logo" />
          <h1 class="app-title">Ranking UI Libs</h1>
          <h2>Total Votes: ${votes}</h2>
        </header>

        <hello-world
          .activeLib="${activeLib}"
          .greeting="${greeting}"
          @DISPATCH="${({ detail: action }) => dispatch(action)}"
        >
        </hello-world>
        <base-chart
          .type="${"bar"}"
          .data="${data}"
          .options="${{}}"
        ></base-chart>
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
