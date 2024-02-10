import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { ErrorMessage } from '../../api/ErrorMessage';
import { useCreateUser } from '../../api/user.api';
import FormTextField from '../../components/FormTextField';
import { UserRegistrationDto } from '../../dto/auth.dto';

export default function SignUp() {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<UserRegistrationDto>();
  const [customErrorMessage, setCustomErrorMessage] = useState('');

  const { mutate: createUser } = useCreateUser();

  const onSubmitForm: SubmitHandler<UserRegistrationDto> = (userRegistration) => {
    createUser(userRegistration, {
      onSuccess: () => {
        navigate('/signIn');
      },
      onError: (error: AxiosError<ErrorMessage>) => {
        setCustomErrorMessage(error.message);
      },
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormTextField
              name="email"
              label="email"
              control={control}
              rules={{
                required: true,
                minLength: 2,
                maxLength: 45,
              }}
            />

            <FormTextField
              name="displayName"
              label="Display name"
              control={control}
              rules={{
                required: true,
                minLength: 2,
                maxLength: 45,
              }}
            />

            <FormTextField
              name="phoneNumber"
              label="Phone number"
              type="number"
              control={control}
              rules={{
                required: true,
              }}
            />

            <FormTextField
              name="password"
              label="password"
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
              Sign Up
            </Button>
            <Link component={NavLink} to="/signIn">
              <Typography>Do you already have an account?</Typography>
            </Link>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
