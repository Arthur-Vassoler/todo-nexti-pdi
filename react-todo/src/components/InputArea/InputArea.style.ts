import styled from "styled-components";
import ContainerStyle from "../UI/Container";

export const Container = styled(ContainerStyle)`
  flex-direction: column;
  justify-content: center;

  @media (min-width: 980px) {
    flex-direction: row;
  }

  button {
    width: 10rem;
    margin: 0.5rem;
    padding: 1rem;
  }

  @media (min-width: 980px) {
    button {
      width: 20rem;
      margin-left: 1rem;
    }
  }
`;

export const Input = styled.input`
  width: 75%;
  margin: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 6px rgb(0 0 0 / 80%);
  outline: 0;
  border-radius: 0.5rem;
  border: none;

  @media (min-width: 980px) {
    width: 70%;
  }
`;
