import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

function Header({
  onHeroClick,
  onAboutClick,
  onProjectsClick,
  onContactClick,
  onExperienceClick,
}) {
  const theme = useTheme();

  // 🔹 Use 'sm' instead of 'md' — only collapse to mobile at <=600px
  const isTabletOrBelow = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const menuItems = [
    { label: 'Home', onClick: onHeroClick },
    { label: 'About', onClick: onAboutClick },
    { label: 'Experience', onClick: onExperienceClick },
    { label: 'Projects', onClick: onProjectsClick },
    { label: 'Contact', onClick: onContactClick },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: 'linear-gradient(90deg, #0f355e, #1e88e5)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          zIndex: 1200,
          py: { xs: 0.5, sm: 0.5, md: 1 },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            px: { xs: 2, sm: 4, md: 8 },
          }}
        >
          {/* ✅ Brand Logo */}
          <Box
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
              fontWeight: 700,
              color: 'white',
              letterSpacing: 1,
              userSelect: 'none',
              cursor: 'pointer',
            }}
            onClick={onHeroClick}
          >
            Portfolio
          </Box>

          {/* ✅ Desktop / Laptop Menu */}
          {!isTabletOrBelow && (
            <Box
              sx={{
                display: 'flex',
                gap: { sm: 2, md: 3, lg: 4 },
                alignItems: 'center',
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={item.onClick}
                  sx={{
                    color: '#fff',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    fontSize: { sm: '0.8rem', md: '0.9rem', lg: '1rem' },
                    letterSpacing: 0.5,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#32f3f0ff',
                      transform: 'scale(1.08)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* ✅ Mobile / Tablet Menu Button */}
          {isTabletOrBelow && (
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleDrawerToggle}
              aria-label="menu"
              sx={{
                color: '#fff',
                '&:hover': { color: '#32f3f0ff' },
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* ✅ Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, #0f355e, #1e88e5)',
            color: 'white',
            width: 240,
            paddingTop: 3,
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => {
                  item.onClick();
                  setDrawerOpen(false);
                }}
                sx={{
                  textAlign: 'center',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.15)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    fontSize: '1rem',
                    color: 'white',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
