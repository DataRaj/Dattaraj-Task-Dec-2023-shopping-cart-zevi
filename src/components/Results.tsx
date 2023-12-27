import React from "react";
import "./results.scss";

import { ProductProps } from "../fakeapi/FakeApi";
import ProductItem from "./ProductData";

interface ProductsInterface {
  products: ProductProps[];
}

export default function ProductsResults({ products }: ProductsInterface){
  return (
    <>
      {products.length <= 0 ? (
        <div className="no_results">No Results Found !!!</div>
      ) : (
        <div className="product_results_container">
          {products.map((product, i) => {
            return <ProductItem key={i} product={product} />;
          })}
        </div>
      )}
    </>
  );
};

