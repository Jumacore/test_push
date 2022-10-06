import React from 'react';
import { Box } from '@mui/material';
// Deklarasi untuk menggunakan LevelContext
import { LevelContext } from '../contexts/LevelContext.js';

// Di sini kita mengubah Section untuk bisa menerima level
const Section = ({ level, children }) => {
  return (
    <Box
      sx={{
        p: '10px',
        m: '5px',
        border: '1px solid grey',
        borderRadius: '10px',
      }}
    >
      {/* Minta Section untuk menggunakan penyedia LevelContext */}
      {/* Sehingga bisa dipassing ke Children-nya */}
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </Box>
  );
};

export default Section;
