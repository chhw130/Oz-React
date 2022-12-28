import React, { useState, useEffect } from "react";
import Data from "./Data";
import styles from "./Movie.module.css";
function Movie() {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const URL =
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";
    fetch(URL)
      .then((datas) => datas.json())
      .then((datas) => setMovieData(datas.data.movies));
      setLoading(false);

  }, []);


  return (
    <>
      <div className={styles.MainTitle}>
        <div className={styles.Title}>Movie Cenema</div>
        {loading ? <h1>Loading...</h1> : null}
      </div>
      <div className={styles.Container}>
        {movieData.map((el) => {
          return (
            <Data
              key={Math.random()}
              title={el.title}
              id={el.id}
              url={el.large_cover_image}
              genres={el.genres}
              year={el.year}
              rating = {el.rating}
            />
          );
        })}
      </div>
    </>
  );
}

export default Movie;
