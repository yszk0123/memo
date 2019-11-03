import React from 'react';
import styled from 'styled-components';

import { Paper } from '../Paper';

export default {
  title: 'atoms/Paper',
};

export const PaperStory: React.FunctionComponent = () => <Paper>Paper</Paper>;

export const PaperWithStyleStory: React.FunctionComponent = () => <StyledPaper>Paper</StyledPaper>;

const StyledPaper = styled(Paper)`
  margin: var(--space);
  padding: var(--space);
  width: 100px;
  height: 100px;
`;
