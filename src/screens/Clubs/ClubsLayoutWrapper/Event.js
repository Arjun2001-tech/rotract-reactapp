import React from 'react';
import { withTranslation } from 'react-i18next';
import styles from '../RegionClubs.module.less';

const Event = () => (
  <div className={styles.ClubMembers}>
    <h1>Event</h1>
  </div>
);

export default withTranslation('common')(Event);
