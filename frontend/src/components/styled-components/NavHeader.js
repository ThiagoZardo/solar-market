import styled from 'styled-components';

export const NavHeader = styled.nav`
  background-color: #ffdb15;
  display: flex;
  height: 80px;
  justify-content: space-around;
  align-content: center;
  max-width: 100%;
  z-index: 1;
`;

export const CartShopHeader = styled.p`
  color: black;
  font-weight: 700;
  font-size: 12px;
  margin-top: -15px;
`;

export const SearchInput = styled.div`
  input[type=text] {
    background-color: rgba(255,255,255,.7);
    border: none;
    box-sizing: border-box;
    height: 30px;
    position: relative;
    width: 900px;
    -moz-box-sizing: border-box;
    z-index: 915;
  }
  
  button {
    cursor: pointer;
    width: 40px;
    height: 30px;
    top: 8px;
    right: 1px;
  }
`;

export const TextSearchHeader = styled.p`
  height: 20px;
`;
