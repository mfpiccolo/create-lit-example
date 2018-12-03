import { component, useContext } from "haunted";
import { html } from "lit-html";

import "./vote-element";
import { StoreContext } from "./store-context";

function ReactVoting() {
  const {
    react: { votes }
  } = useContext(StoreContext);

  return html`
    <vote-element .lib="${"react"}" .votes="${votes}"></vote-element>
  `;
}

customElements.define("react-voting", component(ReactVoting));
