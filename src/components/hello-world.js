import { component } from "haunted";
import { html } from "lit-html";

import { UPDATE_TAB } from "../constants";
import dispatchCustomEvent from "../dispatchCustomEvent";

import "../components/vote-element";

function HelloWorld(element) {
  const { greeting, activeLib } = element;

  return html`
    <h1>${greeting}</h1>

    <button
      @click="${
        () =>
          dispatchCustomEvent(element, UPDATE_TAB, {
            activeLib: "litHtml",
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
            activeLib: "react",
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
            activeLib: "vue",
            greeting: "Vote for Vue"
          })
      }"
    >
      Vue
    </button>

    <vote-element .lib="${activeLib}"></vote-element>
  `;
}

customElements.define("hello-world", component(HelloWorld));
