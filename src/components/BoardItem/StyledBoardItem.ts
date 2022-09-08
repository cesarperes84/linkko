import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';


export const SubItem = styled(Box)`
  width: 2.5em;
  height: 2.5em;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px;
  border: 6px solid rgb(78, 78, 78);
  font-size: 2.5em;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  .gray {
    background-color: #363636;
    color:  #999;
  }
  .lightGray {
    background-color: #999;
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

