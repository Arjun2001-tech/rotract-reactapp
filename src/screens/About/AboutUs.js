import React from 'react';
import { withTranslation } from 'react-i18next';
import styles from './AboutUs.module.less';

const AboutUs = () => {

  return (
    <div className={styles.about_us}>
      AboutUs
    </div>
  );
};

export default withTranslation('common')(AboutUs);
