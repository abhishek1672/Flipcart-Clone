import React, { useState,useContext} from 'react'
import { Box, Button, Dialog, TextField, Typography } from "@mui/material"
import styled from '@emotion/styled'
import { authenticateSignup,authenticateLogin } from '../../service/api';
import {DataContext} from '../../context/DataProvider';
 
const Component = styled(Box)`
      display:flex;
      height:79vh;
      width:100vh;
      margin:0`;

const Image = styled(Box)`
      background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
      height:83%;
      width:40%;
      margin-bottom:-15px;
      padding:40px 30px;
      color:#fff`;

const Wrapper = styled(Box)`
      display:flex;
      flex-direction:column;
      width:100%;
      padding:20px 30px;
      & > div,& >button,& >p{
        margin-top:15px;
      }`;

const Text = styled(Typography)`
      font-size:12px;
      color:#878787;`;

const CreateAccount = styled(Typography)`
        font-size:14px;
        text-align:center;
      color:#2474f0;
      font-weight:600;
      cursor:pointer;`;


const LoginButton = styled(Button)`
      text-transform:none;
      background:#FB641B;
      color:#fff;
      height:40px;
      border-radius:2px;`;

const ErrorMessage=styled(Typography)`
      font-size:10px;
      color:#ff6161;
      line-height:0;
      margin-top:10px;
      font-weight:600;`

const RequestOTP = styled(Button)`
      text-transform:none;
      background:#FB641B;
      color:#fff;
      height:40px;
      border-radius:2px;`

// ------------------------------

const accountInitialValues = {

  login: {
    view: 'login',
    heading: 'Login',
    subHeading: 'Get access to your Orders, Wishlist and Recommendations'
  },
  signup: {
    view: 'signup',
    heading: 'Looks like you\'re new here!',
    subHeading: 'Sign up with your mobile number to get started'
  }
}




const LoginDialog = ({ open, setOpen }) => {

  const signUpInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
  };

  const loginInitialValues={
    username:'',
    password:'' 
  };

  const [account, toogleAccount] = useState(accountInitialValues.login);
  const [signUp, setSignUp] = useState(signUpInitialValues);
  const [login,setLogin]=useState(loginInitialValues);
  const [error,setError]=useState(false);

  const { setAccount } = useContext(DataContext);


  const handleClose = () => {
    setOpen(false);
    toogleAccount(accountInitialValues.login)
    setError(false);
  }


  const toogleSignUp = () => {
    toogleAccount(accountInitialValues.signup);
  };





  const onInputChange = (e) => {
    setSignUp({...signUp,[e.target.name]:e.target.value});
    // console.log(signUp)
  }

  const SignupUser=async()=>{
   let response=await authenticateSignup(signUp);
   if(!response) return;
   handleClose();
   setAccount(signUp.firstname)
  }

  const onValueChange=(e)=>{
      setLogin({...login,[e.target.name]:e.target.value})
  }

  const loginUser=async()=>{
    let response=await authenticateLogin(login);

    console.log(response)
    if(response.status === 200) {
    handleClose();
    setAccount(response.data.data.firstname);
    }

    else{
      setError(true);
    }


  }


  // useEffect(() => {
  //   console.log(signUp);
  // }, [signUp]);


  // --------
  return (
    <>
      <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
        <Component>

          {/* left box */}
          <Image>
            <Typography variant='h5'>{account.heading}</Typography>
            <Typography style={{ marginTop: 15 }}>{account.subHeading}</Typography>
          </Image>

          {/* right box */}
          {account.view === 'login' ?
            <Wrapper>
              <TextField onChange={(e)=> onValueChange(e)} name="username" variant='standard' label="Enter Username" />
              
              {error && <ErrorMessage>Please Enter valid Username or Password</ErrorMessage>}
              <TextField onChange={(e)=>onValueChange(e)} name="password" variant='standard' label="Enter Password" />
              <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
              <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => { toogleSignUp() }}>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
            :
            <Wrapper>
              <TextField variant='standard' onChange={(e) => { onInputChange(e) }} name="firstname" label="Enter FirstName" />
              <TextField variant='standard' onChange={(e) => { onInputChange(e) }} name="lastname" label="Enter LastName" />
              <TextField variant='standard' onChange={(e) => { onInputChange(e) }} name="username" label="Enter Username" />
              <TextField variant='standard' onChange={(e) => { onInputChange(e) }} name="email" label="Enter Email" />
              <TextField variant='standard' onChange={(e) => { onInputChange(e) }} name="password"  label="Enter Password"/>
              <TextField variant='standard' onChange={(e) => { onInputChange(e) }} name='phone' label="Enter Phone" />
              <LoginButton onClick={()=>SignupUser()}>Continue</LoginButton>

            </Wrapper>

          }
        </Component>
      </Dialog>

    </>
  )
}

export default LoginDialog