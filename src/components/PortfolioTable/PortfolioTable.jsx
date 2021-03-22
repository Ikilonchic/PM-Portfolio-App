import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { CardColumns } from 'react-bootstrap';

import Item from './Item/Item';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    title: PropTypes.string,
  })).isRequire,
};

const PortfolioTable = (props) => {
  const history = useHistory();

  const createRedirectById = (id) => () => history.push(`portfolio/${id}`);

  return <CardColumns className='mr-3 ml-3'>
    {props.items.map((elem, index) => <Item key={index} title={elem.title} onClick={createRedirectById(index)}/>)}
  </CardColumns>;
};

PortfolioTable.propTypes = propTypes;

export default PortfolioTable;
