import { useState } from "react";
import { Button, ButtonGroup, Container, Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";

import { updateNewPortfolioSchool } from "../../../ducks/portfolio";
import emptySchool from '../../../data/empty_school.json';
import selector from './SchoolForm.selector';

import NewItemForm from './NewItemForm/NewItemForm';
import Item from './Item/Item';

const SchoolForm = (props) => {
  const dispatch = useDispatch();

  const schoolArray = useSelector(selector);
  const [ isAddNewItem, setIsAddNewItem ] = useState(false);

  const onSubmit = () => {
    if (schoolArray.length) {
      props.nextStep();
    }
  };

  const addItem = () => {
    setIsAddNewItem(true);
  };

  const cancelItem = () => {
    setIsAddNewItem(false);
  };

  const saveItem = (data) => {
    dispatch(updateNewPortfolioSchool([...schoolArray, data]));
  };

  return <Container>
    <Row>
      <Col>
        <ButtonGroup>
          <Button onClick={props.prevStep}>
            Prev
          </Button>
          <Button onClick={onSubmit} disabled={!schoolArray.length}>
            Next
          </Button>
        </ButtonGroup>
        {isAddNewItem ? <NewItemForm
          initialValues={emptySchool}
          onSave={saveItem}
          onCancel={cancelItem} /> : <Button onClick={addItem}>Add new item</Button>}
        {schoolArray.map((item, id) => {
          return <Item key={id} value={item}/>
        })}
      </Col>
    </Row>
  </Container>;
}

export default SchoolForm;
