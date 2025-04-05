import styled from 'styled-components';

export const AreaHeader = styled.div`
  justify-content: space-between;
  background-color:rgb(163, 51, 144);
  width: 100%;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  a {
    text-decoration: none;  
  }
  
  ul{
    display: flex;
    gap: 20px;
    padding: 0;
  }

  li {
    list-style: none;
  }
`;
