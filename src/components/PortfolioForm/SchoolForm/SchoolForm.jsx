import { useState } from "react";
import { Button, ButtonGroup, ButtonToolbar, Container } from 'react-bootstrap';
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
    <ButtonToolbar>
      <ButtonGroup className="mr-2">
        <Button onClick={props.prevStep}>
          Prev
        </Button>
        <Button onClick={onSubmit} disabled={!schoolArray.length}>
          Next
        </Button>
      </ButtonGroup>
      {!isAddNewItem && <ButtonGroup>
        <Button onClick={addItem}>Add new item</Button>
      </ButtonGroup>}
    </ButtonToolbar>
    {isAddNewItem && <NewItemForm
      initialValues={emptySchool}
      onSave={saveItem}
      onCancel={cancelItem} />}
    {schoolArray.map((item, id) => {
      return <Item key={id} value={item}/>
    })}
  </Container>;
}

export default SchoolForm;
