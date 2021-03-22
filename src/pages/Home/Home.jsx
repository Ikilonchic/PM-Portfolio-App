import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import selector from './Home.selector';

import PageHeader from '../../components/PageHeader/PageHeader';
import PortfolioTable from '../../components/PortfolioTable/PortfolioTable';

const Home = (props) => {
  const history = useHistory();
  
  const allPortfolio  = useSelector(selector);

  const redirectToCreate = () => history.push(`portfolio/create`);

  return <>
    <PageHeader>
      <Button onClick={redirectToCreate}>
        Create new
      </Button>
    </PageHeader>
    <PortfolioTable items={allPortfolio.map(elem => ({
      id: elem.id,
      title: `${elem.contacts.firstName} ${elem.contacts.secondName}`
    }))} />
  </>;
};

export default Home;
