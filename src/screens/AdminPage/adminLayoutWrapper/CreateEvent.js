import React, { useRef } from 'react';
import { withTranslation } from 'react-i18next';
import RotaractFromik from '../../../globals/components/rotaractfromik/RotaractFromik';
import { Button, Form, Grid, Input, Label } from 'semantic-ui-react';
import CKEditor from 'ckeditor4-react';
import DatePicker from 'react-datepicker';
import styles from '../AdminPage.module.less';

const CreateEvent = (props) => {
  const { t } = props;

  const logoFileRef = useRef(null);

  const editorConfig = {
    height: 150,
    border: 1,
    versionCheck: false,
  };

  return (
    <div className={styles.create_event}>
      <RotaractFromik
        initialValues={{
          event_name: '',
          description: '',
          logo: '',
          chartet_date: '',
        }}
      // validationSchema={SignupSchema}
      // onSubmit={loginsubmit}
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
          handleCKEdtiorValues,
          handleSelectiveBlur,
          handleFileUpload,
          handleSelect,
        }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Grid>
                <Grid.Row>
                  <Grid.Column mobile={16} tablet={8} computer={3}>
                    {t('event_name')}
                    <span className={styles.requiredFileds}>*</span>
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={6}>
                    <Form.Field
                      value={values.event_name}
                      control={Input}
                      type="text"
                      name="event_name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.event_name && errors.event_name}
                    />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column mobile={16} tablet={8} computer={3}>
                    {t('description')}
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={13}>
                    <Form.Field
                      control={CKEditor}
                      name="description"
                      onChange={handleCKEdtiorValues}
                      onBlur={(e) => handleSelectiveBlur(e, e.editor)}
                      data={values.description}
                      id="description"
                      type="classic"
                      config={editorConfig}
                      error={touched.description && errors.description}
                    />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column mobile={16} tablet={8} computer={3}>
                    {t('logo')}
                    <span className={styles.requiredFileds}>*</span>
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={13}>
                    <Form.Field>
                      <div>
                        <Button basic type="button" content={t('choose_file')} onClick={() => logoFileRef.current.click()} />
                        <span>
                          {(values.logo.name || values.logo) ? values.logo.name || values.logo.split('/').pop() : t('no_file_choosen')}
                        </span>
                        {touched.logo && errors.logo && (
                          <Label basic color="red" pointing="left">
                            {errors.logo}
                          </Label>
                        )}
                        <input
                          name="logo"
                          type="file"
                          accept="image/png, image/jpeg"
                          ref={logoFileRef}
                          onChange={handleFileUpload}
                          style={{ display: 'none' }}
                        />
                      </div>
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column mobile={16} tablet={8} computer={3}>
                    {t('chartet_date')}
                    <span className={styles.requiredFileds}>*</span>
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={6}>
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
                    // label="chartet_date"
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <div>
                <Button type="submit">Create</Button>
              </div>
            </Form>
          );
        }}
      </RotaractFromik>
    </div>
  );
}

export default withTranslation('common')(CreateEvent);
