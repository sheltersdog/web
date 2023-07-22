import styles from './components.module.scss';
import SheltersDogTag from './sheltersdogTag';
import { ReactComponent as Alarm } from '../../../assets/components/alarm.svg'
import { ReactComponent as Calender } from '../../../assets/components/calendar.svg'
import { ReactComponent as CheckCircle } from '../../../assets/components/checkCircle.svg'
import { ReactComponent as Location } from '../../../assets/components/location.svg'
import React from 'react';
import SizedBox from './sizedBox';
import { Link } from 'react-router-dom';

const VolunteerCard = ({ onClick, entity }: VolunteerCardParam) => {

  return <div className={styles.volunteerCard}>
    <SheltersDogTag onClick={() => { }} content={entity.term} isActive />
    {entity.types.map((content: string, index: number) =>
      <React.Fragment key={index}>
        <SizedBox width='3px' height='3px'/>
        <SheltersDogTag onClick={() => { }} content={content} />
      </React.Fragment>
    )}
    <SizedBox height='6px' />
    <span className={styles.shelterName}>{entity.shelter.name}</span><br />
    <SizedBox height='12px' />
    <div className={styles.info}>
      <div className={styles.volunteerInfo}>
        <div><span><Location /></span>&nbsp;{entity.location}</div>
        <div><span><Calender /></span>&nbsp;{entity.duration}</div>
        <div><span><CheckCircle /></span>&nbsp;{entity.day}</div>
        <div><span><Alarm /></span>&nbsp;{entity.time}</div>
      </div>
      <div style={{
        display: 'inline-block',
        width: '20%',
        minWidth: '10px',
        maxWidth: '100px',
        height: '14px'
      }} />
      <div className={styles.content}>{entity.content}</div>
    </div>
    <div className={styles.detailButton}><Link to={entity.url} target='_blank'><span>자세히보기</span></Link></div>
  </div>
}

export default VolunteerCard

class VolunteerCardParam {
  readonly onClick: any;
  readonly entity: any;
}