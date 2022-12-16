import React from "react";
import PlayIcon from "@mui/icons-material/PlayArrow";
import * as S from "./StyledModalHome";

export const ModalHome = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
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
            onClick={() => setIsOpen((prev) => !prev)}
          >
            PLAY
          </S.Button>
        </S.Paragraph>
      </S.Container>
    )}
  </>
);

export default ModalHome;
