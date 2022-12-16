import React from "react";
import { iconsShareUtil } from "../../utility/IconsShareUtil";
import * as S from "./StyledShare";

interface ShareProps {
  level: number;
}

export const Share = ({ level }: ShareProps) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const iconsShare = iconsShareUtil(level, 'game-over');

  const shareContent = `Connect.io ${iconsShare}`;
  const url = "https://connect.io.vercel.app";

  const handleCopyText = () => {
    navigator.clipboard.writeText(`${shareContent} ${url}`);
    setIsCopied(true);
  };

  return (
    <S.Container>
      <S.Paragraph>
      {isCopied ? (
        'Link copied, now it`s just paste in your social network.'
      ) : (
        <>
          Share your score, just
          <S.ShareLink onClick={handleCopyText} isCopied={isCopied}>
            copy the link
          </S.ShareLink>
          .
        </>
      )}
      </S.Paragraph>
    </S.Container>
  );
};

export default Share;
