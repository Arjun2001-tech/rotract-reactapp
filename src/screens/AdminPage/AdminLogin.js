import React from 'react';
import { withTranslation } from 'react-i18next';
import {
  Button, Form, Input,
} from 'semantic-ui-react';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
// import GlobalService from 'services/GlobalService';
// import { resturls } from 'globals/utils/apiurls';
// import md5 from 'md5';
import RotaractFromik from '@globalComps/rotaractfromik/RotaractFromik';
// import HeaderLayOut from '../../globals/components/HeaderFooter/OperationHeader';
// import styles from './AdminPage.module.less';
import styles from './AdminPage.module.less'; // Import the LESS file as a CSS module

const AdminLogin = (props) => {
  const { t } = props;
  // const [isInvalidCredentials, setisInvalidCredentials] = useState(false);
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .required(t('email_is_required'))
      .email('Invalid email id'),
    password: Yup.string().required(t('password_is_required')),
  });
  const history = useHistory();

  // const loginsubmit = (values) => {
  //   const reqObj = {
  //     email: values.email,
  //     password: md5(values.password),
  //   };

  //   GlobalService.generalSelect((respdata) => {
  //     const { estatus, emessage, data } = respdata;
  //     if (estatus && emessage) {
  //       if (data.valid) {
  //         history.push('/jobRequirement');
  //       } else {
  //         setisInvalidCredentials(true);
  //       }
  //     }
  //   }, resturls.login, reqObj, 'POST');
  // };
  return (
    <>
      {/* <HeaderLayOut /> */}

      <div className={styles.loginscreen}>
        {/* <div> */}
        <h2>{t('admin_login')}</h2>
        {/* {isInvalidCredentials && (
          <div className={styles.error}>
            <Icon name="thumbs down" />
            {t('invalid_login')}
          </div>
        )} */}
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
            <Form onSubmit={handleSubmit} className={styles.submit}>
              <Form.Field
                name="email"
                icon="user"
                iconPosition="left"
                control={Input}
                type="text"
                placeholder="Email"
                value={values.email}
                error={touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Form.Field
                name="password"
                icon="key"
                iconPosition="left"
                control={Input}
                placeholder="Password"
                type="password"
                value={values.password}
                error={touched.password && errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Button onClick={() => history.push('/adminlayout')}>{t('login')}</Button>
            </Form>
          )}
        </RotaractFromik>
      </div>
    </>
    // </div>
  );
};

export default withTranslation('common')(AdminLogin);
