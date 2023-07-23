import React, {useState} from 'react';
// import styled from 'styled-components';
import { useAppDispatch, useAppSelector} from '../../../hook/hooks';
import { getLoginUserType } from '../../../features/loginSlice';
import { SVGIcon } from '../../icon/SVGIcon';
import * as S from "../header/HeaderStyle"
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../../features/loginSlice';
import ArrowModal from '../arrowmodal/ArrowModal';
import { checkOpenModal, openModal } from '../../../features/modalSlice';
import Modal from '../modal/Modal';

interface HeaderProps {
  usertype?: string;
  sellercenter?: string;
  loginstatus?: string;
}


function Header({...props}: HeaderProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const Token = sessionStorage.getItem("token");
  const Token = useAppSelector(getToken);
  const userType = useAppSelector(getLoginUserType);
  const modal = useAppSelector(checkOpenModal);

  const [searchContent, setSearchContent] = useState("");
  const [onModal, setOnModal] = useState(false);

  //검색창 변경 함수
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchContent(e.target.value);
  }

  //검색창 검색 버튼 함수
  const handleSearch = () => {
    if(searchContent !== ""){
      navigate("/search", {state: searchContent});
    }
  }

  const needLoginModal = (
    <Modal onClickYesBtn={()=>{navigate("/account/login")}}>
      로그인이 필요한 서비스 입니다. <br/>
      로그인 하시겠습니까?
    </Modal>
  );

  

  return (
    <>
    {(Token === null || Token === "" ) && modal === true ? needLoginModal : null}
    <S.HeaderWrapper>
      <S.SearchWrapper>
      <SVGIcon id='logo-hodu' width="124px" height="38px"/>
        <S.SearchInput
        type='text'
        onChange={onChangeSearch}
        placeholder='상품을 검색해보세요!'
        value={searchContent}
        />
        <S.SearchBtn type='button' onClick={handleSearch}/>
      </S.SearchWrapper>
      <S.UserWrapper>
        {userType === "BUYER" ?
        <S.BuyerWrapper>
          <S.IconWrapper onClick={Token === null || Token === "" ? () => {dispatch(openModal("예"))} : () => {navigate("/cart/:username")}}>
            <SVGIcon id='icon-shopping-cart' width="25px" height= "25px" alt='장바구니아이콘'/>
            <S.IconTxt>장바구니</S.IconTxt>
          </S.IconWrapper>
          {Token === "" || Token === null ? 
            <S.IconWrapper onClick={() => {navigate("/account/login")}}>
              <SVGIcon id='icon-user' width="25px" height= "25px" alt='유저아이콘'/>
              <S.IconTxt>로그인</S.IconTxt>
            </S.IconWrapper>
        :
            <>
              <S.IconWrapper onClick={() => {setOnModal(!onModal)}}>
                <SVGIcon id='icon-user' width="25px" height= "25px" alt='유저아이콘'/>
                <S.IconTxt>마이페이지</S.IconTxt>
              </S.IconWrapper>
              <ArrowModal on={onModal} />
            </>
        }

          
        </S.BuyerWrapper>
        :
        <>
          <S.IconWrapper>
            <SVGIcon id='icon-user' width="25px" height= "25px" alt='유저아이콘'/>
            <S.IconTxt>마이페이지</S.IconTxt>
          </S.IconWrapper>
          <S.SellerCenterBtn>
            <SVGIcon id='icon-shopping-bag' width="32px" height= "32px" marginRight="8px" alt='쇼핑백아이콘'/>
            <p>판매자 센터</p>
          </S.SellerCenterBtn>
        </>
        }
      </S.UserWrapper>
    </S.HeaderWrapper>
    </>
  )
}

function SellerCenterHeader() {

  // const userTyp?e = useAppSelector(getLoginUserType);


  return (
    <S.HeaderWrapper>



    </S.HeaderWrapper>
  )
}

export {Header, SellerCenterHeader}
