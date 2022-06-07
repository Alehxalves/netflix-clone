import React from "react";
import "./Banner.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function MovieDescription({ movie, isLargeRow }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseUrl}${
          isLargeRow ? movie.backdrop_path : movie.poster_path
        })`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.tittle || movie?.name || movie?.orignal_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 250)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default MovieDescription;
