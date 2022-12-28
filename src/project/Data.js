import styles from "./Movie.module.css";
import { Link } from "react-router-dom";

function Data(props) {
  const movieRating = props.rating;
  function ratingStar(data) {
    if (data > 9) {
      return <p>⭐⭐⭐⭐⭐</p>;
    } else if (data > 8.8) {
      return <p>⭐⭐⭐⭐</p>;
    } else {
      return <p>⭐⭐</p>;
    }
  }

  return (
    <div className={styles.Container2}>
      <div>
        <img className={styles.Poster} src={props.url} alt=""></img>
      </div>
      <div>
        <div>
          <Link
            to={`/Movie/detail/${props.id}`}
          >{`Title : ${props.title} (${props.year})`}</Link>
        </div>
        <p>Genres : {props.genres.join(", ")}</p>
        {ratingStar(movieRating)}
      </div>
    </div>
  );
}

export default Data;
