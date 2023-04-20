import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import TitleContext from '../../context/TitleContext';
import NavBar from './NavBar';
import TopBar from './TopBar';

export default function Frame() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const titleContext = useContext(TitleContext);
  return (
    <>
      <TopBar navbarIsOpen={navbarIsOpen} setNavbarIsOpen={setNavbarIsOpen} />
      <Toolbar />
      <NavBar navbarIsOpen={navbarIsOpen} setNavbarIsOpen={setNavbarIsOpen} />
      <Typography variant="h3">{titleContext?.title}</Typography>
      <Outlet />
    </>
  );
}
