import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  products: productReducer,
  product: selectedProductReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;
