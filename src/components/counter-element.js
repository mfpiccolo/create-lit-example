import { component } from "haunted";
import { html } from "lit-html";

import dispatchCustomEvent from "../dispatchCustomEvent";

// Component
function Counter(element) {
  const { clicks, count } = element;
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
        Clicked: <span>${clicks}</span> times. Count is <span>${count}</span>.
        <button
          @click="${() => dispatchCustomEvent(element, "INCREMENT")}"
          title="Add 1"
        >
          +
        </button>
        <button
          @click="${() => dispatchCustomEvent(element, "DECREMENT")}"
          title="Minus 1"
        >
          -
        </button>
      </p>
    </div>
  `;
}

window.customElements.define("counter-element", component(Counter));
