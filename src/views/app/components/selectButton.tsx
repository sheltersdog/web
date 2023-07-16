import { useState } from 'react';
import Calendar from 'react-calendar';
import { ReactComponent as Check } from '../../../assets/components/check.svg';
import { ReactComponent as SelectArrowButton } from '../../../assets/components/selectButtonArrow.svg';
import { BodyOut } from './bodyOut';
import styles from './components.module.scss';
import './calendar.scss';

const SingleSelectButton = ({ onChange, list, selectedIndex = 0 }: SingleSelectButtonParams) => {
  const [isVisible, setIsVisible] = useState(false)

  return <>
    <div className={`${styles.selectButtonWrapper} ${isVisible ? styles.isVisible : ''}`}>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`${styles.selectButton} ${styles.overflowHidden}`}
      >{list[selectedIndex]}
        <span className={styles.arrowButton}>
          <SelectArrowButton />
        </span>
      </button>
      <br />
      {
        <ul className={isVisible ? styles.active : ''}>
          {
            list.map((content: string, index: number) =>
              <li key={content}
                className={`${styles.selectButton} ${styles.list}`}
                onClick={() => {
                  setIsVisible(false)
                  onChange(index)
                }}>
                <span>
                  {content}
                </span>
                {(selectedIndex) === index ?
                  <span className={styles.selectCheck}>
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

const MultiSelectButton = ({ onChange, title, list, selectedIndexes }: MultiSelectButtonParams) => {
  const [isVisible, setIsVisible] = useState(false)

  return <>
    <div className={`${styles.selectButtonWrapper} ${isVisible ? styles.isVisible : ''}`}>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`${styles.selectButton} ${styles.overflowHidden}`}
      >{title}
        <span className={styles.arrowButton}>
          <SelectArrowButton />
        </span>
      </button>
      <br />
      {
        <ul className={isVisible ? styles.active : ''}>
          {
            list.length > 0
              ? list.map((content: string, index: number) =>
                <li key={content}
                  className={`${styles.selectButton} ${styles.list}`}
                  onClick={() => {
                    onChange(index)
                  }}>
                  <span>
                    {content}
                  </span>
                  {
                    selectedIndexes.length > 0 &&
                      selectedIndexes.includes(index) ?
                      <span className={styles.selectCheck}>
                        <Check />
                      </span>
                      : ''
                  }
                </li>
              ) : <li className={`${styles.selectButton} ${styles.list}`}>
                <span>{title}</span>
                <span className={styles.selectCheck}>
                  <Check />
                </span>
              </li>
          }
        </ul>
      }
    </div >

    {isVisible ? <BodyOut setIsVisible={setIsVisible} color='rgba(0,0,0,0)' /> : ''}
  </>
}

const CalendarSelectButton = ({ onChange, title, selectedDate }: CalendarSelectButtonParams) => {
  const [isVisible, setIsVisible] = useState(false)

  return <>
    <div className={`${styles.selectButtonWrapper} ${isVisible ? styles.isVisible : ''}`}>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`${styles.selectButton} ${styles.overflowHidden}`}
      >{title}
        <span className={styles.arrowButton}>
          <SelectArrowButton />
        </span>
      </button>
      <br />
      <Calendar
        className={`${isVisible ? styles.active : styles.disactive} ${styles.calendar}`}
        onClickDay={() => setIsVisible(!isVisible)}
        onChange={onChange}
        value={selectedDate}
      />
    </div>

    {isVisible ? <BodyOut setIsVisible={setIsVisible} color='rgba(0,0,0,0)' /> : ''}
  </>
}

export { SingleSelectButton, MultiSelectButton, CalendarSelectButton };

class SingleSelectButtonParams {
  readonly onChange?: any;
  readonly list: string[] = [];
  readonly selectedIndex: number = 0;
}

class MultiSelectButtonParams {
  readonly onChange?: any;
  readonly title: string = '';
  readonly list: string[] = [];
  readonly selectedIndexes!: number[];
}

class CalendarSelectButtonParams {
  readonly onChange?: any;
  readonly title: string = '날짜';
  readonly selectedDate: Date = new Date();
}