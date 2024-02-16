import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { FirebaseError } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, NavLink } from 'react-router-dom';
import FormTextField from '../../components/FormTextField';
import firebaseApp from '../../config/firebase.config';
import { LoginRequestDto } from '../../dto/auth.dto';
import { useAllGames } from '../../api/game.api';

export default function SignUp() {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<LoginRequestDto>();
  const [customErrorMessage, setCustomErrorMessage] = useState('');

  const onSubmitForm: SubmitHandler<LoginRequestDto> = (loginRequest) => {
    signInWithEmailAndPassword(getAuth(firebaseApp), loginRequest.email, loginRequest.password)
      .then((response) => {
        response.user.getIdToken().then((tokenId) => localStorage.setItem('token_id', tokenId));
        navigate('/games');
      })
      .catch((error: FirebaseError) => {
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Box sx={{ mt: 1 }}>
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
            <Box sx={{ mt: 3 }}>
              <FormTextField
                name="password"
                label="password"
                type="password"
                control={control}
                rules={{
                  required: true,
                  minLength: 2,
                  maxLength: 45,
                }}
              />
            </Box>
            {customErrorMessage.length > 0 && (
              <Alert severity="error" sx={{ mt: 1 }}>
                {customErrorMessage}
              </Alert>
            )}

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>

            <Link component={NavLink} to="/forgetPassword">
              <Typography>Forgot password?</Typography>
            </Link>
            <Link component={NavLink} to="/signup">
              <Typography>Dont have an account? Sign Up</Typography>
            </Link>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
