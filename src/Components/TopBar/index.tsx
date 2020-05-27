import React from "react";
import { StyledDiv } from "./styles";
import PokeballIcon from "../../Assets/images/icon.png";
import LeaderboardIcon from "../../Assets/images/gradient-leaderboard.svg";
import SearchIcon from "../../Assets/images/gradient-search.svg";

const TopBar = () => {
  return (
    <StyledDiv>
      <img src={PokeballIcon} alt="Pokeball Icon" className={"PokeballIcon"} />
      <h3>Pokemon Catalogue</h3>
      {/*<img src={LeaderboardIcon} alt="Leaderboard Icon" className={'LeaderboardIcon'}/>*/}
      {/*<img src={SearchIcon} alt="Search Icon" className={'SearchIcon'}/>*/}
      <a href="https://github.com/DenysMb">
        <small>by Denys Madureira</small>
      </a>
    </StyledDiv>
  );
};

export default TopBar;
