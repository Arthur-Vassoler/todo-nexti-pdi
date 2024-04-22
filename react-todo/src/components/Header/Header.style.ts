import styled from "styled-components";
import ContainerStyle from "../UI/Container";

export const Header = styled.header`
  background: transparent;
  box-shadow: 0 1px 6px rgb(0 0 0 / 10%);
  height: 15px;
  padding: 1rem;
`;

export const Container = styled(ContainerStyle)`
  margin: 0 auto;
  max-width: 1440px;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.h1`
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
`;
