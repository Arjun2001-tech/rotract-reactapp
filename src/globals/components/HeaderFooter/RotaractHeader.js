import React from 'react';
import { withTranslation } from 'react-i18next';
import { Image } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import styles from './HeaderAndFooter.module.less';
// import logo from '../../assets/Images/rotary-district-3000-logo.svg'

const RotaractHeader = (props) => {
  const { t } = props;
  const menuTabs = ['home', 'about', 'clubs', 'admin'];

  const history = useHistory();

  return (
    <>
      <div className={styles.rotaract_header}>
        <div>
          <Image
            src="https://www.nicepng.com/png/full/380-3802815_rotaract-logo-png.png"
          // onClick={() => handleNavigation('/')}
          />
          <div>
            <h2>ROTARACT DISTRICT ORGANISATION 2024-25</h2>
            <h4>ROTARY INTERNATIONAL DISTRICT 3000</h4>
          </div>
          <Image
            src="https://www.nicepng.com/png/full/380-3802815_rotaract-logo-png.png"
          // onClick={() => handleNavigation('/')}
          />
        </div>
        <div className={styles.nav_header}>
          <div>
            {(menuTabs.map((tab, i) => (
              <div
                // fontas='alpha'
                className={history.location.pathname.includes(tab) ? 'activeTab' : ''}
                // onClick={() => handleNavigation(tab)}
                onClick={() => history.push(tab)}
                role="button"
                tabIndex={i + 1}
                onKeyDown={null}
                key={tab}
              >
                {t(tab)}
                {history.location.pathname.includes(tab) && <div />}
              </div>
            )))}
          </div>
        </div>
      </div>
    </>
  );
};

export default withTranslation('common')(RotaractHeader);
