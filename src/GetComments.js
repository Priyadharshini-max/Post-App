import React, { Component } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";

class GetComments extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    }
  }

  // Get PostId and fetch data from API
  GetComments = async (props) => {
    const history = this.props;
    const postId = history.match.params.userId;
    try {
      var { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      this.setState({ comments: data })
    } catch (err) {
      console.log(err);
    }
    console.log("GetComments");
  }

  //componentDidMount() is invoked immediately after a component is mounted
  componentDidMount = () => {
    this.GetComments();
  }

  render() {
    //Props for goBack 
    const { history } = this.props
    return (
      <>
        {/* goBack */}
        <i onClick={history.goBack} style={{ float: "left", fontSize: "30px" }} className="fas fa-arrow-left"></i>
        <Container>
          <h1>Comments</h1>
          {this.state.comments.map((comment, index) => {
            return (
              // Table to display all comments 
              <Table striped bordered hover>
                <thead>
                  <tr key={index}><strong>{index + 1})  Name : </strong>{comment.name}<br />
                    <strong>Email : </strong>{comment.email}<br />
                    <strong>Body : </strong>{comment.body}
                  </tr>
                </thead>
              </Table>
            )
          })}
        </Container>
      </>
    )
  }
}


export default GetComments;
