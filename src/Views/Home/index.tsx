import React, { useEffect, useState } from "react";
import { StyledDiv } from "./styles";
import axios from "axios";
import PokeIcon from "../../Components/PokeIcon";
import NextImg from "../../Assets/images/gradient-next.svg";
import BackImg from "../../Assets/images/gradient-back.svg";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [pageCount, setPageCount] = useState(1);

  const setDatas = (page: string = "") => {
    console.log("Started");
    axios.get(page || "https://pokeapi.co/api/v2/pokemon/").then(res => {
      setPokemons(res.data.results);
      setNext(res.data.next);
      setPrevious(res.data.previous);
    });
  };

  useEffect(() => {
    setDatas();
  }, []);

  return (
    <StyledDiv>
      {pokemons.map((poke: { name: string; url: string }, index) => {
        const pokemonName = poke["name"];
        const pokemonId = poke["url"].split("/")[
          poke["url"].split("/").length - 2
        ];
        return <PokeIcon name={pokemonName} id={pokemonId} />;
      })}

      <img
        className={'NavigationButton'}
        src={BackImg}
        alt="Previous page"
        onClick={() => {
          if (previous) {
            setDatas(previous);
            setPageCount(pageCount - 1);
          }
        }}
      />

      <div className={'PageCount'}>{pageCount}</div>

      <img
        className={'NavigationButton'}
        src={NextImg}
        alt="Next page"
        onClick={() => {
          if (next) {
            setDatas(next);
            setPageCount(pageCount + 1);
          }
        }}
      />
    </StyledDiv>
  );
};

export default Home;
