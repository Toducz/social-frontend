import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

type Props = {
  text: string;
};

export function NotFoundError({ text }: Props) {
  return (
    <Box sx={{ borderRadius: '4px', backgroundColor: '#ffe4e6', padding: '16px' }}>
      <Typography sx={{ fontSize: '32px', lineHeight: 1, margin: '0 0 8px', fontWeight: 'bold' }}>404</Typography>
      <Typography>{text}</Typography>
    </Box>
  );
}
