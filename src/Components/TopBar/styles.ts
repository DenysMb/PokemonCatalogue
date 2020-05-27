import styled from 'styled-components'

export const StyledDiv = styled.div`

  display: flex;
  align-items: center;
  padding: 13px 20px;
  border-bottom: 1px solid #ebedf0;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.4);
  z-index: 1;
  
  a, small {
    text-decoration: none;
    font-weight: 500;
    color: #666;
  }
  
  h3 {
    font-weight: 500;
    margin: 0;
    flex: 1;
    padding: 0px 10px;
    font-family: monospace;
    display: flex;
    align-items: center;
  }
  
  img {
    width: 22px;
    height: 22px;
    
    &.SearchIcon {
      margin-left: 10px;
    }
  }
`