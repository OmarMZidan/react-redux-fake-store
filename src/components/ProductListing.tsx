import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../state/reducers";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const ProductListing = () => {
  const dispatch = useDispatch();
  const { SetProducts } = bindActionCreators(actionCreators, dispatch);
  const products = useSelector((state: State) => state.products);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      SetProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products: ", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
