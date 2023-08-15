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

const ProductLsit = styled.table`
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #BCBCBC;
  text-align: center;
`;

const ProductListHead = styled.thead`
  height: 40px;
  td {
    vertical-align: middle;
  }
`;

const ProductListRow = styled.tr`
  td {
    vertical-align: middle;
    border-top: 1px solid #BCBCBC;
  }
`;

const ProductListTD = styled.td`
  vertical-align: middle;
`;

const ProductId = styled.td`
  width: 40px;
`;

const ProductCheckBox = styled.td`
  width: 40px;
`;

const ProductImg = styled.td`
  width: 130px;
`;

const ProductName = styled.td`
  width: 200px;
  font-weight: 700;
`;

const ProductBooth = styled.td``;

const ProductQuantity = styled.td``;

const ProductPrice = styled.td``;

const ProductDeleteBtn = styled.td`
  width: 100px;
  img{
    width: 25px;
  }
`;

const ImgWrapper = styled.div`
  width: 100px;
  img {
    width: 100%;
  }
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
  ProductLsit,
  ProductListHead,
  ProductListRow,
  ProductListTD,
  ProductId,
  ProductCheckBox,
  ProductImg,
  ProductName,
  ProductBooth,
  ProductQuantity,
  ProductPrice,
  ProductDeleteBtn,
  ImgWrapper,
  OrderWrapper,
  PriceWrapper,
  TotalPriceTxt,
  TotalPrice,
  ButtonWrapper,
};
