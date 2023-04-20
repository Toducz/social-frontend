import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import SpaceBetweenBox from '../../styledcomponents/SpaceBetweenBox';

type Props = {
  navbarIsOpen: boolean;
  setNavbarIsOpen: (isOpen: boolean) => unknown;
};

export default function TopBar({ navbarIsOpen, setNavbarIsOpen }: Props) {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('token-id');
    navigate('/signIn');
  };

  return (
    <AppBar position="fixed">
      <SpaceBetweenBox>
        <Button onClick={() => setNavbarIsOpen(!navbarIsOpen)} color="inherit">
          <MenuIcon />
        </Button>
        <Button onClick={onLogout}>
          <Typography color="black">LOGIN</Typography>
        </Button>
      </SpaceBetweenBox>
    </AppBar>
  );
}
