import styled from "styled-components";

const CartWrapeer = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const CartTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin: 30px 0px;
`;

const OrderWrapper = styled.div`
  width: 100%;
`;

const PriceWrapper = styled.div`
  margin-top: 40px;
  position: relative;
  margin-left: auto;
  right: 0;
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TotalPriceTxt = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const TotalPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const ButtonWrapper = styled.div`
  width: 200px;
  position: relative;
  margin-left: auto;
  right: 0;
  margin-bottom: 40px;
  margin-top: 40px;
`;

export {
  CartWrapeer,
  CartTitle,
  
  OrderWrapper,
  PriceWrapper,
  TotalPriceTxt,
  TotalPrice,
  ButtonWrapper,
};
