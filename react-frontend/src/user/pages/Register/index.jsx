import React from 'react';
import { Navbar } from '../../components/Navbar';
import styles from './style.module.scss';
import { TextField, Button, Box, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import AuthService from '../../../service/AuthService';
import Link from '@mui/material/Link';
import { openNotificationWithIcon } from '../Login';

const initalValues = {
  email: '',
  password: '',
};

export const Register = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.Container}>
        <div className={styles.Wrapper}>
          <Typography variant="h4">Đăng ký</Typography>
          <Formik
            initialValues={initalValues}
            validationSchema={object({
              email: string()
                .required('Email không được để trống!')
                .email('Email phải xác thực!'),
              password: string()
                .required('Password không được để trống!')
                .min(4, 'Password phải có ít nhất 4 ký tự!'),
            })}
            onSubmit={(values, formikHelpers) => {
              console.log(values.email);

              AuthService.register(values.email, values.password).then(
                (response) => {
                  openNotificationWithIcon(
                    'success',
                    'Đăng ký thành công!',
                    'Bạn hãy xác nhận email để hoàn tất đăng ký!'
                  );
                  window.location = '/login';
                },
                (error) => {
                  if (error.response.status === 500) {
                    openNotificationWithIcon(
                      'error',
                      'Đăng ký thất bại!',
                      'Email này đã được sử dụng!'
                    );
                  }
                }
              );
              formikHelpers.resetForm();
            }}
          >
            {({ errors, isValid, touched, dirty }) => (
              <Form>
                <Field
                  name="email"
                  type="email"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Email"
                  size="small"
                  fullWidt
                  error={Boolean(errors.email) && Boolean(touched.email)}
                  helperText={Boolean(touched.email) && errors.email}
                />
                <Box height={20} />
                <Field
                  name="password"
                  type="password"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Password"
                  size="small"
                  fullWidth
                  error={Boolean(errors.password) && Boolean(touched.password)}
                  helperText={Boolean(touched.password) && errors.password}
                />
                <Box height={20} />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={!isValid || !dirty}
                >
                  Đăng ký
                </Button>
              </Form>
            )}
          </Formik>
          <div style={{ marginBottom: '20px' }}>
            <Typography>
              Bạn đã có tài khoản?{' '}
              <Link underline="hover" color="primary" href="/login">
                Đăng nhập
              </Link>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
