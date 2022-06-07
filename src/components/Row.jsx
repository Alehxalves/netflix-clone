import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import MovieDescription from "./MovieDescription";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [showDescription, setShowDecription] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (showDescription) {
      setShowDecription(false);
    } else {
      setShowDecription(true);
      setMovie(movie);
      console.log(isLargeRow);
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {showDescription && (
        <MovieDescription movie={movie} isLargeRow={isLargeRow} />
      )}
    </div>
  );
}

export default Row;
