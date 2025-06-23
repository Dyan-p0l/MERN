import React from 'react';
import Typography  from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [isVisible, setVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    const passVisibility = () => {
        setVisible(!isVisible);
    }

    const handleLogin =  async (e) => {
        e.preventDefault();
        console.log("Login button clicked");
        try{
            const res = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: email, password: password})
            });

            const data = await res.json();

            if (res.ok) {
                alert("Login successful: " + data.message);
                console.log("User data:", data.user);
            }else{
                alert("login unsuccessful");
            }
        }catch(err){
            alert("Error during login: " + err.message);
        }
    }

    return (
        <>
            <div className='loginWrapper' style={{height: '69.54vh', width: '66.088vw', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'row'}}>
                <div className='signinwrapper' style={{height: '100%', width: '65%', backgroundColor: '#ffffff', display: 'flex', justifyContent: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '60%', gap: '20px', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant="h4" sx={{fontWeight: 750 ,mb: 4, mt: 4}}>
                            SIGN IN
                        </Typography>   
                        <div style={{display: 'flex', flexDirection: 'column', width: '100%', gap: '40px', marginBottom: 6}}> 
                            <TextField id='filled-basic' variant='filled' label='Username or email' onChange={e => setEmail(e.target.value)}></TextField>
                            <TextField
                             id='filled-basic' variant='filled' 
                             type={isVisible ? 'text' : 'password'} 
                             label='Password'
                             InputProps={{
                                endAdornment : (<InputAdornment position='end'>
                                    <IconButton onClick={passVisibility} sx={{'&:focus':{outline: 'none', border: 'none'}}}>
                                        {isVisible ? <VisibilityOff/>:<Visibility/>}
                                    </IconButton>
                                </InputAdornment>),
                             }}
                             onChange={e => setPassword(e.target.value)}
                             />
                        </div>
                        <Button onClick={handleLogin} variant="contained" size="large" sx={{borderRadius: '30px', minWidth: '200px', minHeight: '45px', mb: 4, backgroundColor: '#000000', '&:hover' :{backgroundColor: '#A3A3A3', color: 'black', outline: 'none'}}}>
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
                        <Button onClick={() => navigate('/register')} variant="contained" size="large" sx={{borderRadius: '30px', minWidth: '240px', backgroundColor: '#D9D9D9', color: 'black', fontWeight: 'bold', '&:hover' :{backgroundColor: '#A29E9E', color: 'white', outline: 'none'}}}>SIGN UP</Button>
                    </div>
                </div>
            </div>
        </>
    );


}