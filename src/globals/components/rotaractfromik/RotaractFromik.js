import React, { useEffect, useRef } from 'react';
import { Formik } from 'formik';
import useComponentWillUnmount from '../../utils/useComponentWillUnmount';

const RotaractFromik = (props) => {
  const {
    validationSchema, initialValues,
    onSubmit, children, enableReinitialize = true,
  } = props;

  const submitBtn = useRef(null);
  const handleValidationWhileSubmit = useRef(null);

  useEffect(() => {
    if (submitBtn.current === null) {
      submitBtn.current = document.querySelector('button[type="submit"]') || document.querySelector('input[type="submit"]');
      console.log('submitBtn ele from dom (effect)', submitBtn.current);

      if (submitBtn.current) {
        submitBtn.current.addEventListener('click', handleValidationWhileSubmit.current);
      }
    }
  }, [children]);

  useComponentWillUnmount(() => {
    if (submitBtn.current) {
      submitBtn.current.removeEventListener('click', handleValidationWhileSubmit.current);
    }

    submitBtn.current = null;
    handleValidationWhileSubmit.current = null;
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
      enableReinitialize={enableReinitialize}
    >
      {
        (formikprops) => {
          const handleSelect = (_, { name, value }) => {
            formikprops.setFieldTouched(name, true);
            formikprops.setFieldValue(name, value);
          };

          const handleSelectiveBlur = (_, { name }) => {
            formikprops.setFieldTouched(name, true);
          };

          const handleRadioChange = (_, { name, checked }) => {
            formikprops.setFieldTouched(name, true);
            formikprops.setFieldValue(name, checked);
          };

          const handleRatingChange = (_, { name, rating }) => {
            formikprops.setFieldTouched(name, true);
            formikprops.setFieldValue(name, rating);
          };

          const handleFileUpload = (e) => {
            formikprops.setFieldTouched(e.target.name, true);
            formikprops.setFieldValue(e.target.name, e.currentTarget.files[0]);
          };

          const handleCKEdtiorValues = ({ editor }) => {
            formikprops.setFieldTouched(editor.name, true);
            formikprops.setFieldValue(editor.name, editor.getData());
          };

          if (handleValidationWhileSubmit.current === null) {
            const fetchErrorFieldName = (errData, key) => {
              if (typeof errData !== 'object') {
                return key;
              }

              if (typeof errData === 'object' && errData.length === undefined) {
                const subKey = Object.keys(errData)[0];
                return fetchErrorFieldName(errData[subKey], `${key}.${subKey}`);
              }

              if (typeof errData === 'object' && errData.length !== undefined) {
                let index = 0;

                errData.forEach((ele, i) => {
                  if (ele !== '' && ele !== undefined && ele !== null) {
                    if (ele.length === undefined) {
                      index = i;
                    }
                  }
                });

                return fetchErrorFieldName(errData[index], `${key}.${index}`);
              }

              return null;
            };

            handleValidationWhileSubmit.current = () => {
              console.log('form valid fun called');
              formikprops.validateForm().then((errorObj) => {
                const errorKeyList = Object.keys(errorObj);

                if (errorKeyList.length > 0) {
                  const errorFieldName = fetchErrorFieldName(
                    errorObj[errorKeyList[0]],
                    errorKeyList[0],
                  );

                  console.log('errorFieldName to be fetched from dom', errorFieldName);

                  if (errorFieldName) {
                    const errorEle = document.getElementsByName(errorFieldName)[0];
                    console.log('errorEle from dom', errorEle);
                    if (errorEle && errorEle?.nodeName !== 'META'
                      && errorEle?.hidden === false && errorEle?.style.visibility !== 'hidden' && errorEle?.style.display !== 'none') {
                      errorEle.scrollIntoView({ behavior: 'smooth' });

                      // if (errorEle.firstChild?.focus) {
                      //   errorEle.firstChild.focus();
                      // } else if (errorEle.focus) {
                      //   errorEle.focus();
                      // }

                      if (errorEle.focus) {
                        errorEle.focus();
                      }
                    } else {
                      setTimeout(() => {
                        const errorLabel = document.querySelector('div[class="ui pointing above prompt label"]') || document.querySelector('div[class="ui pointing right prompt label"]') || document.querySelector('div[class="ui pointing left prompt label"]') || document.querySelector('div[class="ui pointing below prompt label"]') || document.querySelector('div[class="ui red pointing basic label"]') || document.querySelector('div[class="ui pointing basic prompt label"]') || document.querySelector('div[class="ui red left pointing basic label"]') || document.querySelector('div[class="ui red right pointing basic label"]') || document.querySelector('div[class="ui red above pointing basic label"]') || document.querySelector('div[class="ui red below pointing basic label"]');

                        console.log('errorlabel from dom', errorLabel);

                        if (errorLabel && errorLabel?.parentElement) {
                          errorLabel.parentElement.scrollIntoView({ behavior: 'smooth' });
                        } else if (errorLabel) {
                          errorLabel.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 500);
                    }
                  }
                }
              });
            };
          }

          return (
            <>
              {
                children({
                  ...formikprops,
                  handleSelectiveBlur,
                  handleRadioChange,
                  handleRatingChange,
                  handleFileUpload,
                  handleSelect,
                  handleCKEdtiorValues,
                })
              }
            </>
          );
        }
      }
    </Formik>
  );
};

export default RotaractFromik;
