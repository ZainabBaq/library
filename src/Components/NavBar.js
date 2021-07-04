import { ThemeButton, NavItem, Logo } from "../styles";
import library from "../library.png";
import { BsPlusCircle } from "react-icons/bs";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Logo to="/" className="navbar-brand">
        <img src={library} alt="logo" />
      </Logo>
      <div className="navbar-nav ml-auto">
        <NavItem
          className="nav-item"
          to="/books"
          style={{ padding: "0.25em 1em" }}
        >
          Books
        </NavItem>

        {/* <NavItem
          className="nav-item"
          to="/books/new"
          style={{ padding: "0.25em 1em" }}
        >
          Add Book
        </NavItem> */}

        <NavItem
          className="nav-item"
          to="/libraries"
          style={{ padding: "0.25em 1em" }}
        >
          Libraries
        </NavItem>
        <NavItem
          className="nav-item"
          to="/signup"
          style={{ padding: "0.25em 1em" }}
        >
          Sign up
        </NavItem>

        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
