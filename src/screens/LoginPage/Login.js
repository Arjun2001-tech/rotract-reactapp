import React from 'react';
import { withTranslation } from 'react-i18next';
import {
  Button, Form, Input,
} from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import { resturls } from '@utils/apiurls';
import GlobalService from '@services/GlobalService';
// import UserInfo from '@models/UserInfo';
// import md5 from 'md5';
import * as yup from 'yup';
// import axios from 'axios';
// import axios from 'axios';
import RotaractFromik from '../../globals/components/rotaractfromik/RotaractFromik';
// import md5 from 'md5';
import LoginLayoutWrapper from './LoginLayoutWrapper';
// import Cookies from 'js-cookie';
import styles from './Login.module.less';

const Login = () => {
  const history = useHistory();

  const SignupSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(6, 'Too Short!').required('Required'),
  });

  const loginsubmit = (values) => {
    // const reqObj = {
    //   email: values.email,
    //   password: md5(values.password),
    // };

    GlobalService.generalSelect((respdata) => {
      const { estatus, emessage, data } = respdata;
      console.log(respdata, 'respdata');
      if (estatus === true && emessage === 'success' && data) {
        history.push('/programmanager/home');
      }
      // }, resturls.login, reqObj, 'GET');
    }, `${resturls.login}?Username=${values.email}&Password=${values.password}`, {}, 'GET');
  };

  return (
    <LoginLayoutWrapper>
      <div className={styles.login}>
        <h2>Login</h2>
        <RotaractFromik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          // onSubmit={loginsubmit}
          // onSubmit={loginsubmit}
        >
          {({
            errors,
            touched,
            values,
            handleSubmit,
            handleChange,
            handleBlur,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Field
                name="email"
                control={Input}
                type="text"
                label="Email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
              />
              <Form.Field
                name="password"
                control={Input}
                placeholder="Password"
                type="password"
                label="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && errors.password}
              />
              <Link to="/forgetpassword" fontas="beta">Forgot Password?</Link>
              <div>
                <Button type="submit" onClick={() => history.push('/programmanager/home')}>Login</Button>
                <Button type="button" onClick={() => history.push('/signIn')}>Sign in</Button>
              </div>
            </Form>
          )}
        </RotaractFromik>
      </div>
    </LoginLayoutWrapper>
  );
};

export default withTranslation('common')(Login);
