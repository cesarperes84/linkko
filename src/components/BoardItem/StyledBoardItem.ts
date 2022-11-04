import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';


export const Container = styled(Box)`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerItem = styled(Box)<{ type: string, initialRotation: number, rotation: number }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
  ${({ initialRotation, rotation }) => rotation ? `transform: rotate(${rotation}deg)` : `transform: rotate(${initialRotation}deg)`};

  :before {
    content: '';
    display: block;
    position: relative;
    ${({ type }) => type === "init-to-right" &&
      "width: 16px; height: 16px; background: rgb(78, 78, 78);"
    }
    ${({ type }) => type === "end-to-right" &&
      "width: 16px; height: 16px; background: rgb(78, 78, 78);"
    }
  }

  :after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    ${({ type }) => type === "blank" && "0"}

    ${({ type }) => type === "init-to-right" &&
      "height: 6px !important; border-top: 6px solid rgb(78, 78, 78);"
    }

  ${({ type }) => type === "end-to-right" &&
      "height: 6px !important; border-top: 6px solid rgb(78, 78, 78);"
    }

    ${({ type }) => type === "horizontal" &&
      "height: 6px !important; border-top: 6px solid rgb(78, 78, 78);"
    }

    ${({ type }) => type === "vertical" &&
      "width: 6px !important; border-right: 6px solid rgb(78, 78, 78);"
    }
    ${({ type }) => type === "top-right" &&
      "left: -19px; bottom: -19px; width: 42px; height: 42px; border-right: 6px solid rgb(78, 78, 78); border-top: 6px solid rgb(78, 78, 78);"
    };
    ${({ type }) => type === "bottom-right" &&
      "left: -19px; bottom: 19px; width: 42px; height: 42px; border-right: 6px solid rgb(78, 78, 78); border-bottom: 6px solid rgb(78, 78, 78);"
    };

  }
`;

