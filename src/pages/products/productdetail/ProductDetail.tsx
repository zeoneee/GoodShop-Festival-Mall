import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProductID } from "../../../features/productsSlice";
import { useAppSelector } from "../../../hook/hooks";
import * as S from "./ProductDetailStyle";

import { CommonBtn } from '../../../component/common/button/ButtonStyle';
import AmountBtn from '../../../component/common/amountbutton/AmountBtn';
import DetailTab from '../../../component/detail/DetailTab';


//임시 주류 데이터 출력을 위해 state에 productID->product자체 받도록 변경
//state에 product바로 받아오므로 productDetail->state로 변경됨

export default function ProductDetail() {
  const { state } = useLocation();
  const [productID, setProductID] = useState(0);
  const [selectedCount, setSelectedCount] = useState(1);


  const productDetail = useAppSelector((state) => getProductID(state, Number(productID)));
  
  console.log(state);

  useEffect(() => {
    setProductID(state);
  }, [state]);

  // AmountBtn callback 함수
  const getProductCount = (res: number) => {
    setSelectedCount(res);
  };

  return (
    <>


      {state && (
        <S.ProductWrapper>
          <S.ImgWrapper>
            <S.ProductImg src={state.image} alt="상품 이미지" />
          </S.ImgWrapper>

          <S.DetailWrapper>
            <S.InfoWrapper>
              {/* <S.ProductStoreName>{state.store_name}</S.ProductStoreName> */}
              <S.ProductName>{state.product_name}</S.ProductName>
              <S.ProductPrice>{state.price.toLocaleString()}</S.ProductPrice>
              {/* 상품 설명 DB에서 가져오기 */}
            </S.InfoWrapper>
            <S.ShipInfoWrapper>
              {/* <S.Shipping>{productDetail.shipping_method === "PARCEL" ? "직접배송" : "택배배송" 
              } / {productDetail.shipping_fee === 0 ? "무료배송" : `배송비 ${productDetail.shipping_fee.toLocaleString()} 원`}</S.Shipping> */}
              <S.ProductStock> * 재고 : {state.stock} 개</S.ProductStock>
            </S.ShipInfoWrapper>
            {/* 상품 갯수 버튼 */}
            <AmountBtn count={selectedCount} getCount={getProductCount} stock={state.stock} />

            {/* 총 가격 부분 */}
            <S.PriceWrapper>
              <S.ResultAmountTxt>
                총 수량 <span>{selectedCount}</span>개
              </S.ResultAmountTxt>
              <S.TotalPriceWrapper>
                <S.TotalPriceTxt>총 상품 금액</S.TotalPriceTxt>
                <S.TotalPrice>
                  {selectedCount > 0
                    ? (state.price * selectedCount).toLocaleString()
                    : 0}{" "}
                  <span>원</span>
                </S.TotalPrice>
              </S.TotalPriceWrapper>
            </S.PriceWrapper>

            {/* 버튼 부분 */}
            <S.ButtonWrapper>
              <CommonBtn width="416px">바로 구매</CommonBtn>
              <CommonBtn width="200px" color="darkGrey">
                장바구니
              </CommonBtn>
            </S.ButtonWrapper>
          </S.DetailWrapper>
          <DetailTab />
        </S.ProductWrapper>
      )}
    </>
  );
}
