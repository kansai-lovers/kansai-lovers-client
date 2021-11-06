import { ReactNode, VFC } from "react";
import { ColorKey } from "./constants";
import * as Styled from "./styled";

type Props = {
  children: ReactNode;
  color: ColorKey;
};

export const Tag: VFC<Props> = ({ children, color }) => {
  return <Styled.Tag color={color}>{children}</Styled.Tag>;
};
