import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Grid, Icon, Popup } from 'semantic-ui-react';
import ClubsSideNav from './ClubsSideNav';
import Members from './Members';
import '../RegionClubs.css';
// import styles from './BatchInfolayout.module.less';

const ClubsLayout = (props) => {
  const { t } = props

  const menuTabs = ['clubs_home', 'members', 'event'];
  const iconNames = {
    clubs_home: 'home',
    members: 'users',
    event: 'calendar alternate',
  };
  const [activeTab, setActiveTab] = useState(menuTabs[0]);

  let Component = null;

  const compobj = {
    clubs_home: Members,
    members: Members,
    event: Members,
  };

  Component = compobj[activeTab];

  return (
    <div className="clubsLayout">
      <Grid columns={2}>
        <Grid.Column computer={1} tablet={4} mobile={1}>
          <div>
            {(menuTabs.map((tab, i) => (
              // <div
              //   // fontas="alpha"
              //   className={menuTabs[i] === activeTab ? "Batch" : ''}
              //   onClick={() => setActiveTab(tab)}
              //   role="button"
              //   tabIndex={i + 1}
              //   onKeyDown={null}
              //   key={tab}
              // >
              //   {t(tab)}
              //   {tab === activeTab && <div />}
              // </div>
              <Popup
                key={tab}
                basic
                content={t(`${tab}`)}
                trigger={(
                  <Icon
                    name={iconNames[tab]}
                    size="big"
                    inverted={activeTab === tab}
                    // className={activeTab === tab ? styles.activeTabIcon : ''}
                    className={menuTabs[i] === activeTab ? "Batch" : ''}
                    onClick={() => setActiveTab(tab)}
                  />
                )}
              />
            )))}
          </div>
        </Grid.Column>
        <Grid.Column computer={15} tablet={12} mobile={15}>
          {
            // (Component && !isLoading) ? (
            <Component
            // batch_id={batch_id}
            // stream_id={stream_id}
            // setActiveTab={setActiveTab}
            />
            // ) : <DefaultLoader />
          }
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default withTranslation('common')(ClubsLayout);
