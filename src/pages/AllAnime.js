import { useSelector } from "react-redux";
import AnimeList from "../components/animeList/AnimeList";
import { useEffect, useState } from "react";

function AllAnime() {
  const [list2, setList2] = useState([]);
  useEffect(() => {
    async function topAnime() {
      const top = await fetch(
        `https://api.jikan.moe/v4/top/anime?q=bypopularity`
      ).then((res) => res.json());
      setList2(top.data);
    }
    topAnime();
  }, []);

  let list = useSelector((state) => state.searchBar.animeList);
  if (list.length === 0) list = list2;
  return <AnimeList list={list} />;
}

export default AllAnime;
