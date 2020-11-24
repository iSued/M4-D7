import React from "react";
import "./NavBar.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import {
  Navbar,
  NavDropdown,
  Form,
  Nav,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

let attempt = 1;
class NavBar extends React.Component {
  state = {
    searchQuery: "",
  };

  handleSearch = () => {
    let getSearchField = document.querySelectorAll(".searchForm");
    if (attempt % 2 === 1) {
      getSearchField[0].classList.remove("d-none");
      getSearchField[1].classList.remove("d-none");
      attempt++;
    } else {
      getSearchField[0].classList.add("d-none");
      getSearchField[1].classList.add("d-none");
      attempt++;
    }
  };
  render() {
    return (
      <Navbar bg="dark" expand="lg" className="navbar">
        <Link to="/">
          <Navbar.Brand>
            <img
              src="https://fontmeme.com/permalink/201016/43d068e8e91bfc2ab70c55cd3afe6508.png"
              alt="netflix-font"
              border="0"
              class="mt-2"
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" className="navItem">
              <a class="navText"> Home </a>
            </Nav.Link>
            <Nav.Link href="#link" className="navItem">
              <a class="navText"> Tv shows </a>
            </Nav.Link>
            <Nav.Link href="#link" className="navItem">
              <a class="navText"> Movies </a>
            </Nav.Link>
            <Nav.Link href="#link" className="navItem">
              <a class="navText"> Recently Added </a>
            </Nav.Link>
            <Nav.Link href="#link" className="navItem">
              <a class="navText"> My List </a>
            </Nav.Link>
            <Nav.Link href="#link" className="navItem">
              <a class="navText"> Back Office </a>
            </Nav.Link>
          </Nav>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              this.props.onSearch(this.state.searchQuery);
            }}
            inline
          >
            <NotificationsIcon className="notificationicon" />
            <SearchIcon
              className="searchIcon"
              onClick={() => this.handleSearch()}
            />
            <a class="navText"> KIDS </a>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
              width="30"
              className="imageKids"
            ></img>
            <FormControl
              type="text"
              placeholder="Search"
              value={this.state.searchQuery}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  this.props.onSearch(this.state.searchQuery);
                }
              }}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
              className="searchForm mr-sm-2 d-none"
            />
            <Button variant="outline-danger" className="searchForm d-none">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
