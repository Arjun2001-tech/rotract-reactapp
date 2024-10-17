import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import OperationHeader from '@globalComps/HeaderFooter/OperationHeader';
import CreateClubs from './CreateClubs';
import CreateEvent from './CreateEvent';
import styles from '../AdminPage.module.less';
import { Icon } from 'semantic-ui-react';

const AdminLayout = (props) => {
  const { t } = props;
  const menuTabs = ['create_clubs', 'create_event'];
  const [activeTab, setActiveTab] = useState(menuTabs[0]);

  let Component = null;

  const compobj = {
    create_clubs: CreateClubs,
    create_event: CreateEvent,
  };
  Component = compobj[activeTab];

  return (
    <>
      <OperationHeader>
        <div className={styles.backContent}>
          <Icon
            name="arrow left"
            // onClick={() => {
            //   if (adminQb) {
            //     history.goBack();
            //   } else {
            //     history.push('/programmanager/services');
            //   }
            // }}
            size="large"
          />
          <span fontas="beta header">{t('back')}</span>
        </div>
      </OperationHeader>

      <div className={styles.admin_layout}>
        {/* <h2>{t('add_learners')}</h2> */}
        <div>
          {(menuTabs.map((tab, i) => (
            <div
              // fontas="alpha"
              className={menuTabs[i] === activeTab ? styles.activeTab : ''}
              onClick={() => setActiveTab(tab)}
              role="button"
              tabIndex={i + 1}
              onKeyDown={null}
              key={tab}
            >
              {t(tab)}
              {tab === activeTab && <div />}
            </div>
          )))}
        </div>
        {
          Component && (
            <Component
              {...props}
            // trackConfigId={trackConfigId}
            // batchid={batchid}
            // setActiveTab={setActiveTab}
            />
          )
        }
      </div>
    </>
  );
};

export default withTranslation('common')(AdminLayout);
