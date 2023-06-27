import classes from "./Card.module.css";
import { Link } from "react-router-dom";
import querystring from "querystring";

function Card(props) {
  const g = Object.assign({}, props.genres);
  const data = {
    img: props.img,
    title: props.title,
    rating: props.rating,
    episodes: props.episodes,
    rank: props.rank,
    score: props.score,
    genres: g,
    synopsis: props.synopsis,
  };
  let title = props.title;
  if (props.title.length > 55) {
    title = props.title.slice(0, 50);
    title += "...";
  }
  let url = "youtube.com";
  if (props.trailer !== undefined && props.trailer.url !== undefined) {
    url = props.trailer.url;
  }
  let dataString = querystring.stringify(data);
  const pageUrl = `/anime-details/${dataString}`;
  return (
    <div className={classes.card}>
      <img src={props.img} alt={title} className={classes.cardImg} />
      <div className={classes.data}>
        <p className={classes.animeTitle}>{title}</p>
        <div className={classes.btns}>
          <a href={url.includes("//") ? url : `//${url}`}>
            <button className={classes.btnTrailer}>Trailer</button>
          </a>
          <Link to={pageUrl}>
            <button className={classes.btnDetails}>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
