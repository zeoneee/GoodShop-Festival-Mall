import styled from "styled-components";

const ProductWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin: 80px;
`;
const ImgWrapper = styled.div`
  width: 100%;
  max-height: 600px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DetailWrapper = styled.div`
  width: 100%;
`;

const InfoWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 140px;
`;

const ProductImg = styled.img``;
const ProductStoreName = styled.a`
  font-size: 18px;
  line-height: 23px;
  color: var(--color-darkGrey);
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ProductName = styled.strong`
  display: block;
  margin: 16px auto 20px;
  font-size: 36px;
  line-height: 45px;
`;

const ProductPrice = styled.p`
  font-size: 36px;
  line-height: 45px;
  font-weight: 700;
  &::after {
    content: "원";
    font-size: 18px;
    line-height: 23px;
    margin-left: 5px;
  }
`;

const ShipInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 3px solid var(--color-grey);
  width: 630px;
`;

const Shipping = styled.p`
  font-size: 16px;
  color: var(--color-darkGrey);
`;

const ProductStock = styled.p`
  font-size: 16px;
  color: var(--color-red);
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

const PriceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 3px solid var(--color-grey);
  margin-bottom: 25px;
  padding-bottom: 5px;
  width: 630px;
`;

const ResultAmountTxt = styled.span`
  font-size: 18px;
  line-height: 23px;
  margin-left: 5px;
`;

const TotalPriceWrapper = styled.span`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 20px 0;
  font-size: 18px;
  line-height: 23px;
`;

const TotalPriceTxt = styled.span``;

const TotalPrice = styled.span`
  margin-left: 10px;
`;

export {
  ProductStoreName,
  ProductName,
  ProductPrice,
  ProductImg,
  Shipping,
  ProductStock,
  TotalPriceTxt,
  ImgWrapper,
  ProductWrapper,
  DetailWrapper,
  InfoWrapper,
  ShipInfoWrapper,
  ButtonWrapper,
  PriceWrapper,
  TotalPriceWrapper,
  ResultAmountTxt,
  TotalPrice,
};
