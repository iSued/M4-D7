import React from "react";
import { Button, ListGroup, Badge } from "react-bootstrap";

class SingleComment extends React.Component {
  state = {
    errMessage: "",
  };

  removeComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.commentObj._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NzM4Njk4MzViMDAwMTc1ODRlZjQiLCJpYXQiOjE2MDYyMzA5NTcsImV4cCI6MTYwNzQ0MDU1N30.HnPKSRL8691sDuTUzFAcpW552hrkrimoodIPUFB-vyc",
          },
        }
      );
      if (response.ok) {
        alert("Deleted");
      } else {
        console.log("uh oh stinky");
        let error = await response.json();
        this.setState({
          errMessage: error.message,
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({
        errMessage: err.message,
      });
    }
  };

  render() {
    return (
      <ListGroup.Item
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}
        className=" w-100 mb-1 d-flex justify-content-between align-items-center"
      >
        <Badge variant="success">
          {this.props.commentObj.rate ? this.props.commentObj.rate : "ERR"}
        </Badge>

        <p className="m-0 px-1">{this.props.commentObj.comment}</p>
        <Button onClick={(e) => this.removeComment(e)} variant="danger">
          X
        </Button>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
