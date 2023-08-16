import React from "react";

import * as S from "./OrderCompleteStyle";
import { CommonBtn } from "../../../component/common/button/ButtonStyle";

export default function OrderComplete() {
  return (
    <>
      <S.OrderCompleteWrapper>
        <S.OrderCompleteTitle>주문 완료</S.OrderCompleteTitle>

        <S.OrderCompleteDescWrapper>
          <S.OrderCompleteDescTxt>
            주문이 완료되었습니다.
          </S.OrderCompleteDescTxt>
          <S.OrderCompleteDescTxt>
            해당 부스에서 상품을 받아가세요.
          </S.OrderCompleteDescTxt>
        </S.OrderCompleteDescWrapper>

        {/* 주문 번호 */}
        <S.OrderNumWrapper>
          <S.OrderNumTxt>주문 번호</S.OrderNumTxt>
          <S.OrderNum>16</S.OrderNum>
        </S.OrderNumWrapper>

        {/* 수령 정보 */}
        <S.OrderBooth>수령 부스: 부스1</S.OrderBooth>
        <S.OrderProducts>츠루우메 나츠미깡 1개</S.OrderProducts>

        <CommonBtn width="200px">구매내역 확인하기</CommonBtn>
      </S.OrderCompleteWrapper>
    </>
  );
}
