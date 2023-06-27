import { useParams } from "react-router-dom";
import classes from "./AnimeDetail.module.css";

function AnimeDetail() {
  const d = useParams();
  // const data = querystring.parse(d);
  const getQueryStringParams = (query) => {
    return query
      ? (/^[?#]/.test(query) ? query.slice(1) : query)
          .split("&")
          .reduce((params, param) => {
            let [key, value] = param.split("=");
            params[key] = value
              ? decodeURIComponent(value.replace(/\+/g, " "))
              : "";
            return params;
          }, {})
      : {};
  };
  const data = getQueryStringParams(d.data);
  return (
    <div className={classes.details}>
      <img
        src={data ? data.img : "https://en.wikipedia.org/wiki/Image"}
        alt={data ? data.title : "TitleHuha"}
        className={classes.img}
      />
      <div className={classes.data}>
        <p className={classes.title}>{data ? data.title : "TitleHuha"}</p>
        <hr />
        <div className={classes.ratingNdAll}>
          <div>
            <p className={classes.ratingNdAll__heading}>Rating</p>
            <p className={classes.ratingNdAll__content}>
              {data ? data.rating : "TitleHuha"}
            </p>
          </div>
          <div>
            <p className={classes.ratingNdAll__heading}>Episodes</p>
            <p className={classes.ratingNdAll__content}>
              {data ? data.episodes : "episodesHuha"}
            </p>
          </div>
          <div>
            <p className={classes.ratingNdAll__heading}>Rank</p>
            <p className={classes.ratingNdAll__content}>
              {data ? data.rank : "rankHuha"}
            </p>
          </div>
          <div>
            <p className={classes.ratingNdAll__heading}>Score</p>
            <p className={classes.ratingNdAll__content}>
              {data ? data.score : "scoreHuha"}
            </p>
          </div>
        </div>
        <hr />
        <p className={classes.genres}>genres:</p>
        <ul className={classes.genreList}>
          <li>Action</li>
          <li>Adventure</li>
          <li>Suspense</li>
          <li>Fantasy</li>
        </ul>
        <hr />
        <p className={classes.synopsis}>{data ? data.synopsis : "synopsis"}</p>
      </div>
    </div>
  );
}

export default AnimeDetail;
