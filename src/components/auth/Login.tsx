import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Formik, FormikHelpers } from 'formik';
import * as yup from "yup";
import { MFTextField, MFSubmitButton } from '../../lib/formik';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

interface Values {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().email("Should be a valid email").required("Email is required"),
  password: yup.string().required("Password is required")
});

export default function SignInSide() {
  const onSubmit = async (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    const { email, password } = values;
    console.log({
      email,
      password,
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitting(false);
  };
  const initialValues: Values = { email: '', password: '' };

  return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
              {({ handleSubmit }) => (
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <MFTextField
                    required
                    label="Email Address"
                    name="email"
                    autoComplete="off"
                    autoFocus
                  />
                  <MFTextField
                    type="password"
                    required
                    label="Password"
                    name="password"
                  />
                  <MFSubmitButton />
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Copyright sx={{ mt: 5 }} />
                </Box>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
  );
}