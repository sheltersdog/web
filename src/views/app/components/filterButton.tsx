import { useState } from 'react';
import { ReactComponent as FilterArrowButton } from '../../../assets/components/filterButtonArrow.svg';
import { BodyOut } from './bodyOut';
import styles from './components.module.scss';


const FilterButton = ({ onChange, list }: FilterButtonParams) => {
  const [selected, setSelected] = useState(list[0])
  const [isVisible, setIsVisible] = useState(false)

  return <>
    <div className={`${styles.filterButtonWrapper} ${isVisible ? styles.isVisible : ''}`}>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={styles.filterButton}
      >{selected}
        <FilterArrowButton />
      </button>
      <br />
      {
        <ul className={isVisible ? styles.active : ''}>
          {
            list.map((content: string) =>
              <li key={content}
                className={styles.filterButton}
                onClick={() => {
                  setIsVisible(false)
                  setSelected(content)
                  onChange(content)
                }}>
                {content}
              </li>
            )
          }
        </ul>
      }

    </div >

    {isVisible ? <BodyOut setIsVisible={setIsVisible} color='rgba(0,0,0,0)' /> : ''}
  </>
}

export default FilterButton

class FilterButtonParams {
  readonly onChange?: any;
  readonly list: string[] = [];
}