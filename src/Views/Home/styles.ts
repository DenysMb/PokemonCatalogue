import styled from "styled-components";
import BackgroundImage from "../../Assets/images/background.png";

export const StyledDiv = styled.div`
  background-image: url(${BackgroundImage});
  padding: 40px;
  flex: 1;

  .HomeContainer {
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    flex-direction: column;
    flex: 1;
    align-items: center;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);

    .PokemonList {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .NavigationContainer {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      padding-top: 20px;
      align-items: center;
      border-top: 1px solid rgba(0, 0, 0, 0.15);

      .NavigationLink {
        cursor: pointer;
      }
    }

    .NavigationButton {
      width: 42px;
      height: 42px;
    }

    .PageCount {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      margin: 0px 20px;
      font-family: "DejaVu Sans Condensed";
    }
  }

  @media screen and (max-width: 600px) {
    .HomeContainer {
      padding: 10px;
    }
  }
`;
