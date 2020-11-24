import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicGallery from "./components/DynamicGallery";
import NavBar from "./components/NavBar";
import CommentArea from "./components/CommentArea";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import FixedGallery from "./components/FixedGallery";
import { BrowserRouter, Route } from "react-router-dom";
import ShowDetails from "./components/ShowDetails";

class App extends React.Component {
  state = {
    query: "marvel",
    loading: true,
    selected: {},
  };
  onSearch = (searchQuery) => {
    this.setState({ query: searchQuery });
    console.log("QUERY IN APP.JS", this.state.query);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar onSearch={this.onSearch} />

          <Route
            path="/"
            exact
            render={(props) => (
              <Container fluid className="px-5 mt-5">
                <DynamicGallery
                  onSelect={this.onSelect}
                  searchQuery={this.state.query}
                  titlePart1="First "
                  titlePart2=" results for: "
                  {...props}
                />
                <FixedGallery
                  loadingstate={this.state.loading}
                  searchQuery="harry potter"
                  title="Search for: "
                />
                <FixedGallery
                  loadingstate={this.state.loading}
                  searchQuery="lord of the rings"
                  title="Search for: "
                />
                <FixedGallery
                  loadingstate={this.state.loading}
                  searchQuery="pokemon"
                  title="Search for: "
                />
              </Container>
            )}
          />

          <Route
            path="/details/:id"
            render={(props) => (
              <Container classNamne="px-5 mt-5">
                <ShowDetails {...props} />
                <CommentArea {...props} />
              </Container>
            )}
          />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
