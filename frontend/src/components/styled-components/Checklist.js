import styled from 'styled-components';

export const Checklist = styled.div`
  .popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 252, 252, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: #FFF;
}

.popup-inner {
  background-color: #FFF;
  position: relative;
  padding: 100px;
  width: 100%;
  max-width: 1200px;
  z-index: 999;
}

.popup-inner .close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
}

.delivery-form {
  width: 100%;
  height: 300px;
  text-align: center;
}

.btn-finish {
  margin-top: 20px;
  width: 150px;
  height: 40px;
  border-radius: 15px;
  border: 0;
  background-color: blueviolet;
  color:  white;
  cursor: pointer;
}

.productsInTheCart img {
  width: 40px;
}

.value-total {
  font-size: 20px;
  font-weight: bold;
}

.product {
  margin: 0 30px;
}

.product p {
  font-size: 10px;
}

.productsInTheCart {
  display: flex;
}
`;
