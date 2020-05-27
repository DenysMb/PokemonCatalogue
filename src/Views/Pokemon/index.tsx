import React, { useEffect } from "react";
import { StyledDiv } from "./styles";
import { getPokemonImage } from "../../Utils/utils";
import TypeTag from "../../Components/TypeTag";

interface Props {
  back?: any;
  data?: any;
}

const Pokemon = ({ back, data }: Props) => {
  useEffect(() => {
    console.log("DATA", data);
  }, []);

  return (
    <StyledDiv
      color={(data && data.specie && data.specie.color.name) || "white"}
    >
      <div className={"BackButton"} onClick={() => back()}>
        {"< Back"}
      </div>

      {data.general && data.specie ? (
        <div className={"FlexBody"}>
          <div className="ImageContainer">
            <img
              src={getPokemonImage(data.general.id)}
              alt={data.specie.names[2].name}
            />
            <div className="ImageContainerBackgroud" />
          </div>

          <div className={"PokemonInformations"}>
            <div className={"TextRow PokemonName"}>
              <span className={"BoldSpan"}>Name:</span>
              {data.specie.names[2].name}
            </div>
            <div className={"TextRow PokemonGenre"}>
              <span className={"BoldSpan"}>Genre:</span>
              {data.specie.genera[2].genus}
            </div>
            <div className={"TextRow PokemonDescription"}>
              <span className={"BoldSpan"}>Description:</span>
              {data.specie.flavor_text_entries[1].flavor_text}
            </div>
            <div className={"TextRow PokemonHabitat"}>
              <span className={"BoldSpan"}>Habitat:</span>
              <span>
                {data.specie.habitat.name.replace(/\b(\w)/g, (x: string) =>
                  x.toUpperCase()
                )}
              </span>
            </div>
            <div className={"TextRow PokemonType"}>
              <span className={"BoldSpan"}>Type:</span>
              <span>
                {data.general.types.map((d: { type: { name: string } }, i: number) => (
                  <TypeTag key={`Tag-${d.type.name}-${i + 1}`} type={d.type.name} />
                ))}
              </span>
            </div>
            <div className={"TextRow PokemonStats"}>
              <span className={"BoldSpan"}>Stats:</span>
              <span>
                {data.general.stats.map(
                  (
                    d: { base_stat: number; stat: { name: string } },
                    i: number
                  ) =>
                    `${d.stat.name.replace(/\b(\w)/g, (x: string) =>
                      x.toUpperCase()
                    )}: ${d.base_stat} ${
                      i != data.general.stats.length - 1 ? "| " : ""
                    }`
                )}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </StyledDiv>
  );
};

export default Pokemon;
