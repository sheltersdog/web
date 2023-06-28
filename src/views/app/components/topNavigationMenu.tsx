import { Link } from 'react-router-dom';
import styles from './components.module.scss';

const TopNavigationMenu = ({ link, content, isActive }: TopNavigationMenuParams) => {
  return <Link to={link}
    className={`${isActive ? styles.active : ''} ${styles.topNavigationWord}`}
  >{content}
  </Link>
}

export default TopNavigationMenu

class TopNavigationMenuParams {
  readonly content: string = '';
  readonly link: string = '';
  readonly isActive?: boolean = false;
}