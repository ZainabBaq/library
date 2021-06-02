import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
display: flex;
flex-direction: column;
align-items: center;
h1{
    font-family:cursive;
}
body{
    background-color: ${(props) => props.theme.backgroundColor}
}
`;

export const theme = {
  mainColor: "#BAD4AA",
  backgroundColor: "#EBF5DF",
  textColor: "#E8871E",
};

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 30px;
`;

export const Item = styled.div`
  width: 200px;
  border-radius: 8px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.mainColor};
  img {
    margin-top: 8px;
  }
  h3 {
    padding: 5px;
  }
`;
