import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import {
  Button,
  Form, FormGroup, Input,
  Select
} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import RotaractFromik from '../../globals/components/rotaractfromik/RotaractFromik';
// import md5 from 'md5';
import * as yup from 'yup';
import './Login.css';
import PhoneInput from 'react-phone-input-2';
import LoginLayoutWrapper from './LoginLayoutWrapper';
import DatePicker from 'react-datepicker';

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const bloodGroup = [
  { key: 'a+', text: 'A+', value: 'A+' },
  { key: 'a-', text: 'A-', value: 'A-' },
  { key: 'b+', text: 'B+', value: 'B+' },
  { key: 'b-', text: 'B-', value: 'B-' },
  { key: 'ab+', text: 'AB+', value: 'AB+' },
  { key: 'ab-', text: 'AB-', value: 'AB-' },
  { key: 'o+', text: 'O+', value: 'O+' },
  { key: 'o-', text: 'O-', value: 'O-' },
]

const regionOptions = [
  { key: 'a', text: 'Aranthangi', value: 'aranthangi' },
  { key: 'p', text: 'Pudukkottai', value: 'pudukkottai' },
  { key: 'm', text: 'Madurai', value: 'madurai' },
  { key: 'th', text: 'Thanjavur', value: 'thanjavur' },
  { key: 'ti', text: 'Tircuhiappalli', value: 'tircuhiappalli' },
]

const SignIn = (props) => {
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
    <LoginLayoutWrapper>
      <div className='SignIn'>
        <h2>Sign In</h2>
        <RotaractFromik
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            club_id: '',
            gender: '',
            blood_group: '',
            region: '',
            date_of_birth: '',
            password: '',
            confirm_password: '',
            mobile_number: '',
            otp: '',
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
                <FormGroup>
                  <Form.Field
                    name="first_name"
                    control={Input}
                    type="text"
                    label="First Name *"
                    placeholder="First Name"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.first_name && errors.first_name}
                  />
                  <Form.Field
                    name="last_name"
                    control={Input}
                    placeholder="Last Name"
                    type="text"
                    label="Last Name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.last_name && errors.last_name}
                  />
                </FormGroup>
                <FormGroup>
                  <Form.Field
                    name="email"
                    control={Input}
                    type="text"
                    label="Email *"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && errors.email}
                  />
                  <Form.Field
                    name="club_id"
                    control={Input}
                    placeholder="Club Id"
                    type="text"
                    label="Club Id *"
                    value={values.club_id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.club_id && errors.club_id}
                  />
                </FormGroup>
                <FormGroup>
                  <Form.Field
                    control={Select}
                    options={genderOptions}
                    label="Gender *"
                    placeholder='Gender'
                    search
                    value={values.gender}
                    name="gender"
                    type="dropdown"
                    onChange={handleSelect}
                    onBlur={handleBlur}
                  />
                  <Form.Field
                    control={Select}
                    options={bloodGroup}
                    label="Blood Group *"
                    placeholder='Blood Group'
                    search
                    value={values.blood_group}
                    name="blood_group"
                    type="dropdown"
                    onChange={handleSelect}
                    onBlur={handleBlur}
                  />
                </FormGroup>
                <FormGroup>
                  <Form.Field
                    control={Select}
                    options={regionOptions}
                    label="Region *"
                    placeholder='Region'
                    search
                    value={values.region}
                    name="region"
                    type="dropdown"
                    onChange={handleSelect}
                    onBlur={handleBlur}
                  />
                  <Form.Field
                    control={Input}
                    label="Date Of Birth *"
                    // className={styles.profileModalDateInput}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date_of_birth}
                    name="date_of_birth"
                    type="date"
                    error={touched.date_of_birth && errors.date_of_birth}
                  />
                </FormGroup>
                <FormGroup>
                  <Form.Field
                    name="password"
                    control={Input}
                    type="password"
                    label="Password *"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && errors.password}
                  />
                  <Form.Field
                    name="confirm_password"
                    control={Input}
                    placeholder="Confirm Password"
                    type="password"
                    label="Confirm Password *"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.confirm_password && errors.confirm_password}
                  />
                </FormGroup>
                <FormGroup className="mobileInput">
                  <Form.Field
                    label="Mobile Number *"
                    control={PhoneInput}
                    name="mobile_number"
                    country="in"
                    countryCodeEditable={false}
                    // type="dropdown"
                    onChange={(phone, country) => mobileInputField(phone, country)}
                    // onChange={(phone, country) => {
                    //   setFieldValue('mobile_number', phone);
                    //   // Optionally, handle country change if needed
                    // }}
                    onBlur={() => setFieldTouched('mobile_number', true)}
                    value={values.mobile_number}
                    error={touched.mobile_number && errors.mobile_number}
                  />
                  <Button size='tiny' type="button">Send Otp</Button>
                  <Form.Field
                    name="otp"
                    control={Input}
                    placeholder="Enter Otp"
                    type="otp"
                    label="Enter Otp *"
                    // width={8}
                    value={values.otp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.otp && errors.otp}
                  />
                </FormGroup>
                {/* <Link to="/" fontas="beta">Login</Link> */}
                <div>
                  <Button type="button" onClick={() => history.push("/")}>Back To Login</Button>
                  <Button type="submit">Register</Button>
                </div>
              </Form>
            );
          }}
        </RotaractFromik>
      </div>
    </LoginLayoutWrapper>
  );
}

export default withTranslation('common')(SignIn);
