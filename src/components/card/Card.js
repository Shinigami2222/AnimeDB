import classes from "./Card.module.css";
import { useState } from "react";
import DetailModal from "../detailModal/DetailModal";
import Backdrop from "../backdrop/Backdrop";

function Card(props) {
  const data = {
    img: props.img,
    title: props.title,
    rating: props.rating,
    episodes: props.episodes,
    rank: props.rank,
    score: props.score,
    genres: props.genres,
    synopsis: props.synopsis,
  };
  let title = props.title;
  if (props.title.length > 55) {
    title = props.title.slice(0, 50);
    title += "...";
  }
  let url = "youtube.com";
  if (props.trailer != null && props.trailer.url != null) {
    url = props.trailer.url;
  }
  console.log(props);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  function decisionHandler() {
    setModalIsOpen(true);
  }
  function closeModularHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className={classes.card}>
      <img src={props.img} alt={title} className={classes.cardImg} />
      <div className={classes.data}>
        <p className={classes.animeTitle}>{title}</p>
        <div className={classes.btns}>
          <a href={url.includes("//") ? url : `//${url}`}>
            <button className={classes.btnTrailer}>Trailer</button>
          </a>
          <button className={classes.btnDetails} onClick={decisionHandler}>
            Details
          </button>
        </div>
      </div>
      {modalIsOpen && (
        <DetailModal data={data} onCancel={closeModularHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModularHandler} />}
    </div>
  );
}

export default Card;
