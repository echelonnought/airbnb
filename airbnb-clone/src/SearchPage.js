import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResults from "./SearchResults";
import axios from "./axios";

const SearchPage = () => {
  const [resultsPageCards, setResultsPageCards] = useState([]);

  useEffect(() => {
    async function getResultsPageCard() {
      const response = await axios.get("/v2/feed");
      const resultsPageData = response.data[0].resultsPage;
      const resultsPage = resultsPageData.map((resultsPageDatum) => ({
        key: resultsPageDatum._id,
        img: resultsPageDatum.img,
        location: resultsPageDatum.location,
        title: resultsPageDatum.title,
        star: resultsPageDatum.star,
        price: resultsPageDatum.price,
        total: resultsPageDatum.total,
      }));
      setResultsPageCards(resultsPage);

      return response;
    }
    getResultsPageCard();
  }, []);

  return (
    <div className="searchPage">
      {/* <h1>Look, I am the search you're looking for</h1> */}
      <div className="searchPage__info">
        <p> 62 stays . 26 November to 11 March . 2 guests</p>
        <h1>Stays nearby</h1>

        <Button variant="outlined">Cancelation flexibility</Button>

        <Button variant="outlined">Type of place</Button>

        <Button variant="outlined">Price</Button>

        <Button variant="outlined">Rooms and beds</Button>

        <Button variant="outlined">More Filters</Button>
      </div>

      {resultsPageCards.map(
        ({ key, img, location, title, description, star, price, total }) => (
          <SearchResults
            key={key}
            img={img}
            location={location}
            title={title}
            description={description}
            star={star}
            price={price}
            total={total}
          />
        )
      )}
    </div>
  );
};

export default SearchPage;
