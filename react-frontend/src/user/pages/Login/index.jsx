import React from 'react';
import { Navbar } from '../../components/Navbar';
import styles from './style.module.scss';
import {
  TextField,
  Button,
  Box,
  Typography,
  Divider,
  DialogActions,
} from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import AuthService from '../../../service/AuthService';
import { notification } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
const initalValues = {
  email: '',
  password: '',
};

const initalValuesFW = {
  email: '',
};

export const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message: message,
    description: description,
  });
};

export const Login = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleReserPW = () => {
    AuthService.resetPassword();
  };

  return (
    <div>
      <Navbar />
      <div className={styles.Container}>
        <div className={styles.Wrapper}>
          <Typography variant="h4">Đăng nhập</Typography>
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
              AuthService.login(values.email, values.password).then(
                (response) => {
                  openNotificationWithIcon('success', 'Đăng nhập thành công!');
                  navigate('/');
                },
                (error) => {
                  if (error.response.status === 401) {
                    openNotificationWithIcon(
                      'error',
                      'Đăng nhập thất bại!',
                      'Email hoặc password không đúng!'
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
                  fullWidt
                  size="small"
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
                  Đăng nhập
                </Button>
              </Form>
            )}
          </Formik>
          <div style={{ marginBottom: '10px' }}>
            <Typography>
              Bạn chưa có tài khoản?{' '}
              <Link underline="hover" color="primary" href="/register">
                Đăng ký
              </Link>
            </Typography>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Link
              underline="hover"
              color="primary"
              onClick={() => setOpen(true)}
            >
              <Typography>Quên mật khẩu?</Typography>
            </Link>
          </div>
          <Dialog open={open} onClose={handleClose} className={styles.Dialog}>
            <DialogTitle
              className={styles.DialogTitle}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6">Quên mật khẩu</Typography>
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <Divider
              style={{
                border: '0.4px solid rgba(0, 0, 0, 0.12) ',
              }}
            />
            <DialogContent style={{ width: '400px' }}>
              <Formik
                initialValues={initalValuesFW}
                validationSchema={object({
                  email: string()
                    .required('Email không được để trống!')
                    .email('Email phải xác thực!'),
                })}
                onSubmit={(values, formikHelpers) => {
                  AuthService.resetPassword(values.email).then(
                    (response) => {
                      openNotificationWithIcon(
                        'success',
                        'Password đã được gửi tới email của bạn. Hãy kiểm tra Email!'
                      );
                      navigate('/');
                    },
                    (error) => {
                      openNotificationWithIcon(
                        'error',
                        'Email này không đúng hoặc chưa được đăng kí!'
                      );
                    }
                  );
                  formikHelpers.resetForm();
                }}
              >
                {({ errors, isValid, touched, dirty }) => (
                  <Form
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignContent: 'center',
                    }}
                  >
                    <Field
                      name="email"
                      type="email"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="Email"
                      size="small"
                      fullWidth
                      error={Boolean(errors.email) && Boolean(touched.email)}
                      helperText={Boolean(touched.email) && errors.email}
                    />
                    <Box height={20} />

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="normal"
                      disabled={!isValid || !dirty}
                    >
                      Gửi
                    </Button>
                  </Form>
                )}
              </Formik>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
