import Navbar from "./components/Navbar";
import styles from "../styles/contact.module.css";
const contact = () => {
  return (
    <div className={styles.contact}>
      <Navbar />
      Contact Details :{" "}
      <a href="mailto:vibha.mishra@unthinkable.co">
        vibha.mishra@unthinkable.co
      </a>
    </div>
  );
};

export default contact;
