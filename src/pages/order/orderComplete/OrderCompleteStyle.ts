import styled from "styled-components";

const OrderCompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px 0px;
`;

const OrderCompleteTitle = styled.p`
  font-size: 50px;
  font-weight: 900;
`;

const OrderCompleteDescWrapper = styled.div`
  text-align: center;
  margin: 20px 0px;
`;

const OrderCompleteDescTxt = styled.p`
  margin: 5px 0px;
`;

const OrderNumWrapper = styled.div`
  text-align: center;
  margin: 30px 0px;
`;

const OrderNumTxt = styled.p`
  font-weight: 600;
`;

const OrderNum = styled.p`
  font-size: 70px;
  font-weight: 1000;
  color: #fe5c5c;
`;

const OrderBooth = styled.p`
    margin: 20px 0px;
`;

const OrderProducts = styled.p`
  font-weight: bold;
  margin-bottom: 30px;
`;

export {
  OrderCompleteWrapper,
  OrderCompleteTitle,
  OrderCompleteDescWrapper,
  OrderCompleteDescTxt,
  OrderNumWrapper,
  OrderNumTxt,
  OrderNum,
  OrderBooth,
  OrderProducts,
};
