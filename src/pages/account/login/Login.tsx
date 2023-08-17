import React from "react";
import LoginForm from "../../../component/login/loginform/LoginForm";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;
  margin-top: 80px;
`;

const Logo = styled.button`
  font-size: 60px;
  font-weight: 900;
  color: var(--color-main);
`;

export default function Login() {
  const navigate = useNavigate();

  const onLogo = () => {
    navigate(`/`);
  };

  return (
    <LoginWrapper>
      <Logo onClick={onLogo}>GoodShop</Logo>
      <LoginForm />
    </LoginWrapper>
  );
}
