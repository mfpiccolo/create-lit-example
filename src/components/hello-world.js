import { component, useContext } from "haunted";
import { html } from "lit-html";

import "./lit-html-voting";
import "./vue-voting";
import "./react-voting";

import { UPDATE_TAB } from "../constants";
import dispatchCustomEvent from "../dispatchCustomEvent";
import { StoreContext } from "./store-context";

const getTabComponent = activeTab => {
  switch (activeTab) {
    case 1:
      return html`
        <lit-html-voting></lit-html-voting>
      `;
      break;
    case 2:
      return html`
        <react-voting></react-voting>
      `;
      break;
    case 3:
      return html`
        <vue-voting><vue-voting/>
      `;
      break;
    default:
      return "";
  }
};

function HelloWorld(element) {
  const {
    global: { votes }
  } = useContext(StoreContext);

  const { greeting, activeTab } = element;
  return html`
    <h1>${greeting}</h1>

    <button
      @click="${
        () =>
          dispatchCustomEvent(element, UPDATE_TAB, {
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
          dispatchCustomEvent(element, UPDATE_TAB, {
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
          dispatchCustomEvent(element, UPDATE_TAB, {
            tabNumber: 3,
            greeting: "Vote for Vue"
          })
      }"
    >
      Vue
    </button>
    <p>Total Votes: ${votes}</p>

    ${getTabComponent(activeTab)}
  `;
}

customElements.define("hello-world", component(HelloWorld));
