import React from "react";
import "../app-info/appinfo.css";

const AppInfo = ({ allMoviesCount, favouriteMovieCount }) => {
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">All Movies Count: {allMoviesCount}</p>
      <p className="fs-4 text-uppercase">
        Favourity Films: {favouriteMovieCount}
      </p>
    </div>
  );
};

export default AppInfo;
