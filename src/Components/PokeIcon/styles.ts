import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  &:hover,
  &:active,
  &:focus {
    background: linear-gradient(to bottom, #6dc7ff, #e6abff);
    .PokemonId {
      color: #fff;
    }
  }

  .PokemonName {
    text-transform: capitalize;
    font-weight: 500;
    color: #353f47;
  }

  .PokemonId {
    color: #aaa;
    font-size: 12px;
  }
`;
