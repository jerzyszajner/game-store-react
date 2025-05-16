import styles from "./Filter.module.css";
import { useState } from "react";

const Filter = ({ games, onGamesFilter }) => {
  const [filterOption, setFilterOption] = useState("");

  const handleFilterChange = (event) => {
    if (!games || games.length === 0) return;

    const filterValue = event.target.value;
    setFilterOption(filterValue);

    // Filtering games based on the selected option
    if (filterValue === "") {
      // If no filter option is selected, reset the filter and show all games
      onGamesFilter(games);
      return;
    }

    let filteredGames = [...games];

    switch (filterValue) {
      case "onSale":
        filteredGames = games.filter((game) => game.onSale === true);
        break;
      case "pc":
        filteredGames = games.filter(
          (game) => game.platforms && game.platforms["PC"] === true
        );
        break;
      case "xbox":
        filteredGames = games.filter(
          (game) => game.platforms && game.platforms["Xbox Series X"] === true
        );
        break;
      case "playStation":
        filteredGames = games.filter(
          (game) => game.platforms && game.platforms["PlayStation 5"] === true
        );
        break;
      case "stockAvailability":
        filteredGames = games.filter((game) => game.stockAvailability === true);
        break;
      default:
        filteredGames = games;
    }

    onGamesFilter(filteredGames);
  };

  return (
    <>
      <select
        name="filter"
        id="filter"
        className={styles.filter}
        value={filterOption}
        onChange={handleFilterChange}
      >
        <option value="">Filter By</option>
        <option value="onSale">On Sale</option>
        <option value="pc">PC</option>
        <option value="xbox">Xbox</option>
        <option value="playStation">PlayStation</option>
        <option value="stockAvailability">Stock Availability</option>
      </select>
    </>
  );
};

export default Filter;
