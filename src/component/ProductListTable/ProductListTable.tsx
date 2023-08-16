import React from "react";

import * as S from "./ProductListTableStyle";

import { CheckBoxInput } from "../common/checkbox/CheckBoxInput";
import deleteIcon from "../../asset/icon/delete.png";

// 상품 데이터를 받아와 해당 데이터를 표로 출력하는 컴포넌트
export default function ProductListTable({ product, setProductList }) {
  const productSelection = (productId) => {
    const updatedProductList = product.map((product) =>
      product.id === productId
        ? { ...product, selected: !product.selected }
        : product
    );
    setProductList(updatedProductList);
  };

  console.log(product);

  return (
    <>
      <S.ProductList>
        <S.ProductListCaption>
          부스: {product[0].boothName}
        </S.ProductListCaption>
        <S.ProductListHead>
          <td></td>
          <td></td>
          <td></td>
          <td>상품 정보</td>
          <td>수량</td>
          <td>가격</td>
          <td>전체 삭제</td>
        </S.ProductListHead>
        <tbody>
          {product.map((item) => (
            <S.ProductListRow key={item.id}>
              <S.ProductId>{item.id}</S.ProductId>
              <S.ProductCheckBox>
                <CheckBoxInput
                  onChange={() => productSelection(item.id)}
                  checked={item.selected}
                  children={undefined}
                />
              </S.ProductCheckBox>
              <S.ProductImg>
                <S.ImgWrapper>
                  <img src={item.url} alt={`Product ${item.id}`}></img>
                </S.ImgWrapper>
              </S.ProductImg>
              <S.ProductName>{item.name}</S.ProductName>
              <S.ProductQuantity>{item.quantity}</S.ProductQuantity>
              <S.ProductPrice>{item.price.toLocaleString()}원</S.ProductPrice>
              <S.ProductDeleteBtn>
                <img src={deleteIcon} alt="delete"></img>
              </S.ProductDeleteBtn>
            </S.ProductListRow>
          ))}
        </tbody>
      </S.ProductList>
    </>
  );
}
