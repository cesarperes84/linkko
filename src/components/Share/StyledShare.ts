import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
  padding: 20px 0;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 5px;
  position: absolute;
  top: 160px;
  width: 320px;
`;

export const Paragraph = styled(Box)`
  color: #4e4e4e;
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

export const Solution = styled(Box)`
  background: #00af80;
  border-radius: 4px;
  font-weight: bold;
  padding: 10px;
  position: absolute;
  text-align: center;
  top: 95px;
  width: 130px;
`;


export const ShareLink = styled(Box)<{isCopied: boolean}>`
  cursor: pointer;
  text-decoration: underline;
  padding-left: 5px;
  a {
    text-decoration: ${({ isCopied }) => isCopied ? "none" : "underline"};
  }
`;
