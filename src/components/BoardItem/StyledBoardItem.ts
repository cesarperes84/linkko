import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';


export const Container = styled(Box)`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
  filter: brightness(1.4);
`;
