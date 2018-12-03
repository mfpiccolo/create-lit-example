import { component, useContext } from "haunted";
import { html } from "lit-html";

import "./vote-element";
import { StoreContext } from "./store-context";

function VueVoting() {
  const {
    vue: { votes }
  } = useContext(StoreContext);

  return html`
    <vote-element .lib="${"vue"}" .votes="${votes}"></vote-element>
  `;
}

customElements.define("vue-voting", component(VueVoting));
