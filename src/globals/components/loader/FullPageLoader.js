import React from 'react';
import { Dimmer } from 'semantic-ui-react';
import styles from './FullPageLoader.module.less';

function FullPageLoader() {
  return (
    <Dimmer active page blurring="true" id="fullPageLoader">
      <div className={styles.df_loading_grid}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </Dimmer>
  );
}

export default FullPageLoader;
