import styles from "./header.module.css";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.container}>
      <Link to="/">
        <img src={logo} alt="Logo Cripto App" />
      </Link>
    </header>
  );
}
