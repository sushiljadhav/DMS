import React, { useState } from 'react'
import { Container, Stack, Box,Avatar, TextField , Autocomplete, Button} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { loginStyle } from './login.styles'
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function Login() {
  const [roomID,setRoomID]  = useState('');



  const [userName,setUserName]  = useState('');
  const [open, setOpen] = useState(false);
  const [message,setMessage] = useState('');
  const loginStyles = loginStyle();

  const navigate = useNavigate();

  const submitHandler = ()=> {

  }

  const LoginHandler = ()=> {

  }

  const createNewRoom = (e)=> {
    e.preventDefault();
    const id = uuidv4();
    setRoomID(id);
    setMessage("Create New Room");
    setOpen(true);
  }

  const roomIDHandler = (e)=> {
    setRoomID(e.target.value);
  }

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  }

  const handleClose = (e) => {
    setOpen(false);
  }

  const joinRoom = ()=> {
    if(!roomID || !userName) {
      setMessage("Username or Room ID is required");
      setOpen(true);
      return;
    }

    navigate(`/editor/${roomID}`, {
      state : {
        userName,
      }
    });
  }
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


  return (
    <>
      <Container maxWidth="lg" className={loginStyles.container}>
        <Stack direction="row" spacing={4}>
          <Box compontent="div" className={loginStyles.leftContainer}>
            <Box component="div">
              <Box component='h2' variant='h2' className={loginStyles.title}>Document Management System</Box>
              <Box component='h1' variant='h1' className={loginStyles.heading}>Start your journey with us</Box>
              <Box component='h3' variant='h3' className={loginStyles.subheading}>Lorem ipsum dolor sit amet consectetur. Ipsum massa nunc arcu porttitor </Box>
            </Box>
          </Box>
          <Box compontent="div" className={loginStyles.rightContainer}>
            <Box component='h1' variant='h1' className={loginStyles.signInText}>Sign In</Box>
            <Box component='h2' variant='h2' className={loginStyles.signInSubText}>Please paste invitation ROOM ID </Box>
            <Box component={loginStyles.formWrapper}>
              <form onSubmit={submitHandler}>
                <Box component="div" className={loginStyles.formInputBinder}>
                    <TextField id="outlined-basic" label="Room ID" value={roomID} onChange={roomIDHandler} variant="outlined"  fullWidth/>
                  </Box>
                  <Box component="div" className={loginStyles.formInputBinder}>
                    <TextField id="outlined-basic" label="User Name" value={userName} onChange={userNameHandler} variant="outlined"  fullWidth/>
                  </Box>
                  <Box component="div" className={loginStyles.formButtonBinder}>
                    <Button variant="contained" className={loginStyles.button} onClick={joinRoom} size="large">Join</Button>
                  </Box>
              </form>
            </Box>
            <Box component='h6' variant='h6' className={loginStyles.signInBottomText}>if you don't have invite link then create <Button variant="text" size="small" onClick={createNewRoom} className={loginStyles.createLink}> new room</Button></Box>
          </Box>
        </Stack>
      </Container>
      <Snackbar
        open={open}
        sx={{ width: '100%' }}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        severity="success"
        action={action}
      />
    </>
  )
}

export default Login