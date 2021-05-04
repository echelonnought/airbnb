import React, { useState, useEffect } from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import axios from "./axios";

const Home = () => {
  const [firstRowCards, setFirstRowCards] = useState([]);
  const [secondRowCards, setSecondRowCards] = useState([]);

  useEffect(() => {
    async function fetchFirstAndSecondRowData() {
      const response = await axios.get("/v2/feed");

      const firstRowData = response.data[0].firstRow;
     console.log(firstRowData)
      const secondRowData = response.data[0].secondRow;
      const firstRow = firstRowData.map((firstRowCardData) => ({
        key: firstRowCardData._id,
        src: firstRowCardData.src,
        title: firstRowCardData.title,
        description: firstRowCardData.description,
      }));
      const secondRow = secondRowData.map((secondRowCardData) => ({
        key: secondRowCardData._id,
        src: secondRowCardData.src,
        title: secondRowCardData.title,
        description: secondRowCardData.description,
        price: secondRowCardData.price,
      }));

      setFirstRowCards(firstRow);
      setSecondRowCards(secondRow);
      return response;
    }

    fetchFirstAndSecondRowData();
  }, []);

  return (
    <div className="home">
      {/* <h1>Home component</h1> */}
      <Banner />
      <div className="home__section">
        {firstRowCards.map(({ key, src, title, description }) => (
          <Card key={key} src={src} title={title} description={description} />
        ))}
      </div>

      <div className="home__section">
        {secondRowCards.map(({ key, src, title, description, price }) => (
          <Card
            key={key}
            src={src}
            title={title}
            description={description}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
