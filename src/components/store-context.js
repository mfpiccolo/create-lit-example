import { createContext } from "haunted";
import initialState from "../reducers/initialState";
export const StoreContext = createContext(initialState);
customElements.define("store-provider", StoreContext.Provider);
customElements.define("store-consumer", StoreContext.Consumer);
