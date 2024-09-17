import React from 'react';
import { withTranslation } from 'react-i18next';
import {
  Button, Form,  Input
} from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import RotaractFromik from '../../globals/components/rotaractfromik/RotaractFromik';
// import md5 from 'md5';
import * as yup from 'yup';
import './Login.css';
import LoginLayoutWrapper from './LoginLayoutWrapper';

const Login = () => {

  const history = useHistory();

  const SignupSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(6, 'Too Short!').required('Required'),
  });

  return (
    <LoginLayoutWrapper>
      <div className='login'>
        <h2>Login</h2>
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
              <Link to="/forgetpassword" fontas="beta">Forgot Password?</Link>
              <div>
                <Button type="submit" onClick={() => history.push("/home")}>Login</Button>
                <Button type="submit" onClick={() => history.push("/signIn")}>Sign in</Button>
              </div>
            </Form>
          )}
        </RotaractFromik>
      </div>
    </LoginLayoutWrapper>
  );
}

export default withTranslation('common')(Login);
