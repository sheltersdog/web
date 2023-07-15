import { useState } from 'react';
import { ReactComponent as FilterArrowButton } from '../../../assets/components/filterButtonArrow.svg';
import { ReactComponent as Check } from '../../../assets/components/check.svg';
import { BodyOut } from './bodyOut';
import styles from './components.module.scss';


const FilterButton = ({ onChange, list }: FilterButtonParams) => {
  const [selected, setSelected] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  return <>
    <div className={`${styles.filterButtonWrapper} ${isVisible ? styles.isVisible : ''}`}>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`${styles.filterButton} ${styles.overflowHidden}`}
      >{list[selected]}
        <span className={styles.arrowButton}>
          <FilterArrowButton />
        </span>
      </button>
      <br />
      {
        <ul className={isVisible ? styles.active : ''}>
          {
            list.map((content: string, index: number) =>
              <li key={content}
                className={`${styles.filterButton} ${styles.list}`}
                onClick={() => {
                  setIsVisible(false)
                  setSelected(index)
                  onChange(content)
                }}>
                <span>
                  {content}
                </span>
                {selected === index ?
                  <span className={styles.filterCheck}>
                    <Check />
                  </span>
                  : ''}
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