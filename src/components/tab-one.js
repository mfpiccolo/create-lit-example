import { component } from "haunted";
import { html } from "lit-html";

import "./counter-element";

function TabOne({ clicks, count }) {
  return html`
    <p class="app-intro">This is Tab 1</p>
    <counter-element .clicks="${clicks}" .count="${count}"></counter-element>
  `;
}

customElements.define("tab-one", component(TabOne));
