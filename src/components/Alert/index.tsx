import React from "react";
import PlayIcon from "@mui/icons-material/PlayArrow";
import * as S from "./StyledAlert";

export const Alert = ({
  isOpen,
  play,
}: {
  isOpen: boolean;
  play: any;
}) => (
  <>
    {isOpen && (
      <S.Container>
        <S.Paragraph>
          GO TO NEXT LEVEL
        </S.Paragraph>
        <S.Paragraph>
          <S.Button
            variant="outlined"
            color="success"
            disableElevation
            startIcon={<PlayIcon />}
            onClick={() => play()}
          >
            PLAY
          </S.Button>
        </S.Paragraph>
      </S.Container>
    )}
  </>
);

export default Alert;
