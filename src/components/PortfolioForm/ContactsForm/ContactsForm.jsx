import { ErrorMessage, Formik } from "formik";
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { updateNewPortfolioContacts } from "../../../ducks/portfolio";

import selector from './ContactsForm.selector';

const ContactsForm = (props) => {
  const dispatch = useDispatch();
  const initialValues = useSelector(selector);

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'First name is required';
    }

    if (!values.secondName) {
      errors.secondName = 'Second name is required';
    }

    if (!values.position) {
      errors.position = 'Position is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    }

    return errors;
  };

  const onSubmit = (values) => {
    dispatch(updateNewPortfolioContacts(values));
    props.nextStep();
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
    }) => <Form>
      <Form.Group>
        <Form.Label>First name</Form.Label>
        <Form.Control
          type='text'
          name='firstName'
          placeholder='Enter first name...'
          isInvalid={errors.firstName && touched.firstName}
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.firstName && touched.firstName ? <Form.Control.Feedback type='invalid'>
          <ErrorMessage name='firstName' />
        </Form.Control.Feedback> : null}
      </Form.Group>

      <Form.Group>
        <Form.Label>Second name</Form.Label>
        <Form.Control
          type='text'
          name='secondName'
          placeholder='Enter first name...'
          isInvalid={errors.secondName && touched.secondName}
          value={values.secondName}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.secondName && touched.secondName ? <Form.Control.Feedback type='invalid'>
          <ErrorMessage name='secondName' />
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
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          name='email'
          placeholder='Enter email...'
          isInvalid={errors.email && touched.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur} />
        {errors.email && touched.email ? <Form.Control.Feedback type='invalid'>
          <ErrorMessage name='email' />
        </Form.Control.Feedback> : null}
        <Form.Text muted>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button
        variant='primary'
        type='button'
        disabled={!isValid}
        onClick={handleSubmit}
      >Next</Button>
    </Form>}
  </Formik>;
};

export default ContactsForm;
