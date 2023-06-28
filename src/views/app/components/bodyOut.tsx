import styles from './components.module.scss';

export const BodyOut = ({ setIsVisible, color = 'rgba(0, 0, 0, 0.65)' }: any) => {
  return <div
    style={{ backgroundColor: color }}
    className={styles.bodyOut}
    onClick={() => setIsVisible(false)}>
  </div>
}