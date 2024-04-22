import styled from "styled-components";
import ContainerStyle from "../UI/Container";

export const Container = styled(ContainerStyle)`
  max-width: 300px;
  width: 80%;
  background-color: black;
  color: white;
  padding: 1rem;
  border-radius: .5rem;
  justify-content:center;

  table{
    border:none;
    width:100%;
    text-align:center;
}

th,td{
    padding:.3rem;
    font-weight: bold;
    font-family: sans-serif;
}
`;
