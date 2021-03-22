import PageHeader from "../../components/PageHeader/PageHeader";
import BackButton from "../../components/BackButton/BackButton";
import PortfolioForm from '../../components/PortfolioForm/PortfolioForm';

const CreatePortfolio = (props) => {
  return <>
    <PageHeader>
      <BackButton />
    </PageHeader>
    <PortfolioForm />
  </>;
};

export default CreatePortfolio;
