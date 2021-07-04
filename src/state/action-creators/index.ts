import { Dispatch } from "redux";
import { ActionTypes } from "../action-types";

export const SetProducts = (products: []) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.SET_PRODUCTS,
      payload: products,
    });
  };
};

export const SelectedtProduct = (product: {}) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.SELECTED_PRODUCT,
      payload: product,
    });
  };
};
export const RemoveSelectedtProduct = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    });
  };
};
