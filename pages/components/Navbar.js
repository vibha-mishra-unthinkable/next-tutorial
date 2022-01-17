import styles from "../../styles/navbar.module.css";
import Link from "next/link";
import contact from "../contact";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbarLists}>
        <Link href="/" passHref>
          <li className={styles.navbarList}>
            <a>Home</a>
          </li>
        </Link>
        <Link href="/about" passHref>
          <li className={styles.navbarList}>
            <a>About</a>
          </li>
        </Link>
        <Link href="/contact" passHref>
          <li className={styles.navbarList}>
            <a>Contact</a>
          </li>
        </Link>
        <Link href="/followers" passHref>
          <li className={styles.navbarList}>
            <a>Followers</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
