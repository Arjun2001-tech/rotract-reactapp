import React, { Suspense } from 'react';
import { withTranslation } from 'react-i18next';
// import CommonHeader from '@globalComps/header/CommonHeader';
// import CommonHeader from '@globalComps/HeaderFooter/CommonHeader';
import OperationHeader from '@globalComps/HeaderFooter/OperationHeader';
import DefaultLoader from '@globalComps/loader/DefaultLoader';
import {
  Route, Switch, useHistory,

} from 'react-router-dom';
import RotaractHome from './HomePage/RotaractHome';
import AboutUs from './About/AboutUs';
import RegionClubs from './Clubs/RegionClubs';
import AdminLogin from './AdminPage/AdminLogin';
import styles from './OperationLayout.module.less';

const OperationLayout = (props) => {
  const { t, match: { path } } = props;
  const tabs = ['home', 'about', 'clubs', 'admin'];
  // const menuTabs = ['home', 'about', 'clubs', 'admin'];

  const history = useHistory();

  return (
    <>
      <OperationHeader
        icons={{ settingicon: true }}
      >
        {/* <div> */}
        <div className={styles.ho}>
          {
            (tabs.map((tab, i) => (
              <div
                onClick={() => history.push(`/programmanager/${tab}`)}
                role="button"
                tabIndex={i + 1}
                onKeyDown={null}
                key={tab}
                fontas="gamma header"
              >
                {t(tab)}
                {history.location.pathname.includes(tab) && <div />}
              </div>
            )))
          }
        </div>
        {/* </div> */}
      </OperationHeader>

      <div>
        <Suspense fallback={<DefaultLoader />}>
          <Switch>
            <Route path={`${path}/home`} component={RotaractHome} />
            <Route path={`${path}/about`} component={AboutUs} />
            <Route path={`${path}/clubs`} component={RegionClubs} />
            <Route path={`${path}/admin`} component={AdminLogin} />
            {/* <Redirect to={`${path}/home`} /> */}
          </Switch>
        </Suspense>
      </div>

    </>
  );
};
export default withTranslation('common')(OperationLayout);
