import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const settings = ['Profile', 'Logout'];

function NewNavBar({ user }) {
  const redirectHandler = () => {
    window.location = '/shop';
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalHospitalIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Социальная аптека
          </Typography>
          {user?.admin == true ? (
            <Link href="/addCard" style={{ color: 'white', padding: '7px' }}>
              Карточки
            </Link>
          ) : (
            <div />
          )}
          {!user && (
            <>
              <Link href="/signin" style={{ color: 'white', padding: '7px' }}>
                Вход
              </Link>
              <Link href="/signup" style={{ color: 'white', padding: '7px' }}>
                Регистрация
              </Link>
            </>
          )}
          {user && (
            <>
              <Link href="/shop" style={{ color: 'white', padding: '7px' }}>
                Корзина
              </Link>
              <Link href="/profile" style={{ color: 'white', padding: '7px' }}>
                Профиль
              </Link>
              <Link href="/api/auth/logout" style={{ color: 'white', padding: '7px' }}>
                Выход
              </Link>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NewNavBar;
