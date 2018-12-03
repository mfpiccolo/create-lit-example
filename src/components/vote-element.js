import { component } from "haunted";
import { html } from "lit-html";

import dispatchCustomEvent from "../dispatchCustomEvent";

// Component
function VoteElement(element) {
  const { votes, count } = element;
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
        Count: <span>${count}</span>.
        <button
          @click="${() => dispatchCustomEvent(element, "INCREMENT")}"
          title="Add 1"
        >
          ↑
        </button>
        <button
          @click="${() => dispatchCustomEvent(element, "DECREMENT")}"
          title="Minus 1"
        >
          ↓
        </button>
      </p>
    </div>
  `;
}

window.customElements.define("vote-element", component(VoteElement));
