import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router-dom";

const Banner = () => {
  const history = useHistory();
  const [showSearchDate, setShowSearchDate] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearchDate && <Search />}
        <Button
          className="banner__searchButton"
          variant="outlined"
          onClick={() => setShowSearchDate(!showSearchDate)}
        >
          {showSearchDate ? "Hide" : "Show Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination.</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined" onClick={() => history.push("/search")}>
          Explore Nearby{" "}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
