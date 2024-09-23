import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import {
  Button,
  Form, FormGroup, Input,
  Select
} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
// import RotaractFromik from '../../globals/components/rotaractfromik/RotaractFromik';
// import md5 from 'md5';
import * as yup from 'yup';
// import './Login.css';
import PhoneInput from 'react-phone-input-2';
import DatePicker from 'react-datepicker';
import RotaractFromik from '../../../globals/components/rotaractfromik/RotaractFromik';
import styles from '../AdminPage.module.scss';

const CreateClubs = (props) => {
  const { t } = props

  const history = useHistory();

  const SignupSchema = yup.object().shape({
    first_name: yup
      .string()
      .trim()
      .matches(/^[A-Za-z\s]+$/, {
        message: (t('name_should_only_contain_letters')),
      })
      .required(t("firstname_is_required")),
    email: yup.string().email(('please_enter_the_valid_email')).required(`${('email')} ${('required')}`),
    password: yup.string().when('input_file_content', {
      is: (value) => !value,
      then: yup.string().required('Password is required'),
      // otherwise: yup.string(),
    }),
    confirm_password: yup.string().when('input_file_content', {
      is: (value) => !value,
      then: yup.string()
        .oneOf([yup.ref('password'), null], 'Password must match')
        .required('Re-Enter Password is required'),
      // otherwise: yup.string(),
    }),
    mobile_number: yup
      .number()
      .required(`${('mobile_number')} ${('required')}`)
      .test('mobile validation', ('invalid_mobile_number'), (value) => {
        try {
          if (value !== undefined && (String(value).length === maxPhoneNumberLength)) {
            return true;
          }
        } catch (err) {
          // console.log(err);
        }
        return false;
      }),
  });

  const [maxPhoneNumberLength, setMaxPhoneNumberLength] = useState(null);

  const loginsubmit = (values) => {
    console.log(values, "values");
  };

  return (
    <div className={styles.create_clubs}>
      <RotaractFromik
        initialValues={{
          club_name: '',
          id_name: '',
          club_email: '',
          chartet_date: '',
          president_name: '',
          secretary_name: '',
          // today_date: new Date(),
        }}
        validationSchema={SignupSchema}
        onSubmit={loginsubmit}
      >
        {({
          errors,
          touched,
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue,
          setFieldTouched,
          handleSelect,
        }) => {
          const mobileInputField = (phone, country) => {
            // eslint-disable-next-line no-useless-escape
            setMaxPhoneNumberLength(country.format.replace(/[\+()-\s]/g, '').length);
            setFieldValue('mobile_number', phone);
          };
          return (
            <Form onSubmit={handleSubmit}>
              <FormGroup widths='equal'>
                <Form.Field
                  name="club_name"
                  control={Input}
                  type="text"
                  label="Club Name"
                  placeholder="Enter Club Name"
                  value={values.club_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.club_name && errors.club_name}
                />
                <Form.Field
                  name="id_name"
                  control={Input}
                  placeholder="Club id"
                  type="text"
                  label="Club Id"
                  value={values.id_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.id_name && errors.id_name}
                />
                <Form.Field
                  name="club_email"
                  control={Input}
                  type="text"
                  label="Email"
                  placeholder="Email"
                  value={values.club_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.club_email && errors.club_email}
                />
              </FormGroup>
              <FormGroup widths='equal'>
                <Form.Field
                  control={DatePicker}
                  selected={values.chartet_date}
                  onChange={(date) => setFieldValue('chartet_date', date)}
                  onBlur={() => setFieldTouched('chartet_date', true)}
                  // showTimeSelect
                  // timeIntervals={15}
                  // minDate={new Date()}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  yearDropdownItemNumber={55}
                  scrollableYearDropdown
                  dateFormat="MMMM d, yyyy"
                  name="chartet_date"
                  error={touched.chartet_date && errors.chartet_date}
                  label="chartet_date"
                />
                <Form.Field
                  name="president_name"
                  control={Input}
                  placeholder="President Name:"
                  type="text"
                  label="President Name:"
                  value={values.president_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.president_name && errors.president_name}
                />
                <Form.Field
                  name="secretary_name"
                  control={Input}
                  placeholder="Secretary Name:"
                  type="text"
                  label="Secretary Name:"
                  value={values.secretary_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.secretary_name && errors.secretary_name}
                />
              </FormGroup>
              <div>
                <Button type="submit">Save</Button>
              </div>
            </Form>
          );
        }}
      </RotaractFromik>
    </div>
  );
}

export default withTranslation('common')(CreateClubs);
