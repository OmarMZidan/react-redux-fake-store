import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../state/reducers";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

interface ParamTypes {
  productId: string;
}

const ProductDetails = () => {
  const { productId } = useParams<ParamTypes>();
  const dispatch = useDispatch();
  const { SelectedtProduct, RemoveSelectedtProduct } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const product = useSelector((state: State) => state.product);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      console.log(response.data);
      SelectedtProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    return () => {
      RemoveSelectedtProduct();
    };
  }, [productId]);

  const { image, title, price, category, description } = product;

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
