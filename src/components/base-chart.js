import { component, useEffect, useState } from "haunted";
import { html } from "lit-html";
import { Chart } from "chart.js";

function BaseChart(element) {
  const { labels, values, type, options } = element;
  const [chart, setChart] = useState();

  useEffect(() => {
    const data = {
      labels,
      datasets: [
        {
          label: "View Libraries",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: values
        }
      ]
    };
    setChart(
      new Chart(element.shadowRoot.querySelector("canvas"), {
        type,
        data,
        options
      })
    );
  }, []);

  useEffect(
    () => {
      if (chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data = values;
        });
        chart.update();
      }
    },
    [values]
  );

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
