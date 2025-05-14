import Filter from "../../components/Filter/Filter";
import Sort from "../../components/Sort/Sort";
import GameItem from "../../components/GameItem/GameItem";
import { useFetchGames } from "../../hooks/useFeatchGames";
import styles from "./GamesList.module.css";

const GamesList = () => {
  const games = useFetchGames();
  return (
    <div className={styles.gamesWrapper}>
      <div className={styles.sortFilterContainer}>
        <Sort />
        <Filter />
      </div>
      {/* ----------------------- */}
      <ul className={styles.gamesContainer}>
        {games.map((game) => (
          <GameItem key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
};

export default GamesList;
