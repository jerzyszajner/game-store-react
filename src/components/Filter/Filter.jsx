import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <>
      <select name="filter" id="filter" className={styles.filter}>
        <option value="">Filter By</option>
        <option value="onSale">On Sale</option>
        <option value="pc">PC</option>
        <option value="xbox">Xbox</option>
        <option value="playStation">PlayStation</option>
      </select>
    </>
  );
};

export default Filter;
