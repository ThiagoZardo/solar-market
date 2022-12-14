import styled from 'styled-components';

export const CardProduct = styled.div`
  width: 300px;
  height: auto;
  margin: 20px 5px;
  padding: 5px 10px;
  background-color: rgb(192,217,217);
  border-radius: 20px;


  img {
    max-width: 150px;
  }

  p {
    font-size: 12px;
  }

  .title-product {
    font-weight: bold;
  }

  .value {
    font-size: 18px;
    font-weight: 900;
  }
`;

export const ContainerCardsProducts = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;