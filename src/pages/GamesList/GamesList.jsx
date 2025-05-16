import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import Sort from "../../components/Sort/Sort";
import GameItem from "../../components/GameItem/GameItem";
import { useFetchGames } from "../../hooks/useFeatchGames";
import styles from "./GamesList.module.css";

const GamesList = () => {
  const originalGames = useFetchGames();
  const [filteredGames, setFilteredGames] = useState([]);
  const [displayedGames, setDisplayedGames] = useState([]);

  // Display all games when the component mounts
  useEffect(() => {
    if (originalGames.length > 0) {
      setFilteredGames(originalGames);
      setDisplayedGames(originalGames);
    }
  }, [originalGames]);

  // Function to handle the filtered games from the Filter component
  const handleFilteredGames = (filteredGames) => {
    setFilteredGames(filteredGames);
    setDisplayedGames(filteredGames);
  };

  // Function to handle the sorted games from the Sort component
  const handleSortedGames = (sortedGames) => {
    setDisplayedGames(sortedGames);
  };

  return (
    <div className={styles.gamesWrapper}>
      <div className={styles.sortFilterContainer}>
        <Sort games={originalGames} onGamesSort={handleSortedGames} />
        <Filter games={originalGames} onGamesFilter={handleFilteredGames} />
      </div>
      <ul className={styles.gamesContainer}>
        {displayedGames.length > 0
          ? displayedGames.map((game) => <GameItem key={game.id} game={game} />)
          : originalGames.map((game) => <GameItem key={game.id} game={game} />)}
      </ul>
    </div>
  );
};

export default GamesList;
