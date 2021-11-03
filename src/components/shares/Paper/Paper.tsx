import { ReactNode, VFC } from "react";
import * as Styled from "./styled";
import { StyledPaperProps } from "./styled";

type Props = {
  children: ReactNode;
} & StyledPaperProps;

export const Paper: VFC<Partial<Props>> = ({
  children,
  width = "auto",
  height = "auto",
  pt = "0",
  pr = "0",
  pb = "0",
  pl = "0",
}) => {
  return (
    <Styled.StyledPaper
      width={width}
      height={height}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
    >
      {children}
    </Styled.StyledPaper>
  );
};
