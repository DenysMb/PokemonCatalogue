import React from 'react';
import { StyledDiv } from "./styles";
import { getPokemonImage } from "../../Utils/utils";
import PokeballIcon from '../../Assets/images/cute-pokeball.svg'

interface Props {
  name: string;
  id: number | string;
}

const PokeIcon = ({ name, id }: Props) => {
  return (
    <StyledDiv>
        <img
          src={getPokemonImage(id)}
          alt={name}/>
          <div className="PokemonName">
            {name}
          </div>
      <div className="PokemonId">
        #{id}
      </div>
    </StyledDiv>
  );
};

export default PokeIcon;