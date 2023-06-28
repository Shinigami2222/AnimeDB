import Card from "../card/Card";
import classes from "./AnimeList.module.css";

function AnimeList(props) {
  return (
    <ul className={classes.animeList}>
      {props.list.map((anime, key) => {
        return (
          <li key={anime.mal_id} className={classes.animeItem}>
            <Card
              img={anime.images.jpg.image_url}
              title={anime.title}
              rating={anime.rating}
              episodes={anime.episodes}
              rank={anime.rank}
              score={anime.score}
              genres={anime.genres}
              synopsis={anime.synopsis}
              trailer={anime.trailer}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default AnimeList;
