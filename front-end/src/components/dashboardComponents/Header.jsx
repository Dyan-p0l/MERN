import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function Header() {
    return(
        <AppBar position ="static" color='primary' sx={{width: '100%', backgroundColor: '#252525'}}>
            <Toolbar sx={{width: '100%'}}>
                <Typography>
                    ByteMe
                </Typography>
                <TextField id='filled-basic' variant='filled' label = 'Search something'/>
                <Button size='large' sx={{backgroundColor: '#40E0D0', color: '#000000', fontWeight: 'bold'}}>POST SOMETHING</Button>
            </Toolbar>
        </AppBar>
    );
}