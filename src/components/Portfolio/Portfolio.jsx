import PropTypes from 'prop-types';

const propTypes = {
  contacts: PropTypes.shape({
    firstName: PropTypes.string,
    secondName: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  school: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    specialty: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  })).isRequired,
  work: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
  })).isRequired,
};

const Portfolio = (props) => {
  return <div>
    {JSON.stringify(props.contacts)}
    {JSON.stringify(props.school)}
    {JSON.stringify(props.work)}
  </div>;
};

Portfolio.propTypes = propTypes;

export default Portfolio;
