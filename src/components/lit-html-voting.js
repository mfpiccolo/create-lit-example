import { component, useContext } from "haunted";
import { html } from "lit-html";

import "./vote-element";
import { StoreContext } from "./store-context";

function LitHtmlVoting() {
  const {
    litHtml: { votes }
  } = useContext(StoreContext);

  return html`
    <vote-element .lib="${"litHtml"}" .votes="${votes}"></vote-element>
  `;
}

customElements.define("lit-html-voting", component(LitHtmlVoting));
