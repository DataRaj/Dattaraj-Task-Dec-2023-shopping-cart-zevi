import React, { useState, useEffect } from "react";
import "./products.scss";
import NavBar from "../components/Navbar";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import Results from "../components/Results";
import { ratingBox } from "../utilities/utilities";

import { ProductProps, FetchProducts } from "../fakeapi/FakeApi";

interface MultipleFilterType {
  brand: boolean[];
  rating: boolean[];
  price: boolean[];
}

export default function Products(){
  const [showBrandFilter, setShowBrandFilter] = useState(false);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showRatingFilter, setShowRatingFilter] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>(FetchProducts());
  const [multipleFilters, setMultipleFilters] = useState<MultipleFilterType>({
    brand: [false, false],
    price: [false, false],
    rating: [false, false, false, false, false],
  });

  const [tempProducts, setTempProducts] = useState<ProductProps[]>(
    FetchProducts()
  );

  useEffect(() => {
    setProducts(FetchProducts());
    setTempProducts(FetchProducts());
  }, []);

  useEffect(() => {
    let filteredData: ProductProps[] = [];

    let filter1Applied = false;
    let filter2Applied = false;
    let filter3Applied = false;

    if (multipleFilters.brand.includes(true)) {
      if (multipleFilters.brand[0]) {
        tempProducts.forEach((product) => {
          if (product.productName === "Incredible Frozen Table")
            filteredData.push(product);
        });
      }
      if (multipleFilters.brand[1]) {
        tempProducts.forEach((product) => {
          if (product.productName === "Tasty Wooden Car")
            filteredData.push(product);
        });
      }
      filter1Applied = true;
    }

    if (multipleFilters.rating.includes(true)) {
      for (let i = 0; i < multipleFilters.rating.length; i++) {
        if (multipleFilters.rating[i]) {
          tempProducts.forEach((product) => {
            if (product.productRating === i + 1) {
              filteredData.push(product);
            }
          });
        }
      }
      filter2Applied = true;
    }

    if (multipleFilters.price[0]) {
      tempProducts.forEach((product) => {
        if (product.productDisPrice < 500) {
          filteredData.push(product);
        }
      });

      filter3Applied = true;
    }

    if (multipleFilters.price[1]) {
      tempProducts.forEach((product) => {
        if (
          product.productDisPrice >= 1000 &&
          product.productDisPrice <= 3000
        ) {
          filteredData.push(product);
        }
      });
      filter3Applied = true;
    }

    if (filter1Applied || filter2Applied || filter3Applied) {
      setProducts(filteredData);
    } else {
      setProducts(tempProducts);
    }
  }, [multipleFilters, tempProducts]);

  console.log(multipleFilters);

  return (
    <div className="products_page">
      <NavBar />
      <h2>Search Results</h2>
      <div className="filter_and_result_container">
        <div className="filter_container">
          <div className="">
            <div
              onClick={() => setShowBrandFilter((prev) => !prev)}
              className="dropdown_container"
            >
              <div className="filter_title">BRAND</div>
              {showBrandFilter ? (
                <BiChevronUp size={24} />
              ) : (
                <BiChevronDown size={24} />
              )}
            </div>
            {showBrandFilter && (
              <div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.brand[0]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.brand];
                      updatedFilter[0] = !updatedFilter[0];
                      setMultipleFilters({
                        ...multipleFilters,
                        brand: updatedFilter,
                      });
                    }}
                  />
                  <label>Incredible Frozen Table</label>
                </div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.brand[1]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.brand];
                      updatedFilter[1] = !updatedFilter[1];
                      setMultipleFilters({
                        ...multipleFilters,
                        brand: updatedFilter,
                      });
                    }}
                  />
                  <label>Tasty Wooden Car</label>
                </div>
              </div>
            )}
          </div>
          <div className="filter_divider"></div>
          <div className="">
            <div
              onClick={() => setShowPriceFilter((prev) => !prev)}
              className="dropdown_container"
            >
              <div className="filter_title">PRICE RANGE</div>
              {showPriceFilter ? (
                <BiChevronUp size={24} />
              ) : (
                <BiChevronDown size={24} />
              )}
            </div>
            {showPriceFilter && (
              <div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.price[0]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.price];
                      updatedFilter[0] = !updatedFilter[0];
                      setMultipleFilters({
                        ...multipleFilters,
                        price: updatedFilter,
                      });
                    }}
                  />
                  <label>Under 500</label>
                </div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.price[1]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.price];
                      updatedFilter[1] = !updatedFilter[1];
                      setMultipleFilters({
                        ...multipleFilters,
                        price: updatedFilter,
                      });
                    }}
                  />
                  <label>1000 to 3000</label>
                </div>
              </div>
            )}
          </div>
          <div className="filter_divider"></div>
          <div className="">
            <div
              onClick={() => setShowRatingFilter((prev) => !prev)}
              className="dropdown_container"
            >
              <div className="filter_title">RATINGS</div>
              {showRatingFilter ? (
                <BiChevronUp size={24} />
              ) : (
                <BiChevronDown size={24} />
              )}
            </div>
            {showRatingFilter && (
              <div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.rating[4]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.rating];
                      updatedFilter[4] = !updatedFilter[4];
                      setMultipleFilters({
                        ...multipleFilters,
                        rating: updatedFilter,
                      });
                    }}
                  />
                  <label>{ratingBox(5)}</label>
                </div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.rating[3]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.rating];
                      updatedFilter[3] = !updatedFilter[3];
                      setMultipleFilters({
                        ...multipleFilters,
                        rating: updatedFilter,
                      });
                    }}
                  />
                  <label>{ratingBox(4)}</label>
                </div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.rating[2]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.rating];
                      updatedFilter[2] = !updatedFilter[2];
                      setMultipleFilters({
                        ...multipleFilters,
                        rating: updatedFilter,
                      });
                    }}
                  />
                  <label>{ratingBox(3)}</label>
                </div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.rating[1]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.rating];
                      updatedFilter[1] = !updatedFilter[1];
                      setMultipleFilters({
                        ...multipleFilters,
                        rating: updatedFilter,
                      });
                    }}
                  />
                  <label>{ratingBox(2)}</label>
                </div>
                <div className="input_label_container">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.rating[0]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.rating];
                      updatedFilter[0] = !updatedFilter[0];
                      setMultipleFilters({
                        ...multipleFilters,
                        rating: updatedFilter,
                      });
                    }}
                  />
                  <label>{ratingBox(1)}</label>
                </div>
              </div>
            )}
          </div>
        </div>
        <Results products={products} />
      </div>
    </div>
  );
};

