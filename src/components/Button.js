import PropTypes from 'prop-types';

const Button = ({ text, color }) => (
  <button className={`button ${color}`} type="button">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
