import { useParams } from "react-router";
import { useSelector } from "react-redux";

import selector from './Portfolio.selector';

import PageHeader from "../../components/PageHeader/PageHeader";
import BackButton from "../../components/BackButton/BackButton";
import PortfolioInfo from '../../components/Portfolio/Portfolio';

const Portfolio = (props) => {
  const { id } = useParams();
  const portfolio = useSelector(selector(+id));

  return <>
    <PageHeader>
      <BackButton />
    </PageHeader>
    {portfolio ? <PortfolioInfo contacts={portfolio.contacts} school={portfolio.school} work={portfolio.work} /> : <div className='mr-3 ml-3'>
      Not found
    </div>}
  </>;
};

export default Portfolio;
