import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  position: absolute;
  top: 40px;
  width: 320px;
`;

export const Paragraph = styled(Box)`
  color: #fefefe;
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 414px) {
    font-size: 0.9rem;
  }
`;


