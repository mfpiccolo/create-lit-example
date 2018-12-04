import { component, useContext } from "haunted";
import { html } from "lit-html";

import dispatchCustomEvent from "../dispatchCustomEvent";
import { StoreContext } from "./store-context";

// Component
function VoteElement(element) {
  const { lib } = element;

  const store = useContext(StoreContext);
  const votes = store[lib].votes;

  return html`
    <style>
      span {
        width: 20px;
        display: inline-block;
        text-align: center;
        font-weight: bold;
      }
    </style>
    <div>
      <p>
        Votes: <span>${votes}</span>.
        <button
          @click="${() => dispatchCustomEvent(element, "INCREMENT", { lib })}"
          title="Add 1"
        >
          ↑
        </button>
        <button
          @click="${() => dispatchCustomEvent(element, "DECREMENT", { lib })}"
          title="Minus 1"
        >
          ↓
        </button>
      </p>
    </div>
  `;
}

window.customElements.define("vote-element", component(VoteElement));
