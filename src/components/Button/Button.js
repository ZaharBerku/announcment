import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
    const { children, ...button } = props;
    return (
        <button {...button}>{children}</button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
      ]),
    field: PropTypes.object,
};
Button.propTypes = {
    children: "",
    field: {},
};

export default Button;