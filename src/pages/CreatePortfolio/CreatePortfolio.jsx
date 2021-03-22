import styles from './CreatePortfolio.module.scss';

import PageHeader from "../../components/PageHeader/PageHeader";
import BackButton from "../../components/BackButton/BackButton";
import PortfolioForm from '../../components/PortfolioForm/PortfolioForm';

const CreatePortfolio = (props) => {
  return <div className={styles.Container}>
    <PageHeader>
      <BackButton />
    </PageHeader>
    <PortfolioForm />
  </div>;
};

export default CreatePortfolio;
