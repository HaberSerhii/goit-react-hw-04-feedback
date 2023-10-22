import styled from 'styled-components';

export const StatisticContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
  color: #17b1fe;
  :nth-child(1) {
    color: #44ec0d;
  }
  :nth-child(2) {
    color: #e9ec0d;
  }
  :nth-child(3) {
    color: #ec0d0d;
  }
`;

export const StatisticName = styled.p`
  font-weight: 600;
`;

export const StatisticResult = styled.span`
  :nth-child(1) {
    color: white;
  }
`;
