/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Cookies from 'js-cookie';
import UserInfo from '@models/UserInfo';
import { Route, Redirect } from 'react-router-dom';
import ls from 'local-storage';
import { cookiedomain } from './constants';

function parseJwt(token) {
  console.log('token', token);
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
  console.log('Payload', jsonPayload);
  return JSON.parse(jsonPayload);
}

function updateC1() {
  const expmin = new Date(new Date().getTime() + 20 * 60 * 1000);
  const val1 = Cookies.get('_c1', { domain: cookiedomain });
  if (val1 !== undefined && val1 !== null) {
    // console.log('updateC1  val1', val1);
    Cookies.remove('_c1', { domain: cookiedomain });
    Cookies.set('_c1', val1, { path: '/', expires: expmin, domain: cookiedomain });
    // const p = parseJwt(val1);
    // console.log('update - C1 Payload', p);
  }
}

function updateUserInfo(c1 = null) {
  let val1 = c1;
  console.log(cookiedomain);
  const ck = Cookies.get('_c1', { domain: cookiedomain });
  // const expmin = new Date(new Date().getTime() + 20 * 60 * 1000);

  if (ck != null) {
    val1 = ck;
    console.log('Thru cookie');
  } else if (c1 !== undefined && c1 !== null) {
    const cookie = parseJwt(c1);
    const now = new Date();
    const cookieObj = {
      data: (c1),
      expiry: now.getTime() + cookie.max_age,
    };
    ls.set('_c1', cookieObj);
    console.log('Thru Params - post login');
  }
  if (val1 === undefined || val1 === null) {
    const cookieObj = ls.get('_c1');
    if (cookieObj !== undefined && cookieObj !== null) {
      const cookie = parseJwt(cookieObj.data);
      const now = new Date();

      if (Math.floor(now.getTime() / 1000) <= cookieObj.expiry) {
        val1 = cookieObj.data;

        cookieObj.expiry = Math.floor(now.getTime() / 1000) + cookie.max_age;
        ls.set('_c1', cookieObj);
        // Cookies.set('_c1', val1, { path: '/', expires: expmin, domain: cookiedomain });
      } else {
        ls.remove('_c1');
        window.localStorage.setItem('isEventClosed', '');
      }
    }
    console.log('Thru Local Store');
  }

  if (val1 !== undefined && val1 !== null && val1) {
    const data = parseJwt(val1);
    UserInfo.setUserDetail(data);
    console.log('data\n\n');
    console.log(data);
  } else {
    console.log('updateUserInfo - Cookie / LS / Params not found');
  }
}

function clearCookies() {
  let ck = Cookies.get('_c1', { domain: cookiedomain });
  console.log('before logout ck', ck, cookiedomain);
  Cookies.remove('_c1', { domain: cookiedomain });
  ck = Cookies.get('_c1', { domain: cookiedomain });
  console.log('after logout ck', ck, cookiedomain);
  ls.remove('_c1');
  document.cookie = '_c1=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.location.href = '/login';
  window.localStorage.setItem('isEventClosed', '');
  window.localStorage.setItem('authAmphiSessionId', undefined);
}

function PrivateRoute({ component: Component, cprops, ...rest }) {
  const valid = UserInfo.getRole();

  console.log(valid, 'valid');

  return (
    <Route
      {...rest}
      render={(props) => ((valid)
        ? <Component {...cprops} {...props} />
        : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        ))}
    />
  );
}

export {
  parseJwt, updateC1, updateUserInfo, PrivateRoute, clearCookies,
};
