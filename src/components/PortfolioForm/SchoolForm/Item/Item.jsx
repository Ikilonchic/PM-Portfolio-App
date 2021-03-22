import { Card } from "react-bootstrap";

const Item = (props) => {
  return <Card className='mt-3'>
    <Card.Body>
      <Card.Title>
        Name
      </Card.Title>
      <Card.Text>
        {props.value.name}
      </Card.Text>
      <Card.Title>
        Specialty
      </Card.Title>
      <Card.Text>
        {props.value.specialty}
      </Card.Text>
      <Card.Title>
        Start date
      </Card.Title>
      <Card.Text>
        {props.value.startDate}
      </Card.Text>
      <Card.Title>
        End date
      </Card.Title>
      <Card.Text>
        {props.value.endDate}
      </Card.Text>
    </Card.Body>
  </Card>;
};

export default Item;
