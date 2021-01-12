import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Card from "../../shared/Card";

class FavoriteIndex extends Component {
  render() {
    // const objCards = [
    //   { id: 1, name: "TOKOPEDIA" },
    //   { id: 2, name: "BUKALAPAK" },
    //   { id: 3, name: "PT ABADI JAYA" },
    // ];
    return (
      <div className="favourite-menu">
        <p className="title">FAVORITE</p>
        <hr />
        <div className="row">
          {/* {objCards.map((res, i) => (
            <Link
              className="col-md-6 mb-3"
              to={`company-list/detail/${res.id}`}
              key={i}
            >
              <Card name={res.name} />
            </Link>
          ))} */}
        </div>
      </div>
    );
  }
}

export default FavoriteIndex;
