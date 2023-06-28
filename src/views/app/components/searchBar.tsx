import styles from './components.module.scss';
import SearchInput from "./searchInput";


const SearchBar = ({ onChange, cancel }: SearchBarParam) => {

  return <div className={`${styles.searchBarWrapper}`}>
    <div className={styles.searchBar}>
      <SearchInput
        onChange={onChange}
        placeHolder="어떤 봉사를 찾으시나요?"
      />
    </div>
    <span className={styles.cancelButton} onClick={cancel}>취소</span>
  </div>
}

export default SearchBar

class SearchBarParam {
  readonly onChange: any;
  readonly cancel: any;
}