/* eslint-disable no-unused-vars */
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./TextArea.module.scss";


const TextArea = (props) => {
    const { field, form, label, classNameLabel, className, ...textarea } = props;
    const { name } = field;
    const { errors, touched } = form;
    const isError = touched[name] && errors[name];
    return (
        <label className={classNameLabel}>
            {label}
            <textarea {...field} {...textarea} className={classNames(className, { [styles.error]: isError })}>
            </textarea>
            {isError && <span className={styles.textError}>{errors[name]}</span>}
        </label>
    );
};

TextArea.propTypes = {
    form: PropTypes.object,
    field: PropTypes.object,
    label: PropTypes.string,
    classNameLabel: PropTypes.string,
    className: PropTypes.string
};

TextArea.defaultProps = {
    form: {},
    field: {},
    label: "",
    classNameLabel: "",
    className: "",
};

export default TextArea;