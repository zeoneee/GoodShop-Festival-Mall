import React from "react";
import JoinInputForm from "../../../component/join/joininputform/JoinInputForm";
import { SVGIcon } from "../../../component/icon/SVGIcon";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const JoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;
  margin-top: 70px;
`;

const Logo = styled.button`
  font-size: 60px;
  font-weight: 900;
  color: var(--color-main);
`;

export default function Join() {
  const navigate = useNavigate();

  const onLogo = () => {
    navigate(`/`);
  };

  return (
    <JoinWrapper>
      <Logo onClick={onLogo}>GoodShop</Logo>
      <JoinInputForm />
    </JoinWrapper>
  );
}
