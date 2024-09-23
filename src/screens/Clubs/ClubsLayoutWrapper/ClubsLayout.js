import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Grid, Icon, Popup } from 'semantic-ui-react';
import Members from './Members';
import '../RegionClubs.css';
import ClubsHome from './ClubsHome';
import Event from './Event';
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
    clubs_home: ClubsHome,
    members: Members,
    event: Event,
  };

  Component = compobj[activeTab];

  return (
    <div className="clubsLayout">
      <Grid columns={2}>
        <Grid.Column computer={1} tablet={4} mobile={1}>
          <div>
            {(menuTabs.map((tab, i) => (
              <Popup
                key={tab}
                basic
                content={t(`${tab}`)}
                trigger={(
                  <Icon
                    name={iconNames[tab]}
                    size="big"
                    inverted={activeTab === tab}
                    className={menuTabs[i] === activeTab ? "activeTabIcon" : ''}
                    onClick={() => setActiveTab(tab)}
                  />
                )}
              />
            )))}
          </div>
        </Grid.Column>
        <Grid.Column computer={15} tablet={12} mobile={15}>
          {
            <Component />
          }
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default withTranslation('common')(ClubsLayout);
