import styled from 'styled-components'

export const StyledDiv = styled.div`
  display: flex;

  .PokeTagRect {
    background: ${({ type }: { type: {}; }) => {
        switch (type) {
          case 'normal':
            // return 'linear-gradient(to right, #a8a878, #90905D)';
            return '#a8a878';
          case 'fighting':
            // return 'linear-gradient(to left, #c03028, #D84B43)';
            return '#c03028';
          case 'flying':
            // return 'linear-gradient(to right, #a890f0, #8563EA)';
            return '#a890f0';
          case 'poison':
            // return 'linear-gradient(to left, #a040a0, #BC57BC)';
            return '#a040a0';
          case 'ground':
            // return 'linear-gradient(to right, #e0c068, #D7AE3E)';
            return '#e0c068';
          case 'rock':
            // return 'linear-gradient(to left, #b8a038, #CCB657)';
            return '#b8a038';
          case 'bug':
            // return 'linear-gradient(to left, #a8b820, #C9DB30)';
            return '#a8b820';
          case 'ghost':
            // return 'linear-gradient(to left, #705898, #8A74AF)';
            return '#705898';
          case 'steel':
            // return 'linear-gradient(to right, #b8b8d0, #9999BC)';
            return '#b8b8d0';
          case 'fire':
            // return 'linear-gradient(to right, #f08030, #DD6510)';
            return '#f08030';
          case 'water':
            // return 'linear-gradient(to right, #6890f0, #3A6EEB)';
            return '#6890f0';
          case 'grass':
            // return 'linear-gradient(to right, #78c850, #5FAE37)';
            return '#78c850';
          case 'electric':
            // return 'linear-gradient(to right, #f8d030, #EDBF08)';
            return '#f8d030';
          case 'psychic':
            // return 'linear-gradient(to right, #f85888, #F62765)';
            return '#f85888';
          case 'ice':
            // return 'linear-gradient(to right, #98d8d8, #73CACA)';
            return '#98d8d8';
          case 'dragon':
            // return 'linear-gradient(to right, #7038f8, #4D09F4)';
            return '#7038f8';
          case 'dark':
            // return 'linear-gradient(to left, #705848, #8F705C)';
            return '#705848';
          case 'fairy':
            // return 'linear-gradient(to right, #dea5de, #D080D0)';
            return '#dea5de';
          case 'unknown':
            // return 'linear-gradient(to left, #807870, #99928A)';
            return '#807870';
          case 'shadow':
            // return 'linear-gradient(to left, #4B4F56, #626872)';
            return '#4B4F56';
          default:
            // return 'linear-gradient(to left, #807870, #99928A)';
            return '#807870';
        }
      }};
    color: #fff;
    padding: 3px 10px;
    border-radius: 2px;
    text-transform: capitalize;
    font-size: 0.8rem;
    font-weight: 500;
  }
`