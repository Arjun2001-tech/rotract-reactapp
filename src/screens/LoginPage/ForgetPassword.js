import React from 'react';
import { withTranslation } from 'react-i18next';
import {
  Button, Form, Input,
} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import RotaractFromik from '../../globals/components/rotaractfromik/RotaractFromik';
// import md5 from 'md5';
import LoginLayoutWrapper from './LoginLayoutWrapper';
import styles from './Login.module.less';

const ForgetPassword = () => {
  const history = useHistory();

  const SignupSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(6, 'Too Short!').required('Required'),
  });

  return (
    <LoginLayoutWrapper>
      <div className={styles.forgetPassword}>
        <h2>Forget Password</h2>
        <RotaractFromik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignupSchema}
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
              {/* <Link to="/forgetpassword" fontas="beta">Forgot Password?</Link> */}
              <div>
                <Button type="submit" onClick={() => history.push('/')}>Back To Login</Button>
                <Button type="submit">Register</Button>
              </div>
            </Form>
          )}
        </RotaractFromik>
      </div>
    </LoginLayoutWrapper>
  );
};

export default withTranslation('common')(ForgetPassword);
