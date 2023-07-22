import styles from '../components/components.module.scss';

const SheltersdogButton = ({
  status = SheltersdogButtonStatus.ACTIVE,
  size = SheltersdogButtonSize.BIG,
  text = '버튼',
  onClick = () => { },
}: any) => {
  const buttonStyle =
    status === SheltersdogButtonStatus.ACTIVE
      ? styles.active
      : status === SheltersdogButtonStatus.INACTIVE
        ? styles.inactive
        : styles.disemphasis

  const sizeStyle = size === SheltersdogButtonSize.BIG ? styles.big : styles.medium

  return <div
    className={`${styles.sheltersdogButton} ${buttonStyle} ${sizeStyle}`}
    onClick={onClick}
  >
    <span>{text}</span>
  </div>
}

enum SheltersdogButtonSize {
  MEDIUM = 'MEDIUM',
  BIG = 'BIG',
}

enum SheltersdogButtonStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DISEMPHASIS = 'DISEMPHASIS',
}

export default SheltersdogButton