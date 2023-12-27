import React, { useState } from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

import { RiSearch2Line } from "react-icons/ri";

import home_bg from "../themes/PNGs/home_bg.png";
import HomeHeader from "../components/HomeHeader";
import {
  LatestTrendType,
  SuggestionType,
  fetchLatestTrendData,
  fetchSuggestionData,
} from "../FakerData/FakerData";

const Home = () => {
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const [latestTrendsData, setLatestTrendsData] = useState<LatestTrendType[]>();
  const [suggestionData, setSuggestionData] = useState<SuggestionType[]>();

  const navigate = useNavigate();

  const getBoxProducts = () => {
    setShowSuggestionBox((prev) => !prev);
    setLatestTrendsData(fetchLatestTrendData());
    setSuggestionData(fetchSuggestionData());
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    navigate("/products");
  };

  const navigateToProductsPage = () => {
    navigate("/products");
  };

  return (
    <div style={{ backgroundImage: `url(${home_bg})` }} className="home">
      <HomeHeader />
      <div className="home_content">
        <form className="input_container" onSubmit={(e) => onSubmitHandler(e)}>
          <input
            onClick={() => getBoxProducts()}
            type="text"
            className="home_input"
            placeholder="Search..."
          />
          <button className="search_icon_container">
            <RiSearch2Line size="24" />
          </button>
        </form>
        {showSuggestionBox && (
          <div className="latest_trend_and_suggestion_box">
            <div className="latest_trend_box">
              <div className="category_title">Latest Trends</div>
              <div className="latest_trend_products">
                {latestTrendsData?.map((product, i) => {
                  return (
                    <div
                      key={i}
                      className="latest_trend_product"
                      onClick={navigateToProductsPage}
                    >
                      <img src={product.productImg} alt="" />
                      <div>{product.productName}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="category_title">Popular Suggestion</div>
              <div>
                {suggestionData?.map((product, i) => {
                  return (
                    <div
                      key={i}
                      className="suggestion_product"
                      onClick={navigateToProductsPage}
                    >
                      {product.productName}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
