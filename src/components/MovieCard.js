import React from "react";
import "./index.scss";

function MovieCard({ Item }) {
  return (
    <div className="movie-card">
      <div className="move-sub">
        <div className="arrow-container">
          <p className="arrow up"></p>
          <p>{Item.voting}</p>
          <p className="arrow down"></p>
          <p className="vote-text">votes</p>
        </div>

        <div>
          <p className="movie-name">{Item.title}</p>
          <p className="subNames">
            Gender : <span className="spanel">{Item.genre}</span>
          </p>
          <p className="subNames">
            director : <span className="spanel">{Item.director[0]}</span>
          </p>
          <p className="subNames">
            starring: <span className="spanel">{Item.stars[0]}</span>
          </p>
          <p className="total-views">
            <span>{Item.pageViews} votes </span>
            <span className="vertical"></span>
            <span>vote by {Item.totalVoted} people</span>
          </p>
        </div>
      </div>
      <button className="button-el">Watch trailer</button>
    </div>
  );
}

export default MovieCard;
