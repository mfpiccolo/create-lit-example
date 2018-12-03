export default (element, type, payload) => {
  element.dispatchEvent(
    new CustomEvent("DISPATCH", {
      bubbles: true,
      composed: true,
      detail: { type, payload }
    })
  );
};
