import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom';

export default function Registration () {

    const [isVisible, setVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setUserName] = useState('');

    const navigate = useNavigate();

    const visibility = () => {
        setVisible(!isVisible);
    }

    const handleRegister = async (e) => {

        e.preventDefault(); 

        try {

            if (!email || !name || !password) {
                alert('all fields required');
            }   

            const res = await fetch('http://localhost:3000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    name,
                    password        
                })
            });
        
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            alert('Registration successful: ' + data.message);

        } catch (error) {
            alert("Error during registration: " + error.message);
        }
    }

    return(
        <>
            <div className='registrationwrapper' style={{height: '85.17vh', width: '72.24vw'}}>

                <Box sx={{width: '45%', height: '100%', backgroundColor: '#252525', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant="h4" sx={{fontWeight: 'bold', color: '#ffffff', mb: 3, mt: 3}}>WELCOME TO</Typography>
                    <Box sx={{mb: 8, color: '#ffffff', display: 'flex', gap: '10px',alignItems: 'center', flexDirection: 'column' }}>
                        <div style={{borderRadius: '50%', height: '144px', width: '144px', backgroundColor: '#D9D9D9'}}></div>
                        <Typography variant="h5" sx={{fontWeight: 'bold'}}>LOGO NAME</Typography>
                    </Box>
                    <div style={{width: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom:'40px', marginTop: '10px'}}>
                        <Typography variant="h6">what the dog doing? what
                                                the dog doing. what the
                        </Typography>
                    </div>
                    <div>
                        <Typography  sx={{mt: 1}}>Already have an account?</Typography>
                        <IconButton onClick={() => navigate('/')} size='small' sx={{fontSize: '15px', '&:hover' :{color: 'blue', outline: 'none'}, outline: 'none', backgroundColor: 'none', color: '#40E0D0'}}>Sign in</IconButton>
                    </div>
                </Box>
                
                <Box sx={{width: '55%', height: '100%', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#000000'}}>
                    <Typography variant="h4" sx={{fontWeight: 'bold', mb: 7.5, mt: 5}}>CREATE YOUR ACCOUNT</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', width: '70%', gap: '28px', alignItems: 'center'}}>
                        <TextField onChange={(e) => {setEmail(e.target.value)}} fullWidth id='filled-basic' variant='filled' label='Email Address'/>
                        <TextField onChange={(e) => {setUserName(e.target.value)}} fullWidth id='filled-basic' variant='filled' label='Username'/>
                        <TextField onChange={(e) => {setPassword(e.target.value)}} fullWidth id='filled-basic' variant='filled' label='Password' 
                            type={isVisible ? 'text' : 'password'}
                            InputProps = {{
                                endAdornment : (<InputAdornment position='end'>
                                    <IconButton onClick={visibility} sx={{'&:focus':{outline: 'none', border: 'none'}}}>
                                        {isVisible ? <VisibilityOff/>:<Visibility/>}
                                    </IconButton>
                                </InputAdornment>),
                            }}
                        />
                        <Button onClick={handleRegister} size='large' sx={{backgroundColor: '#000000', color: '#ffffff', width: '50%'}}>
                            SIGN UP
                        </Button>
                    </Box>
                    <Divider sx={{ width: '30%', bgcolor: 'grey.500', my: 2 }} />
                    <Typography>or continue with</Typography>    
                    <div>
                        <Button sx={{outline: 'none'}}>
                            <FcGoogle size={30}/>
                        </Button>
                        <Button sx={{outline: 'none'}}>
                            <FaFacebook size={30} color="#1877F2" />
                        </Button>
                        <Button sx={{outline: 'none'}}>
                            <FaGithub size={30} color="#000"/>
                        </Button>
                    </div>
                </Box>
            </div>
        </>
    );
}