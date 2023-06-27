import { useState } from "react";
import classes from "./Navbar.module.css";
import { useDispatch } from "react-redux";
import { setAnimeList } from "../../redux/searchBar";
import { Link } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState("");

  async function onSubmitHandler(event) {
    event.preventDefault();

    const data = await fetch(
      `https://api.jikan.moe/v4/anime?q=${inputName}&order_by=title&sort=asc`
    ).then((res) => res.json());

    dispatch(setAnimeList({ list: data, animeName: inputName }));

    setInputName("");
  }

  return (
    <div className={classes.navbar}>
      <Link to="/" className={classes.heading}>
        <p>AnimeDB</p>
      </Link>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <label>
          <input
            id="animeNameInput"
            type="text"
            placeholder="Search"
            value={inputName}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
          <button className={classes.btn}>Search</button>
        </label>
      </form>
    </div>
  );
}

export default Navbar;
