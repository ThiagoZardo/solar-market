import styled from 'styled-components';

export const BodyProducts = styled.div`
  display: flex;
  align-content: stretch;

  .icon-cart {
    color: blue;
    cursor: pointer;
    font-size: 25px;
    margin-left: 30px;
    padding: 5px;
  }
`;

export const CardProducts = styled.div`
  display: flex;
  width: 120px;
  height: 220px;
  padding: 30px;
  margin-bottom: 70px;
`;

export const ContainerProducts = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  margin: 70px 130px;
  width: 75%;
  height: auto;
`;
