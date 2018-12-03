import { component } from "haunted";
import { html } from "lit-html";

import "./counter-element";

function TabTwo({ clicks, count }) {
  return html`
    <p class="app-intro">This is Tab 2</p>
    <counter-element .clicks="${clicks}" .count="${count}"></counter-element>
  `;
}

customElements.define("tab-two", component(TabTwo));
