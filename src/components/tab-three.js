import { component } from "haunted";
import { html } from "lit-html";

import "./counter-element";

function TabThree({ clicks, count }) {
  return html`
    <p class="app-intro">This is Tab 3</p>
    <counter-element .clicks="${clicks}" .count="${count}"></counter-element>
  `;
}

customElements.define("tab-three", component(TabThree));
