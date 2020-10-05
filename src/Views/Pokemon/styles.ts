import styled from "styled-components";

export const StyledDiv = styled.div`
  .BackButton {
    cursor: pointer;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  .BoldSpan {
    margin-right: 5px;
    color: #353f47;
    font-weight: 600;
  }

  .TextRow {
    margin-top: 10px;

    &.PokemonType {
      display: flex;
      span:last-of-type {
        display: flex;

        div {
          margin-right: 3px;
        }
      }
    }
  }

  .FlexBody {
    display: flex;

    .ImageContainer {
      background-color: rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(0, 0, 0, 0.25);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      padding: 10px;
      margin-right: 10px;
      position: relative;

      &Backgroud {
        position: absolute;
        background-color: ${({ color }) => color};
        width: 100%;
        height: 100%;
        opacity: 0.25;
      }
    }

    img {
      object-fit: contain;
      z-index: 1;
    }
  }

  @media screen and (max-width: 600px) {
    .FlexBody {
      flex-direction: column;
    }
  }
`;
