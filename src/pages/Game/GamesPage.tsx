import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, Link, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GameQueryParams, useAllGames } from '../../api/game.api';
import useTitle from '../../hooks/useTitle';
import GameCard from './GameCard';

export default function GamesPage() {
  useTitle('Games');
  const [gameQueryParams, setGameQueryParams] = useState<GameQueryParams>(undefined);
  const [filters, setFilters] = useState<string[]>([]);
  const { data: games } = useAllGames({ sortBy: 'creationDate', ...gameQueryParams });

  const handleFilter = (event: React.MouseEvent<HTMLElement>, currentFilters: string[]) => {
    setFilters(currentFilters);
    const newGameQueryParam: GameQueryParams = {
      own: false,
      active: false,
    };

    if (currentFilters.includes('own')) {
      newGameQueryParam.own = true;
    }
    if (currentFilters.includes('active')) {
      newGameQueryParam.active = true;
    }

    setGameQueryParams(newGameQueryParam);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <ToggleButtonGroup value={filters} onChange={handleFilter}>
          <ToggleButton color="success" value="own">
            Own
          </ToggleButton>
          <ToggleButton color="success" value="active">
            Active
          </ToggleButton>
        </ToggleButtonGroup>
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
