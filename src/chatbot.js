import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Button, Form, InputGroup, Row, Col, Card, ListGroup, Spinner, Table } from 'react-bootstrap';

function ChatbotApp() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [salesData, setSalesData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsTyping(true);

    try {
      const res = await axios.post('/api/chat', { userQuery: query, startDate, endDate });
      const newResponse = res.data.response;

      setChatHistory([...chatHistory, { query, response: newResponse }]);
      setResponse(newResponse);
      setQuery('');
    } catch (error) {
      console.error('Error sending query:', error);
      setResponse('An error occurred while processing your request.');
    } finally {
      setIsTyping(false);
    }
  };

  // Fetch sales data from the API
  const fetchSalesData = async () => {
    try {
      const res = await axios.post('/api/sales', { startDate, endDate });
      const salesList = res.data.response;
      setSalesData(salesList);
    } catch (error) {
      console.error('Error fetching sales data:', error);
    }
  };

  return (
    <div className="chatbot-app bg-light" style={{ height: '100vh' }}>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Retail Chatbot</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Chat Interface */}
      <Container className="mt-4">
        <Row>
          <Col md={8} className="mx-auto">
            <Card className="shadow-sm">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Ask a question...eg:Fetch Sales Data(Sep10 to 11)"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      required
                    />
                    <Button variant="primary" type="submit" disabled={isTyping}>
                      {isTyping ? 'Typing...' : 'Submit'}
                    </Button>
                  </InputGroup>

                  {/* Optional Date Range Input */}
                  <Row>
                    <Col>
                      <Form.Control
                        type="date"
                        placeholder="Start Date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                        
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        placeholder="End Date"
                        required
                      />
                    </Col>
                  </Row>
                </Form>

                {/* Display Response */}
                <div className="mt-3">
                  <h5>Response:</h5>
                  <Card className="p-3 bg-light">
                    <p>{response}</p>
                  </Card>
                </div>

                {/* Fetch Sales Data Button */}
                <Button className="mt-3" variant="secondary" onClick={fetchSalesData}>
                  Display Data
                </Button>

                {/* Display Sales Data Table */}
                {salesData.length > 0 && (
                  <Table striped bordered hover className="mt-3">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Sales</th>
                        <th>Inventory</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {salesData.map((data, index) => (
                        <tr key={index}>
                          <td>{data.product}</td>
                          <td>{data.sales}</td>
                          <td>{data.inventory}</td>
                          <td>{new Date(data.date).toLocaleDateString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Chat History */}
        <Row className="mt-4">
          <Col md={8} className="mx-auto">
            <Card className="shadow-sm">
              <Card.Body>
                <h6>Chat History</h6>
                <ListGroup variant="flush" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {chatHistory.map((chat, index) => (
                    <ListGroup.Item key={index}>
                      <strong>Q:</strong> {chat.query} <br />
                      <strong>A:</strong> {chat.response}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="d-flex justify-content-between">
              <Button variant="outline-secondary">
                <ChevronLeft /> Previous
              </Button>
              <Button variant="outline-secondary">
                Next <ChevronRight />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ChatbotApp;
