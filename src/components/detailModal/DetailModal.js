import classes from "./DetailModal.module.css";
import { FaArrowLeft } from "react-icons/fa";

function DetailModal(props) {
  let synopsis2_0 = "";
  console.log(props.data.synopsis);
  if (!props.data.synopsis) {
    synopsis2_0 =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laboriosam maiores unde nisi, architecto labore alias facilis debitis saepe nesciunt, incidunt assumenda ab provident laborum dolores nobis ullam optio ipsum.";
  } else if (props.data.synopsis.length < 100) {
    synopsis2_0 +=
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate laboriosam maiores unde nisi, architecto labore alias facilis debitis saepe nesciunt, incidunt assumenda ab provident laborum dolores nobis ullam optio ipsum.";
  } else {
    synopsis2_0 = props.data.synopsis;
  }
  return (
    <div className={classes.details}>
      <FaArrowLeft className={classes.arrow} onClick={props.onCancel} />
      <img
        src={
          props.data.img
            ? props.data.img
            : "https://en.wikipedia.org/wiki/Image"
        }
        alt={props.data.title ? props.data.title : "TitleHuha"}
        className={classes.img}
      />
      <div className={classes.data}>
        <p className={classes.title}>
          {props.data.title ? props.data.title : "Title"}
        </p>
        <hr />
        <div className={classes.ratingNdAll}>
          <div>
            <p className={classes.ratingNdAll__heading}>Rating</p>
            <p className={classes.ratingNdAll__content}>
              {props.data.rating ? props.data.rating : "NIL"}
            </p>
          </div>
          <div>
            <p className={classes.ratingNdAll__heading}>Episodes</p>
            <p className={classes.ratingNdAll__content}>
              {props.data.episodes ? props.data.episodes : "NIL"}
            </p>
          </div>
          <div>
            <p className={classes.ratingNdAll__heading}>Rank</p>
            <p className={classes.ratingNdAll__content}>
              {props.data.rank ? props.data.rank : "NIL"}
            </p>
          </div>
          <div>
            <p className={classes.ratingNdAll__heading}>Score</p>
            <p className={classes.ratingNdAll__content}>
              {props.data.score ? props.data.score : "NIL"}
            </p>
          </div>
        </div>
        <hr />
        <p className={classes.genres}>genres:</p>
        <ul className={classes.genreList}>
          {props.data.genres.map((genre) => {
            return <li>{genre.name}</li>;
          })}
        </ul>
        <hr />
        <p className={classes.synopsis}>{synopsis2_0}</p>
      </div>
    </div>
  );
}

export default DetailModal;
