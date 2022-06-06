import styled from 'styled-components';
import PropTypes from 'prop-types';

const FONT_WEIGHT = isBold => (isBold ? 700 : 300);
const defaultOnClickFn = () => console.log('button is clicked!');

// const Button = styled.button()`
// `

function Button({
  onClick = defaultOnClickFn,
  text = 'button',
  isBold = false,
  additionalStyle = {}
}) {
  return (
    <button
      onClick={onClick}
      style={{ ...additionalStyle, fontWeight: FONT_WEIGHT(isBold) }}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  isBold: PropTypes.bool,
  additionalStyle: PropTypes.object
};

Button.defaultProps = {
  onClick: defaultOnClickFn,
  text: 'button',
  isBold: false,
  additionalStyle: {}
};

export default Button;
