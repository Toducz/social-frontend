import styled from '@emotion/styled';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useAllGames } from '../../api/game.api';
import useTitle from '../../hooks/useTitle';

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
}));

export default function Test() {
  useTitle('Valami jo');
  const { data } = useAllGames();
  console.log(data);
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {[1, 2, 3, 4].map((card) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={card}>
          <Paper>{card}</Paper>
        </Grid>
      ))}
    </Grid>
  );
}
