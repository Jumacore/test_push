import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from '../components/NestedComponentWithContextSection.jsx';
import Heading from '../components/NestedComponentWithContextHeader.jsx';

const NestedComponentWithContext = () => {
  return (
    <Box sx={{ p: 2, border: '1px dashed grey', backgroundColor: '#e0f2fe' }}>
      <Typography variant="h5">NestedComponent (Context)</Typography>
      <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section level={4}>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </Box>
  );
};

export default NestedComponentWithContext;
