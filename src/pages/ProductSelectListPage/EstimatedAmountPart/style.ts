import styled from 'styled-components';

export const EstimatedAmountPartContainer = styled.div`
  padding-bottom: 6%;
  border: 1px solid #dddddd;
  margin: auto;

  width: 95%;
  height: 310px;

  display: grid;
  grid-template-rows: 25% 15% 15% 25% 20%;
  grid-template-columns: 80%;
  align-items: center;
  justify-content: center;

  @media (min-width: 991px) {
    width: 80%;
  }
`;

export const EstimatedAmountTitle = styled.p`
  border-bottom: 1.5px solid #dddddd;

  font-weight: 400;
  font-size: 20px;
  line-height: 33px;

  letter-spacing: 0.5px;

  margin: 0;
  padding: 3% 0;
`;

export const EstimatedAmountTextLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const EstimatedAmountText = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;

  letter-spacing: 0.5px;

  @media (max-width: 300px) {
    font-size: 15px;
  }
`;

export const PurchaseButton = styled.button`
  display: block;
  margin: 0 auto;

  width: 90%;
  height: 100%;
  max-height: 73px;

  background: #333333;

  font-weight: 400;
  font-size: 24px;
  line-height: 21px;

  color: #ffffff;

  cursor: pointer;
`;
