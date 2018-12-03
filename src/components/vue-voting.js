import { component } from "haunted";
import { html } from "lit-html";

import "./vote-element";

function VueVoting({ votes, count }) {
  return html`
    <vote-element .votes="${votes}" .count="${count}"></vote-element>
  `;
}

customElements.define("tab-two", component(VueVoting));
