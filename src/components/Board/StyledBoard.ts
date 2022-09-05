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

export const SubItem = styled(Box)`
  .gray {
    background-color: #363636;
  }
  .yellow {
    background-color: #aa9f00;
  }
  .green {
    background-color: #43aa13;
  }

  .flip {
  animation: flip .4s ease-in-out;
}

@keyframes flip {
  0% {
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
  100% {
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
}

`;

