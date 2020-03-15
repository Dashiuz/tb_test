import React from "react";
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const mapStateToProps = state => {
  return { stringChain: state.stringChain };
};

const ConnectedCard = ({ stringChain }) => (
  <Container>
    <Row>
      <Col>
        <Card>
          <Card.Body>
            {stringChain.map((el, i) => (
              <p key={i}>{el.stringChain}</p>
            ))}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

const StringHandlerCard = connect(mapStateToProps)(ConnectedCard);

export default StringHandlerCard;