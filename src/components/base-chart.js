import { component, useEffect, useState } from "haunted";
import { html } from "lit-html";
import { Chart } from "chart.js";

function BaseChart(element) {
  const { data, type, options } = element;

  useEffect(() => {
    new Chart(element.shadowRoot.querySelector("canvas"), {
      type,
      data,
      options
    });
  }, []);

  return html`
    <style>
      .chart-size {
        position: relative;
      }
      canvas {
        max-width: 960px;
        padding-left: 0;
        padding-right: 0;
        margin-left: auto;
        margin-right: auto;
        display: block;
      }
    </style>
    <div class="chart-size"><canvas></canvas></div>
  `;
}
if (!customElements.get("base-chart")) {
  customElements.define("base-chart", component(BaseChart));
}
