import Navbar from "./components/Navbar";
import styles from "../styles/about.module.css";
import Image from "next/image";

const about = () => {
  return (
    <div className={styles.about}>
      <Navbar />
      <h2>Vibha Mishra</h2>
      <p>Intern at Unthinkable Solutions</p>
      <Image
        src="/../public/unthinkable.jpeg"
        width="400"
        height="400"
        alt=""
      />
    </div>
  );
};

export default about;
