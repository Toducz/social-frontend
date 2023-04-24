import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useAllGames } from '../../api/game.api';
import useTitle from '../../hooks/useTitle';
import GameCard from './GameCard';

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
}));

export default function GamesPage() {
  useTitle('Valami jo');
  const { data: games } = useAllGames();
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {games?.map((game) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={game.id}>
          <GameCard game={game} />
        </Grid>
      ))}
    </Grid>
  );
}
