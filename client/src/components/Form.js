import React, { Component } from "react";
import { connect } from "react-redux";
import { addString } from "../redux_middleware/actions/index";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const base_URL = "http://localhost:4000/api"

function mapDispatchToProps(dispatch) {
  return {
    addString: stringChain => dispatch(addString(stringChain))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stringChain: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { stringChain } = this.state;
    let strValue = { strValue: stringChain }

    console.log("api request in progress...");

    let response = await axios.post(`${base_URL}/sendString`, strValue);

    console.log("api request complete, now Redux is doing some work...");

    this.setState({ stringChain: response })
    this.props.addString({ stringChain });
    this.setState({ stringChain: "" });

    console.log("everything seems to be fine!...");
  }

  render() {
    const { stringChain } = this.state;

    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                id="stringChain"
                type="text"
                placeholder="your string chain here!."
                value={stringChain}
                onChange={this.handleChange}
              />

              <Button id="btnSend" variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const StringForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default StringForm;