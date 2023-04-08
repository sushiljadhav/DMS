import React from 'react'
import { Container, Stack, Box,Avatar, TextField , Autocomplete, Button} from '@mui/material'
import { loginStyle } from './login.styles'
import { useNavigate } from "react-router-dom";

function LeftPanel(classesName) {
  const loginStyles = classesName;
  return (
    <Box compontent="div" className={loginStyles.leftContainer}>
      <Box component="div">
        <Box component='h2' variant='h2' className={loginStyles.title}>Document Management System</Box>
        <Box component='h1' variant='h1' className={loginStyles.heading}>Start your journey with us</Box>
        <Box component='h3' variant='h3' className={loginStyles.subheading}>Lorem ipsum dolor sit amet consectetur. Ipsum massa nunc arcu porttitor </Box>
      </Box>
      <Box component="div" className={loginStyles.bottomSlider}>
        <Box component="div" className={loginStyles.sliderBox}>
            <Box component="h6" className={loginStyles.sliderHeading}>
              Lorem ipsum dolor sit amet consectetur. Ipsum massa nunc arcu porttitor 
            </Box>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp"></Avatar>
              <Box component="div">
                <Box component="h5" className={loginStyles.sliderUsername}>
                  Thomas Jain
                </Box>
                <Box component="h5" className={loginStyles.sliderUserJob}>
                  Company Head
                </Box>
              </Box>
            </Stack>
        </Box>
      </Box>
    </Box>
  )
}

function LoginForm(classesName) {
  const loginStyles = classesName;
  const navigate = useNavigate();

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ]

  const submitHandler = ()=> {

  }

  const LoginHandler = ()=> {
    navigate('/dashboard');
  }


  return (
    <Box component={loginStyles.formWrapper}>
      <form onSubmit={submitHandler}>
        <Box component="div" className={loginStyles.formInputBinder}>
          <TextField id="outlined-basic" label="User Name" variant="outlined"  fullWidth/>
        </Box>
        <Box component="div" className={loginStyles.formInputBinder}>
          <TextField id="outlined-basic" label="Password" type="password" variant="outlined"  fullWidth/>
        </Box>
        <Box component="div" className={loginStyles.formInputBinder}>
          <TextField id="outlined-basic" label="Company ID" variant="outlined"  fullWidth/>
        </Box>
        <Box component="div" className={loginStyles.formInputBinder}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            fullWidth
            renderInput={(params) => <TextField {...params} label="Select Company Name" />}
          />
        </Box>
        <Box component="div" className={loginStyles.formButtonBinder}>
          <Button variant="contained" className={loginStyles.button} size="large" onClick={LoginHandler}>Login</Button>
        </Box>
      </form>
    </Box>
  )
}

function RightPanel(classesName) {
  const loginStyles = classesName;

  return(
    <Box compontent="div" className={loginStyles.rightContainer}> 
        <Box component='h1' variant='h1' className={loginStyles.signInText}>Sign In</Box>
        <Box component='h2' variant='h2' className={loginStyles.signInSubText}>Please fill  your username , password and company details to login </Box>
        <LoginForm {...loginStyles}></LoginForm>
    </Box>
  )
}

function Login() {

  const loginStyles = loginStyle();
  
  return (
    <Container maxWidth="lg" className={loginStyles.container}>
      <Stack direction="row" spacing={4}>
        <LeftPanel {...loginStyles}></LeftPanel>
        <RightPanel {...loginStyles}></RightPanel>
      </Stack>
    </Container>
  )
}

export default Login