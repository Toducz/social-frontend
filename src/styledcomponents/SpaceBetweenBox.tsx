import styled from '@emotion/styled';
import Box from '@mui/material/Box';

/**
 * Flex box with justified content
 * with equal spacing, filling out containing box.
 */
const SpaceBetweenBox = styled(Box)({
  justifyContent: 'space-between',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export default SpaceBetweenBox;
