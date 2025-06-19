import React from 'react';
import Typography  from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { SocialIcon } from 'react-social-icons';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub } from 'react-icons/fa';

export default function Login() {

    return (
        <>
            <div className='loginWrapper' style={{height: '69.54vh', width: '66.088vw', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'row'}}>
                <div className='signinwrapper' style={{height: '100%', width: '65%', backgroundColor: '#ffffff', display: 'flex', justifyContent: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '60%', gap: '20px', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant="h4" sx={{fontWeight: 750 ,mb: 4, mt: 4}}>
                            SIGN IN
                        </Typography>
                        <div style={{display: 'flex', flexDirection: 'column', width: '100%', gap: '40px', marginBottom: 6}}> 
                            <TextField id='filled-basic' variant='filled' label='Username or email'></TextField>
                            <TextField id='filled-basic' variant='filled' type='password' label='Password'></TextField>
                        </div>
                        <Button variant="contained" size="large" sx={{borderRadius: '30px', minWidth: '200px', minHeight: '45px', mb: 4, backgroundColor: '#000000', '&:hover' :{backgroundColor: '#A3A3A3', color: 'black'}}}>
                            LOG IN
                        </Button>
                        <Typography variant="h10">
                            or Log in using social networks
                        </Typography>
                        <div>
                            <Button><FcGoogle size={30}/></Button>
                            <Button><FaFacebook size={30} color="#1877F2" /></Button>
                            <Button><FaGithub size={30} color="#000"/></Button>
                        </div>
                    </div>
                </div>
                <div className='registerWrapper' style={{height: '100%', width: '35%', backgroundColor: '#383333'}}>
                    <div style={{height: '60%', width: '80%', textAlign: 'center', color: 'white'}}>
                        <Typography variant="h4" sx={{fontWeight: 750, mb: 8}}>NEW HERE?</Typography>
                        <Typography variant="h6" sx={{mb: 6}}>SIGN  UP AND DISCOVER A 
                                                GREAT AMOUNT OF NEW 
                                                OPPORTUNITIES
                        </Typography>
                        <Button variant="contained" size="large" sx={{borderRadius: '30px', minWidth: '240px', backgroundColor: '#D9D9D9', color: 'black', fontWeight: 'bold', '&:hover' :{backgroundColor: '#A29E9E', color: 'white'}}}>SIGN UP</Button>
                    </div>
                </div>
            </div>
        </>
    );
}