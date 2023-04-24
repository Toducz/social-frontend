import { SvgIconProps } from '@mui/material';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  text: string;
  icon: ReactElement<SvgIconProps>;
  link: string;
};

export default function NavBarItem({ text, icon, link }: Props) {
  return (
    <Link component={NavLink} to={link}>
      <ListItem>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );
}
