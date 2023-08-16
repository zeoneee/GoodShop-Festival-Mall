import styled from "styled-components";

const ProductList = styled.table`
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #bcbcbc;
  text-align: center;
`;

const ProductListCaption = styled.caption`
  font-size: 20px;
  font-weight: 600;
  padding: 10px 0px;
  text-align: left;
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
    border-top: 1px solid #bcbcbc;
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
  width: 300px;
  font-weight: 700;
`;

const ProductQuantity = styled.td``;

const ProductPrice = styled.td``;

const ProductDeleteBtn = styled.td`
  width: 100px;
  img {
    width: 25px;
  }
`;

const ImgWrapper = styled.div`
  width: 100px;
  img {
    width: 100%;
  }
`;

export {
  ProductList,
  ProductListCaption,
  ProductListHead,
  ProductListRow,
  ProductListTD,
  ProductId,
  ProductCheckBox,
  ProductImg,
  ProductName,
  ProductQuantity,
  ProductPrice,
  ProductDeleteBtn,
  ImgWrapper,
};
