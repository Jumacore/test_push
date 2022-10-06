import React from 'react';
import { Box, Typography } from '@mui/material';
import Section from '../components/NestedComponentSection.jsx';
import Heading from '../components/NestedComponentHeader.jsx';

const NestedComponent = () => {
  return (
    <Box sx={{ p: 2, border: '1px dashed grey', backgroundColor: '#e0f2fe' }}>
      <Typography variant="h5">NestedComponent (Non Context)</Typography>
      <Section>
        <Heading level={1}>Title</Heading>
        <Section>
          <Heading level={2}>Heading</Heading>
          <Heading level={2}>Heading</Heading>
          <Heading level={2}>Heading</Heading>
          <Section>
            <Heading level={3}>Sub-heading</Heading>
            <Heading level={3}>Sub-heading</Heading>
            <Heading level={3}>Sub-heading</Heading>
            <Section>
              <Heading level={4}>Sub-sub-heading</Heading>
              <Heading level={4}>Sub-sub-heading</Heading>
              <Heading level={4}>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </Box>
  );
};

export default NestedComponent;
