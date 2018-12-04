import { component, useReducer, useEffect } from "haunted";
import { html } from "lit-html";
import { styles } from "./lit-app-styles.js";
import "./tab-view.js";

import initialState from "../reducers/initialState";

import "./store-context";
import "./base-chart";

import reducer from "../reducers";

function LitApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    global: { greeting, activeLib, votes },
    litHtml: { votes: litHtmlVotes },
    react: { votes: reactVotes },
    vue: { votes: vueVotes }
  } = state;

  return html`
    ${styles}
    <store-provider .value="${state}">
      <div class="app">
        <header class="app-header">
          <img src="../assets/logo.svg" class="app-logo" alt="logo" />
          <h1 class="app-title">Ranking UI Libs</h1>
          <h2>Total Votes: ${votes}</h2>
        </header>

        <tab-view
          .activeLib="${activeLib}"
          .greeting="${greeting}"
          @DISPATCH="${({ detail: action }) => dispatch(action)}"
        >
        </tab-view>
        <base-chart
          .type="${"bar"}"
          .label="${"View Libraries"}"
          .values="${[litHtmlVotes, reactVotes, vueVotes]}"
          .labels="${["lit-html", "React", "Vue"]}"
          .options="${
            {
              scales: {
                yAxes: [
                  {
                    display: true,
                    ticks: {
                      suggestedMin: 0,
                      beginAtZero: true
                    }
                  }
                ]
              }
            }
          }"
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
