import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  font-size: 24px;
  color: ${(props) => props.theme.mainColor};

  &.active {
    color: ${(props) => props.theme.pink};
    background-color: ${(props) => props.theme.mainColor};
  }
`;

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 40px;
    height: 40px;
  }
`;
export const GlobalStyle = createGlobalStyle`

h1{
    font-family:cursive;
}
body{
    background-color: ${(props) => props.theme.backgroundColor}
}
`;

export const theme = {
  light: {
    mainColor: "#BAD4AA", // main font color
    backgroundColor: "#EBF5DF", // main background color
    pink: "#ff85a2",
    textColor: "#242424",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    textColor: "#fefafb",
  },
};

export const HomeDiv = styled.div`
  margin-top: 40px;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.textColor};
`;
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
  .desc {
    padding: 10px;
  }
`;

export const ThemeButton = styled.button`
  position: absolute;
  right: 50px;
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const Details = styled.div`
  padding: 10px;
  width: 30%;
  margin: auto;
  margin-top: 20px;
  border-radius: 8px;
  text-align: center;
  background-color: ${(props) => props.theme.mainColor};
`;

export const DeleteButtonStyled = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: white;
  color: #ff0000;
  border: none;
  :hover {
    background-color: #ff0000;
    color: white;
  }
`;
