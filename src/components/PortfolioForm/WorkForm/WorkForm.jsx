import { useState } from "react";
import { Button, ButtonGroup, ButtonToolbar, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";

import { updateNewPortfolioWork } from "../../../ducks/portfolio";
import emptyWork from '../../../data/empty_work.json';
import selector from './WorkForm.selector';

import NewItemForm from './NewItemForm/NewItemForm';
import Item from './Item/Item';

const SchoolForm = (props) => {
  const dispatch = useDispatch();

  const workArray = useSelector(selector);
  const [ isAddNewItem, setIsAddNewItem ] = useState(false);

  const addItem = () => {
    setIsAddNewItem(true);
  };

  const cancelItem = () => {
    setIsAddNewItem(false);
  };

  const saveItem = (data) => {
    dispatch(updateNewPortfolioWork([...workArray, data]));
  };

  return <Container>
    <ButtonToolbar>
      <ButtonGroup className="mr-2">
        <Button onClick={props.prevStep}>
          Prev
        </Button>
        <Button onClick={props.final} disabled={!workArray.length}>
          Final
        </Button>
      </ButtonGroup>
      {!isAddNewItem && <ButtonGroup>
        <Button onClick={addItem}>Add new item</Button>
      </ButtonGroup>}
    </ButtonToolbar>
    {isAddNewItem && <NewItemForm
      initialValues={emptyWork}
      onSave={saveItem}
      onCancel={cancelItem} />}
    {workArray.map((item, id) => {
      return <Item key={id} value={item}/>
    })}
  </Container>;
}

export default SchoolForm;
