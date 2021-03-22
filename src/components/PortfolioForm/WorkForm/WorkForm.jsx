import { useState } from "react";
import { Button, ButtonGroup, Container, Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";

import { updateNewPortfolioSchool, updateNewPortfolioWork } from "../../../ducks/portfolio";
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
    <ButtonGroup>
      <Button onClick={props.prevStep}>
        Prev
      </Button>
      <Button onClick={props.final}>
        Final
      </Button>
    </ButtonGroup>
    {isAddNewItem ? <NewItemForm
      initialValues={emptyWork}
      onSave={saveItem}
      onCancel={cancelItem} /> : <Button onClick={addItem} block>Add new item</Button>}
    {workArray.map((item, id) => {
      return <Item key={id} value={item}/>
    })}
  </Container>;
}

export default SchoolForm;
