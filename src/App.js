import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { PrivateRoute } from './globals/utils/index';
import 'semantic-ui-less/semantic.less';
import 'react-phone-input-2/lib/style.css';
import 'react-phone-input-2/lib/semantic-ui.css';
import './assets/less/common.less';
import './assets/less/toggle.less';
import './assets/less/config.less';
import './assets/less/config.css';
import './App.css';

import DefaultLoader from '././globals/components/loader/DefaultLoader.js';
import RotaractHeader from './globals/components/HeaderFooter/RotaractHeader.js';
import RegionClubs from './screens/Clubs/RegionClubs.js';
import ClubsLayout from './screens/Clubs/ClubsLayoutWrapper/ClubsLayout.js';

const LoginScreen = lazy(() => import('./screens/LoginPage/Login.js'));
const SignIn = lazy(() => import('./screens/LoginPage/SignIn.js'));
const ForgetPassword = lazy(() => import('./screens/LoginPage/ForgetPassword.js'));
const RotaractHome = lazy(() => import('./screens/HomePage/RotaractHome.js'));
const AboutUs = lazy(() => import('./screens/About/AboutUs.js'));

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignInPage = location.pathname === '/signIn';
  const isForgetPasswordPage = location.pathname === '/forgetpassword';

  const hideHeader = isLoginPage || isSignInPage || isForgetPasswordPage;

  return (
    <div>
      {!hideHeader && <RotaractHeader />}
      <Suspense fallback={<DefaultLoader />}>
        <Switch>
          <Route exact path="/clubslayout" component={ClubsLayout} />
          <Route exact path="/clubs" component={RegionClubs} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/home" component={RotaractHome} />
          {/* <PrivateRoute path="/dashboard" component={Home} /> */}
          <Route exact path="/forgetpassword" component={ForgetPassword} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/" render={() => <Redirect to="/login" />} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
