import styles from './components.module.scss';

const SheltersDogTag = ({ onClick, content, isActive }: SheltersDogTagParams) => {
  return <button
    onClick={onClick}
    className={`${styles.sheltersDogTag} ${isActive ? styles.active : ''}`}
  >{content}</button>
}

export default SheltersDogTag

class SheltersDogTagParams {
  readonly onClick: any;
  readonly content: string = '';
  readonly isActive?: boolean = false;

}