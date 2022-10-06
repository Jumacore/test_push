// Di sini kita akan menggunakan useContext juga
import React, { useContext } from 'react';
import { Box } from '@mui/material';
// Deklarasi untuk menggunakan LevelContext
import { LevelContext } from '../contexts/LevelContext.js';

// Di sini kita mengubah Section untuk bisa menerima level
const Section = ({ children }) => {
  // Di sini kita akan deklarasi level yang nantinya akan bertambah secara
  // otomatis
  const level = useContext(LevelContext);
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

      {/* Karena context bisa membaca Komponen di level atasnya */}
      {/* Kita bisa menggunakan +1 di sini */}
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </Box>
  );
};

export default Section;
