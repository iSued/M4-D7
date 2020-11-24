import React from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends React.Component {
  state = {
    comments: [],
    loading: true,
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.movieId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NzM4Njk4MzViMDAwMTc1ODRlZjQiLCJpYXQiOjE2MDYyMzA5NTcsImV4cCI6MTYwNzQ0MDU1N30.HnPKSRL8691sDuTUzFAcpW552hrkrimoodIPUFB-vyc",
          },
        }
      );
      let comments = await response.json();
      this.setState({ comments: comments, loading: false });
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }
  };

  componentDidMount = () => {
    this.fetchComments();
    console.log("fetching comments");
  };

  componentDidUpdate = (previousProps) => {
    if (previousProps.movieId !== this.props.movieId) {
      this.fetchComments();
    }
  };

  render() {
    return (
      <>
        {this.state.loading && (
          <div className="w-100 my-2 d-flex justify-content-center">
            <span>Loading comments...</span>
            <Spinner animation="border" variant="success" />
          </div>
        )}
        <ListGroup variant="flush" className="w-100">
          {this.state.comments.map((comment, index) => (
            <SingleComment commentObj={comment} key={index} />
          ))}
        </ListGroup>
      </>
    );
  }
}

export default CommentList;
