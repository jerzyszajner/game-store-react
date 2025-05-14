import { Link } from "react-router-dom";
import styles from "./GameItem.module.css";
import Button from "../Button/Button";

const GameItem = ({ game }) => {
  return (
    <div className={styles.gameCard}>
      <div className={styles.gameContainer}>
        <img
          src={game.imageUrl}
          alt={game.title}
          className={styles.gameImage}
        />
      </div>
      {/* ----------------------- */}
      <h2 className={styles.gameTitle}>{game.title}</h2>
      <p className={styles.gameGenere}>
        <b>Game Genere</b> {game.genere}
      </p>
      {/* ----------------------- */}
      <p className={styles.gameYear}>
        <b>Year:</b> {game.releaseYear}
      </p>
      {/* ----------------------- */}
      <p className={styles.gameRating}>
        <b>Rating:</b> {game.rating}
      </p>
      {/* ----------------------- */}
      <p className={styles.gamePrice}>
        <b>Price:</b> {game.price}
      </p>
      {/* ----------------------- */}
      <Link to={`/games/${game.id}`} className={styles.gameLink}>
        Details
      </Link>
      <Button className={styles.addToCartBtn}>Add to cart</Button>
    </div>
  );
};

export default GameItem;
