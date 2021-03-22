import { ErrorMessage, Formik } from "formik";
import { Form, Button, ButtonGroup } from 'react-bootstrap';

const NewItemForm = ({ initialValues, onSave, onCancel }) => {
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.specialty) {
      errors.specialty = 'Specialty is required';
    }

    if (!values.startDate) {
      errors.startDate = 'Start date is required';
    }

    if (!values.endDate) {
      errors.endDate = 'End date is required';
    }


    if (new Date(values.startDate) > new Date(values.endDate)) {
      errors.date = 'Start date must be less than end date';
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
    }) => <Form className='mt-3'>
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
        <Form.Label>Specialty</Form.Label>
        <Form.Control
          type='text'
          name='specialty'
          placeholder='Enter specialty...'
          isInvalid={errors.specialty && touched.specialty}
          value={values.specialty}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.specialty && touched.specialty ? <Form.Control.Feedback type='invalid'>
          <ErrorMessage name='specialty' />
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
          isInvalid={touched.endDate && (errors.endDate || errors.date)}
          value={values.endDate}
          onChange={handleChange}
          onBlur={handleBlur} />
        {touched.endDate ? <Form.Control.Feedback type='invalid'>
          {errors.endDate}
          {errors.date}
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
          disabled={!isValid}
          onClick={handleSubmit}
        >Save</Button>
      </ButtonGroup>
    </Form>}
  </Formik>;
};

export default NewItemForm;
