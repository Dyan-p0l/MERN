import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';

export function Header() {
  return (
    <Box sx={{flexGrow: 1, position: 'absolute', top: 0}}>
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <HomeFilledIcon />
                </IconButton>
                <IconButton>
                    <SmartDisplayIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    </Box>
  );
}
