import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  :hover:nth-child(1) {
    background-color: #44ec0d;
    border: 2px solid white;
    border-radius: 10px;
    cursor: pointer;
    color: black;
  }
  :hover:nth-child(2) {
    background-color: #e9ec0d;
    border: 2px solid white;
    border-radius: 10px;
    cursor: pointer;
    color: black;
  }
  :hover:nth-child(3) {
    background-color: #ec0d0d;
    border: 2px solid white;
    border-radius: 10px;
    cursor: pointer;
    color: black;
  }
`;

export const ButtonFeedback = styled.button`
  width: 75px;
  padding: 10px;
  font-size: medium;
  border: 2px solid lightgreen;
  background-color: black;
  color: white;
  border-radius: 10px;
`;
