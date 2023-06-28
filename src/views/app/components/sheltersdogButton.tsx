import styles from './components.module.scss';

const SheltersDogButton = ({ onClick, content, isActive }: SheltersDogButtonParams) => {
  return <button
    onClick={onClick}
    className={`${styles.sheltersDogButton} ${isActive ? styles.active : ''}`}
  >{content}</button>
}

export default SheltersDogButton

class SheltersDogButtonParams {
  readonly onClick: any;
  readonly content: string = '';
  readonly isActive?: boolean = false;

}