import { useState } from "react";

import classes from "./Header.module.css";
import { logo } from "../assets";
import { Link } from "react-router-dom";
//--------------------------------------------
//--------------------------------------------
const Header = () => {
  const [actie, setActive] = useState("");

  const date = new Date();

  return (
    <header className={classes["header"]}>
      <div className={classes["header-cont"]}>
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img className={classes["logo"]} src={logo} alt="company logo" />
        </Link>

        <nav>
          <ul className={classes["nav-links"]}>
            <li
              className={`${
                actie === "szolgáltatások" ? classes.active : classes.inactive
              } ${classes["nav-link"]}`}
              onClick={() => setActive("szolgáltatások")}
            >
              <a href="#services">Szolgáltatások</a>
            </li>
            <li
              className={`${
                actie === "kapcsolat" ? classes.active : classes.inactive
              } ${classes["nav-link"]}`}
              onClick={() => setActive("kapcsolat")}
            >
              <a href="#contact">Kapcsolat</a>
            </li>
            <li className={classes.date}>
              <small>| {date.getFullYear()}</small>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

//--------------------------------------------
export default Header;
