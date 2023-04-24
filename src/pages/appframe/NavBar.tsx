import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import NavBarItem from './NavBarItem';

type Props = {
  navbarIsOpen: boolean;
  setNavbarIsOpen: (isOpen: boolean) => unknown;
};

export default function NavBar({ navbarIsOpen, setNavbarIsOpen }: Props) {
  return (
    <Drawer anchor="left" open={navbarIsOpen} onClose={() => setNavbarIsOpen(false)}>
      <Box sx={{ mt: 8 }}>
        <List>
          <NavBarItem text="All games" icon={<InboxIcon />} link="/test" />
          <NavBarItem text="settings" icon={<SettingsApplicationsIcon />} link="settings" />
          <NavBarItem text="Own games" icon={<InboxIcon />} link="ownGames" />
        </List>
      </Box>
    </Drawer>
  );
}
