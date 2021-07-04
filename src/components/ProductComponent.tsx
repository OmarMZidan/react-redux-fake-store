import React from "react";
import { useSelector } from "react-redux";
import { State } from "../state/reducers";
import { Link } from "react-router-dom";

interface ProductTypes {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
}

const ProductComponent = () => {
  const products = useSelector((state: State) => state.products.products);
  const renderList = products.map((product: ProductTypes) => {
    const { id, title, price, category, image } = product;
    return (
      <div className="four column wide" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
