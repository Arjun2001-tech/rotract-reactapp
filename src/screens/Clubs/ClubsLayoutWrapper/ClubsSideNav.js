import React from "react";
import { withTranslation } from 'react-i18next';
import { useHistory } from "react-router-dom";
// import './RotaractHeaderAndFooter.css';
// import logo from "../../assets/Images/rotary-district-3000-logo.svg"


const ClubsSideNav = (props) => {
  const { t, activeTab, menuTabs } = props
  // const menuTabs = ['members', 'event'];

  const history = useHistory();

  return (
    <div className="">
      <div>
        {(menuTabs.map((tab, i) => (
          <div
            // fontas="alpha"
            className={history.location.pathname.includes(tab) ? "activeTab" : ''}
            // onClick={() => handleNavigation(tab)}
            onClick={() => history.push(tab)}
            role="button"
            tabIndex={i + 1}
            onKeyDown={null}
            key={tab}
          >
            {t(tab)}
          </div>
        )))}
      </div>
    </div>
  );
}

export default withTranslation('common')(ClubsSideNav);
