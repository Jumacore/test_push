import React from 'react';
import { Box } from '@mui/material';

const Section = ({ children }) => {
  return (
    <Box
      sx={{
        p: '10px',
        m: '5px',
        border: '1px solid grey',
        borderRadius: '10px',
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
