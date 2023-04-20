import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';

type Props = {
  navbarIsOpen: boolean;
  setNavbarIsOpen: (isOpen: boolean) => unknown;
};

export default function NavBar({ navbarIsOpen, setNavbarIsOpen }: Props) {
  return (
    <Drawer anchor="left" open={navbarIsOpen} onClose={() => setNavbarIsOpen(false)}>
      <Box sx={{ mt: 8 }}>
        <List>
          <Link component={NavLink} to="/profil">
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="atasdasd" />
            </ListItem>
          </Link>
        </List>
      </Box>
    </Drawer>
  );
}
