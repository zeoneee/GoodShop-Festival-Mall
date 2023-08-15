import React, { useState } from "react";
import * as S from "./CartStyle";

import { CommonBtn } from "../../component/common/button/ButtonStyle";
import { CheckBoxInput } from "../../component/common/checkbox/CheckBoxInput";
import deleteIcon from "../../asset/icon/delete.png"

export default function Cart() {
  const [productList, setProductList] = useState([
    {
      id: 1,
      selected: false, // 추가: 상품별 선택 상태
      name: "츠루우메 나츠미깡",
      url: "https://d1e2y5wc27crnp.cloudfront.net/media/core/product/thumbnail/4859d1f7-85c7-4e98-bc09-5d62ae807041.webp",
      boothName: "부스1",
      quantity: 1,
      price: 51900,
    },
  ]);

  const productSelection = (productId) => {
    const updatedProductList = productList.map((product) => 
      product.id === productId ? {...product, selected: !product.selected}
      : product
    );
    setProductList(updatedProductList);
  };

  const totalPrice = productList
    .filter((product) => product.selected)
    .reduce((total, product) => total + product.price, 0);

  return (
    <>
      <S.CartWrapeer>
        <S.CartTitle>장바구니</S.CartTitle>
        <S.ProductLsit>
          <S.ProductListHead>
            <td></td>
            <td></td>
            <td></td>
            <td>상품 정보</td>
            <td>부스명</td>
            <td>수량</td>
            <td>가격</td>
            <td>전체 삭제</td>
          </S.ProductListHead>
          <tbody>
            {productList.map((product) => (
              <S.ProductListRow key={product.id}>
              <S.ProductId>{product.id}</S.ProductId>
              <S.ProductCheckBox>
                <CheckBoxInput
                  onChange={() => productSelection(product.id)}
                  checked={product.selected}
                  children={undefined}
                />
              </S.ProductCheckBox>
              <S.ProductImg>
                <S.ImgWrapper>
                  <img src={product.url}></img>
                </S.ImgWrapper>
              </S.ProductImg>
              <S.ProductName>{product.name}</S.ProductName>
              <S.ProductBooth>{product.boothName}</S.ProductBooth>
              <S.ProductQuantity>{product.quantity}</S.ProductQuantity>
              <S.ProductPrice>{product.price.toLocaleString()}원</S.ProductPrice>
              <S.ProductDeleteBtn><img src={deleteIcon}></img></S.ProductDeleteBtn>
            </S.ProductListRow>
            ))}
            
          </tbody>
        </S.ProductLsit>

        {/* 총 가격 부분 */}
        <S.OrderWrapper>
          <S.PriceWrapper>
            <S.TotalPriceTxt>총 가격</S.TotalPriceTxt>
            <S.TotalPrice>
              {totalPrice.toLocaleString()}
              <span>원</span>
            </S.TotalPrice>
          </S.PriceWrapper>
          <S.ButtonWrapper>
            <CommonBtn width="200px">주문하기</CommonBtn>
          </S.ButtonWrapper>
        </S.OrderWrapper>
      </S.CartWrapeer>
    </>
  );
}
