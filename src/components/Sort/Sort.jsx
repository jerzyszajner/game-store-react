import { useState } from "react";
import styles from "./Sort.module.css";

const Sort = ({ games, onGamesSort }) => {
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (event) => {
    if (!games || games.length === 0) return;

    const sortValue = event.target.value;
    setSortOption(sortValue);

    // Sort the games based on the selected option
    const sortedGames = [...games];

    switch (sortValue) {
      case "name":
        sortedGames.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "highestPrice":
        sortedGames.sort((a, b) => b.price - a.price);
        break;
      case "lowestPrice":
        sortedGames.sort((a, b) => a.price - b.price);
        break;
      case "year":
        sortedGames.sort((a, b) => b.releaseYear - a.releaseYear);
        break;
      case "rating":
        sortedGames.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // If no sort option is selected, keep the original order
        break;
    }

    // Call the parent component's function to update the displayed games
    onGamesSort(sortedGames);
  };

  return (
    <>
      <select
        name="sort"
        id="sort"
        className={styles.sort}
        value={sortOption}
        onChange={handleSortChange}
      >
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="highestPrice">Highest Price</option>
        <option value="lowestPrice">Lowest Price</option>
        <option value="year">Year</option>
        <option value="rating">Rating</option>
      </select>
    </>
  );
};

export default Sort;
