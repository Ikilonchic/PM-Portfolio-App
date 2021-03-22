import { useParams } from "react-router";
import { useSelector } from "react-redux";

import selector from './Portfolio.selector';
import styles from './Portfolio.module.scss';

import PageHeader from "../../components/PageHeader/PageHeader";
import BackButton from "../../components/BackButton/BackButton";
import PortfolioInfo from '../../components/Portfolio/Portfolio';

const Portfolio = (props) => {
  const { id } = useParams();
  const { contacts, school, work } = useSelector(selector(+id));

  return <div className={styles.Container}>
    <PageHeader>
      <BackButton />
    </PageHeader>
    <PortfolioInfo contacts={contacts} school={school} work={work} />
  </div>;
};

export default Portfolio;
