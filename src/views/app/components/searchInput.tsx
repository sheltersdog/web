import { useState } from 'react';
import { ReactComponent as RemoveCircle } from '../../../assets/components/removeCircle.svg';
import styles from './components.module.scss';

const SearchInput = ({ onChange, placeHolder }: SearchInputParam) => {
  const [inputText, setInputText] = useState('')

  const removeInputText = () => setInputText('')
  const onChangeWrapper = (e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)
  const onKeyDownWrapper = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onChange(inputText)
  }

  return <div className={styles.searchInputWrapper}>
    <input
      placeholder={placeHolder}
      className={styles.searchInput}
      type="text"
      value={inputText}
      onChange={onChangeWrapper}
      onKeyDown={onKeyDownWrapper}
    />
    {inputText !== '' ? <RemoveCircle
      className={styles.removeCircle}
      onClick={removeInputText} /> : <></>}
  </div>
}

export default SearchInput

class SearchInputParam {
  readonly onChange: any;
  readonly placeHolder: string = '어떤 봉사를 찾으시나요?';
}