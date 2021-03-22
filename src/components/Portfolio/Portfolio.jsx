import PropTypes from 'prop-types';
import { Container, Col, ListGroup, Row, Jumbotron } from 'react-bootstrap';

const propTypes = {
  contacts: PropTypes.shape({
    firstName: PropTypes.string,
    secondName: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  school: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    specialty: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  })).isRequired,
  work: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  })).isRequired,
};

const Portfolio = (props) => {
  return <>
    <Jumbotron className='mr-3 ml-3'>
      <h1>{`${props.contacts.firstName} ${props.contacts.secondName}`}</h1>
      <p>
        {props.contacts.email}
      </p>
      <p>
        {props.contacts.position}
      </p>
    </Jumbotron>
    <Container className='mb-3'>
      <Row>
        <Col className='mb-3'>
          <h2>School</h2>
          <ListGroup>
            {props.school.map(elem => <ListGroup.Item>
              <ListGroup variant="flush">
                {Object.values(elem).map(entry => <ListGroup.Item>
                  {entry}
                </ListGroup.Item>)}
              </ListGroup>
            </ListGroup.Item>)}
          </ListGroup>
        </Col>
        <Col>
          <h2>Work</h2>
          <ListGroup>
            {props.work.map(elem => <ListGroup.Item>
              <ListGroup variant="flush">
                {Object.values(elem).map(entry => <ListGroup.Item>
                  {entry}
                </ListGroup.Item>)}
              </ListGroup>
            </ListGroup.Item>)}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  </>;
};

Portfolio.propTypes = propTypes;

export default Portfolio;
