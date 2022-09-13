import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const Keyboard = styled(Box)`
  margin-top: 60px;
  background: #222;
  border-radius: 4px;
  padding: 5px;
  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
    border: 4px solid rgb(78, 78, 78);
    font-size: 2em;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
 }
`;

export const List = styled(Box)`
    width: 100%;
    display: flex;
    margin: 5px 0;
`;

export const Key = styled(Box)`
  font-size: 30px;
  font-weight: bold;
  padding: 7px 7px;
  background-color: #363636;
  border: none;
  color: #fff;
  cursor: pointer;
  width: 2em;
  height: 2em;
  margin: 0 4px;
  text-align: center;
  border-radius: 4px;
`;
