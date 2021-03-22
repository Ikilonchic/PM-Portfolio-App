import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './PortfolioForm.module.scss';

import { createNewPortfolio, saveNewPortfolio, deleteNewPortfolio } from '../../ducks/portfolio';

import ContactsForm from './ContactsForm/ContactsForm';
import SchoolForm from './SchoolForm/SchoolForm';
import WorkForm from './WorkForm/WorkForm';
import { useHistory } from 'react-router';

const UserForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [ step, setStep ] = useState(1);

  useEffect(() => {
    dispatch(createNewPortfolio());

    return () => {
      dispatch(deleteNewPortfolio());
    };
  }, []);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const final = () => {
    dispatch(saveNewPortfolio());
    history.push('/');
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <ContactsForm
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <SchoolForm
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <WorkForm
            prevStep={prevStep}
            final={final}
          />
        );
      default:
        return null;
    }
  };

  return <div className={styles.wrapper}>
    <div className={styles.inner}>
      {renderStep()}
    </div>
  </div>
}

export default UserForm;
