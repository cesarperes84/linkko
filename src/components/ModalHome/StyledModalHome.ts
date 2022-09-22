import Box from "@mui/material/Box";
import ButtonMui from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
  padding: 20px;
  background-color: #222;
  box-sizing: border-box;
  border-radius: 5px;
  position: absolute;
  top: 80px;
  width: 320px;
`;

export const Paragraph = styled(Box)`
  color: #fefefe;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 414px) {
    font-size: 0.9rem;
  }
`;

export const Button = styled(ButtonMui)`
  color: #fff;
  margin-top: 30px;
`;

