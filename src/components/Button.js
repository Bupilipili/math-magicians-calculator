import PropTypes from 'prop-types';

const Button = ({ text, color, onClick }) => (
  <button className={`button ${color}`} type="button" onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
