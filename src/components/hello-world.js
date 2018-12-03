import { component } from "haunted";
import { html } from "lit-html";

import "./lit-html-voting";
import "./vue-voting";
import "./react-voting";

import dispatchCustomEvent from "../dispatchCustomEvent";

const getTabComponent = (activeTab, votes, count) => {
  switch (activeTab) {
    case 1:
      return html`
        <tab-one .votes="${votes}" .count="${count}"></tab-one>
      `;
      break;
    case 2:
      return html`
        <tab-two .votes="${votes}" .count="${count}"></tab-one>
      `;
      break;
    case 3:
      return html`
        <tab-three .votes="${votes}" .count="${count}"></tab-one>
      `;
      break;
    default:
      return "";
  }
};

function HelloWorld(element) {
  const { greeting, activeTab, votes, count } = element;
  return html`
    <h1>${greeting}</h1>

    <button
      @click="${
        () =>
          dispatchCustomEvent(element, "UPDATE_TAB", {
            tabNumber: 1,
            greeting: "Vote for lit-html"
          })
      }"
    >
      lit-html
    </button>
    <button
      @click="${
        () =>
          dispatchCustomEvent(element, "UPDATE_TAB", {
            tabNumber: 2,
            greeting: "Vote for React"
          })
      }"
    >
      React
    </button>
    <button
      @click="${
        () =>
          dispatchCustomEvent(element, "UPDATE_TAB", {
            tabNumber: 3,
            greeting: "Vote for Vue"
          })
      }"
    >
      Vue
    </button>

    <p>Total Votes: ${votes}</p>

    ${getTabComponent(activeTab, votes, count)}
  `;
}

customElements.define("hello-world", component(HelloWorld));
