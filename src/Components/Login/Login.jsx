import React, {useState}from 'react'; 
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FormHelperText,FormControl,Link } from '@mui/material';
import { InputAdornment } from '@mui/material';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:450,
  bgcolor: 'common.white',
  boxShadow: 24,
  p: 4,
};

const LoginModal = ({open,CloseModal})=> {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Modal
    open={open}
    onClose={CloseModal}>
      <Box sx={style}>
        <Typography variant='h4' component="h1" sx={{mb:4}}>
          Sign In
        </Typography>
        <form>
          <FormControl sx={{mb:2}} fullWidth>
          <TextField
          id='email'
          name='email'
          label='Email'
          variant='filled'/>
          <FormHelperText>
            Please enter a valid email or phone number.
          </FormHelperText>
          </FormControl>
          <FormControl sx={{mb:2}} fullWidth>
          <TextField
          id='password'
          name='password'
          type={showPassword ?  'text': 'password' }
          label='Password'
          variant='filled'
          InputProps={{
             endAdornment :(
               <InputAdornment>
               <Button onClick={()=> setShowPassword(!showPassword)}>
                 {showPassword ? 'Hide' : 'Show'}
                 </Button>
               </InputAdornment>
             )
          }}/>
          <FormHelperText>
          Your Password must contain between 4 and 60 character.
          </FormHelperText>
          </FormControl>
        <Button type='submit' variant='contained' fullWidth sx={{mt:2}}>Sign In</Button>
        </form>
          <span className='pt-4'>Dont have an Account ? <Link>Sign Up</Link></span>
      </Box>
    </Modal>
  )
}


export default LoginModal;