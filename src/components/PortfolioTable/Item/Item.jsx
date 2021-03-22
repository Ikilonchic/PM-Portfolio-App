import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const Item = (props) => {
  return <Card onClick={props.onClick}>
    <Card.Body>
      <Card.Title>
        {props.title}
      </Card.Title>
    </Card.Body>
  </Card>;
};

Item.propTypes = propTypes;

export default Item;
