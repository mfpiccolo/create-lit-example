import { component } from "haunted";
import { html } from "lit-html";

import "./tab-one";
import "./tab-two";
import "./tab-three";

import dispatchCustomEvent from "../dispatchCustomEvent";

const getTabComponent = (activeTab, clicks, count) => {
  switch (activeTab) {
    case 1:
      return html`
        <tab-one .clicks="${clicks}" .count="${count}"></tab-one>
      `;
      break;
    case 2:
      return html`
        <tab-two .clicks="${clicks}" .count="${count}"></tab-one>
      `;
      break;
    case 3:
      return html`
        <tab-three .clicks="${clicks}" .count="${count}"></tab-one>
      `;
      break;
    default:
      return "";
  }
};

function HelloWorld(element) {
  const { greeting, activeTab, clicks, count } = element;
  return html`
    <h1>${greeting}</h1>
    <button
      @click="${
        () => dispatchCustomEvent(element, "UPDATE_TAB", { tabNumber: 1 })
      }"
    >
      Tab 1
    </button>
    <button
      @click="${
        () => dispatchCustomEvent(element, "UPDATE_TAB", { tabNumber: 2 })
      }"
    >
      Tab 2
    </button>
    <button
      @click="${
        () => dispatchCustomEvent(element, "UPDATE_TAB", { tabNumber: 3 })
      }"
    >
      Tab 3
    </button>

    <p class="app-intro">
      To get started, edit <code>src/lit-app.js</code> and save to reload.
    </p>

    ${getTabComponent(activeTab, clicks, count)}
  `;
}

customElements.define("hello-world", component(HelloWorld));
