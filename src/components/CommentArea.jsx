import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends React.Component {
  render() {
    return (
      <Row>
        <CommentList movieId={this.props.match.params.id} />
        <AddComment movieId={this.props.match.params.id} />
      </Row>
    );
  }
}

export default CommentArea;
