export default (el, type, payload) => {
  el.dispatchEvent(
    new CustomEvent("DISPATCH", {
      bubbles: true,
      composed: true,
      detail: { type, payload }
    })
  );
};
