import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const Keyboard = styled(Box)`
  /* display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  padding: 7px;
  border: none;
  color: #fff; */
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
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
 }
`;

export const List = styled(Box)`
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-direction: row; */
    width: 100%;
    display: flex;
    margin: 5px 0;
`;

export const Key = styled(Box)`
  font-size: 30px;
  font-weight: bold;
  padding: 17px 7px;
  background-color: #363636;
  border: none;
  color: #fff;
  cursor: pointer;
  width: 2.5em;
  height: 2.5em;
  margin: 0 4px;
  text-align: center;
  border-radius: 4px;
`;

/* .keyboard li,
.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  border: 2px solid rgb(78, 78, 78);
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
}

.keyboard li {
  font-size: 20px;
  padding: 7px;
  background-color: #363636;
  border: none;
  color: #fff;
  cursor: pointer;
  width: 40px;
}

.keyboard {
  margin: 20px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
} */
