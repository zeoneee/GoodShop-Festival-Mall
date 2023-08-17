import styled from "styled-components";

const ProductsLists = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 70px;
  padding: 80px 200px;
`;
const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export { ProductsLists, ProductWrapper };
