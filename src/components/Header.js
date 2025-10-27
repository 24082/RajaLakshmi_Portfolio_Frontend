import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

function Header({ onHeroClick, onAboutClick, onProjectsClick, onContactClick,onExperienceClick }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(90deg, #0f355e, #1e88e5)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        zIndex: 1000,
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', gap: 3 }}>
        <Button
          onClick={onHeroClick}
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#32f3f0ff',
              transform: 'scale(1.05)',
            },
          }}
        >
          Home
        </Button>
        <Button
          onClick={onAboutClick}
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            '&:hover': {
              color: '#32f3f0ff',
              transform: 'scale(1.05)',
            },
          }}
        >
          About
        </Button>
        <Button
          onClick={onExperienceClick}
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            '&:hover': {
              color: '#32f3f0ff',
              transform: 'scale(1.05)',
            },
          }}
        >
          Experience
        </Button>
        <Button
          onClick={onProjectsClick}
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            '&:hover': {
              color: '#32f3f0ff',
              transform: 'scale(1.05)',
            },
          }}
        >
          Projects
        </Button>
        <Button
          onClick={onContactClick}
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            '&:hover': {
              color: '#32f3f0ff',
              transform: 'scale(1.05)',
            },
          }}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;