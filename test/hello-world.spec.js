import { html, render } from "lit-html";
import { expect } from "chai";

import "../src/tab-view";

describe("tab-view", () => {
  let element;

  const fixture = html`
    <tab-view .greeting="${"Welcome"}"></tab-view>
  `;

  beforeEach(async () => {
    render(fixture, document.body);
    element = document.body.firstElementChild;
    await element.updateComplete;
  });

  afterEach(() => {
    element.remove();
  });

  it("should render a welcome message", () => {
    const title = element.shadowRoot.querySelector("h1");
    expect(title.innerText).to.equal("Welcome");
  });
});
