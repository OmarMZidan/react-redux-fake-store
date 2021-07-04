import { ActionTypes } from "../action-types";

interface SetProductsAction {
  type: ActionTypes.SET_PRODUCTS;
  payload: [];
}

interface SelectedProductAction {
  type: ActionTypes.SELECTED_PRODUCT;
  payload: {};
}

interface RemoveSelectedProductAction {
  type: ActionTypes.REMOVE_SELECTED_PRODUCT;
}

export type Action =
  | SetProductsAction
  | SelectedProductAction
  | RemoveSelectedProductAction;
