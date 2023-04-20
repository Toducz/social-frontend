import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormTextField from '../../components/FormTextField';
import firebaseApp from '../../config/firebase.config';

type ForgetPasswordType = {
  forgetPassword: string;
};

export default function ForgetPassword() {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<ForgetPasswordType>();
  const [customErrorMessage, setCustomErrorMessage] = useState('');

  const onSubmitForm: SubmitHandler<ForgetPasswordType> = (data) => {
    sendPasswordResetEmail(getAuth(firebaseApp), data.forgetPassword)
      .then(() => {
        navigate('/signIn');
      })
      .catch((error) => {
        setCustomErrorMessage(error.code);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Forget password
        </Typography>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Box sx={{ mt: 3 }}>
            <FormTextField
              name="forgetPassword"
              label="email"
              control={control}
              rules={{
                required: true,
                minLength: 2,
                maxLength: 45,
              }}
            />
            {customErrorMessage.length > 0 && (
              <Alert severity="error" sx={{ mt: 1 }}>
                {customErrorMessage}
              </Alert>
            )}

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              send password reset email
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
