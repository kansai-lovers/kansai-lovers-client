import React, { VFC } from "react";
import * as Styled from "./styled";

type Props = {
  children: string;
};

export const Button: VFC<Props> = ({ children }) => {
  return <Styled.Button>{children}</Styled.Button>;
};
