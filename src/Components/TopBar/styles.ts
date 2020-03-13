import styled from 'styled-components'

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ebedf0;
  
  h3 {
    font-weight: 500;
    margin: 0;
    flex: 1;
    padding: 0px 10px;
    font-family: "DejaVu Sans Condensed";
  }
  
  img {
    width: 36px;
    height: 36px;
    
    &.SearchIcon {
      margin-left: 10px;
    }
  }
`