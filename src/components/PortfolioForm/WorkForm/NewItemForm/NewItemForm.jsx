import { ErrorMessage, Formik } from "formik";
import { Form, Button, ButtonGroup } from 'react-bootstrap';

const NewItemForm = ({ initialValues, onSave, onCancel }) => {
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.position) {
      errors.position = 'Position is required';
    }

    if (!values.startDate) {
      errors.startDate = 'Start date is required';
    }

    if (!values.endDate) {
      errors.endDate = 'Start date is required';
    }

    return errors;
  };

  const onSubmit = (values) => {
    onSave(values);
    onCancel();
  };

  return <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
    {({
      values,
      errors,
      touched,
      handleSubmit,
      handleChange,
      handleBlur,
      isValid,
      dirty,
    }) => <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          name='name'
          placeholder='Enter name...'
          isInvalid={errors.name && touched.name}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.name && touched.name ? <Form.Control.Feedback type='invalid'>
          <ErrorMessage name='name' />
        </Form.Control.Feedback> : null}
      </Form.Group>

      <Form.Group>
        <Form.Label>Position</Form.Label>
        <Form.Control
          type='text'
          name='position'
          placeholder='Enter position...'
          isInvalid={errors.position && touched.position}
          value={values.position}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.position && touched.position ? <Form.Control.Feedback type='invalid'>
          <ErrorMessage name='position' />
        </Form.Control.Feedback> : null}
      </Form.Group>

      <Form.Group>
        <Form.Label>Start date</Form.Label>
        <Form.Control
          type='date'
          name='startDate'
          placeholder='Enter date...'
          isInvalid={errors.startDate && touched.startDate}
          value={values.startDate}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.startDate && touched.startDate ? <Form.Control.Feedback type='invalid'>
          <ErrorMessage name='startDate' />
        </Form.Control.Feedback> : null}
      </Form.Group>

      <Form.Group>
        <Form.Label>End date</Form.Label>
        <Form.Control
          type='date'
          name='endDate'
          placeholder='Enter date...'
          isInvalid={errors.endDate && touched.endDate}
          value={values.endDate}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.endDate && touched.endDate ? <Form.Control.Feedback type='invalid'>
          <ErrorMessage name='endDate' />
        </Form.Control.Feedback> : null}
      </Form.Group>

      <ButtonGroup>
        <Button
          variant='primary'
          type='button'
          onClick={onCancel}
        >Cancel</Button>
        <Button
          variant='primary'
          type='button'
          disabled={!(isValid && dirty)}
          onClick={handleSubmit}
        >Save</Button>
      </ButtonGroup>
    </Form>}
  </Formik>;
};

export default NewItemForm;
