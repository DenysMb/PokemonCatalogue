import React from 'react';
import { StyledDiv } from "./styles";

interface Props {
  type: string;
}

const TypeTag = ({ type }: Props) => {
  return (
    <StyledDiv type={type}>
      <div className="PokeTagRect">
        {type}
      </div>
    </StyledDiv>
  );
};

export default TypeTag;