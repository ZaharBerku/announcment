/* eslint-disable no-unused-vars */
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = (props) => {
    const { field, form, label, element, classNameLabel, className, ...input } = props;
    const { name } = field;
    const { errors, touched } = form;
    const isError = touched[name] && errors[name];
    
    return(
        <label className={classNameLabel}>
            {label}
            {element}
         <input {...field} {...input} className={classNames(className, {[styles.error]:isError})} />
         {isError && <span className={styles.textError}>{errors[name]}</span>}
       </label>
    );
};


Input.propTypes = {
 form: PropTypes.object,
 field: PropTypes.object,
 label: PropTypes.string,
 classNameLabel: PropTypes.string,
 className: PropTypes.string,
 value: PropTypes.string,
 element: PropTypes.element
};

export default Input;