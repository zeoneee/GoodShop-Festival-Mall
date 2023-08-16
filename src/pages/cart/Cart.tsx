import React, { useState } from "react";
import * as S from "./CartStyle";

import { CommonBtn } from "../../component/common/button/ButtonStyle";
import ProductListTable from "../../component/ProductListTable/ProductListTable";

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

  const totalPrice = productList
    .filter((product) => product.selected)
    .reduce((total, product) => total + product.price, 0);

  return (
    <>
      <S.CartWrapeer>
        <S.CartTitle>장바구니</S.CartTitle>
        {productList.map((product) => (
          <ProductListTable
            product={productList}
            setProductList={setProductList}
          />
        ))}

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
