import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const Board = styled(Box)`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const List = styled(Box)`
  margin-top: 0;
`;

export const Item = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  border: 2px solid rgb(78, 78, 78);
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
    border: 4px solid rgb(78, 78, 78);
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
  }
`;

