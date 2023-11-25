import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function NewsGrid() {
  return (
    <Container>
      <Row>
        {/* First News Box */}
        <Col md={6}>
          <Card className="bg-primary text-white">
            <Card.Body>
              <Card.Title className="text-center">First News Title</Card.Title>
              <Card.Text>
                First News Content...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Second News Box */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Second News Title</Card.Title>
              <Card.Text>
                Second News Content...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NewsGrid;
