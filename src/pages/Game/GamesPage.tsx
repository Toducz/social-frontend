import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, Link, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { useAllGames } from '../../api/game.api';
import useTitle from '../../hooks/useTitle';
import GameCard from './GameCard';

export default function GamesPage() {
  useTitle('Games1234');
  const { data: games } = useAllGames();

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tooltip title="Add new game">
          <Link component={NavLink} to="/games/newGame">
            <AddCircleOutlineIcon />
          </Link>
        </Tooltip>
      </Box>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {games?.map((game) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={game.id}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
