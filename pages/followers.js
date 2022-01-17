import FollowersList from "./components/FollowersList";
import Navbar from "./components/Navbar";
import styles from "../styles/followers.module.css";

const followers = () => {
  return (
    <div className={styles.followers}>
      <Navbar />
      <FollowersList />
    </div>
  );
};

export default followers;
