import styled from 'styled-components';



export const ButtonCheckout = styled.button`
  display:block;
  margin: 0 auto;
  height: 65px;
  background-color: #299B01;
  color: white;
  font-size: 21px;
  padding: 20px 70px;
  border: none;
  outline: none;
  &:disabled {
    color: #bbb;
    background-color: #ccc;
    border-color: #aaa;
  }
`;