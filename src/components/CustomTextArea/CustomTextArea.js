/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useField } from "formik";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./CustomTextArea.module.scss";
import Button from "../Button";


const CustomTextArea = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [field, meta] = useField(props);
    const { label, classNameLabel, className, customChange, ...customnTextarea } = props;
    const { name, value, ...newFiled } = field;
    const { errors, touched } = meta;
    const isError = touched[name] && errors[name];
    const isDone = name === "description" && value.length > 22 && customnTextarea.disabled;

    return (
        <div className={classNames(classNameLabel, styles.description)}>
            {label}
            <textarea value={value} name={name}
                {...newFiled}
                {...customnTextarea}
                className={classNames(className, 
                {[styles.descriptionTeaxtArea]:isDone}, 
                { [styles.error]: isError },
                {[styles.descriptionOpenDescription]:isOpen})}>
            </textarea>
            { (isDone && !isOpen) && "..."}
            { isDone &&
            <div className={classNames(styles.descriptionContainer, {[styles.descriptionContainerBtn]:isOpen})}>
                <Button type="button" onClick={()=>setIsOpen(!isOpen)} 
                className={styles.descriptionBtn}>{isOpen ? "Hide" : "Show more"}</Button>
            </div>}
            {isError && <span className={styles.textError}>{errors[name]}</span>}
        </div>
    );
};

CustomTextArea.propTypes = {
    form: PropTypes.object,
    field: PropTypes.object,
    label: PropTypes.string,
    classNameLabel: PropTypes.string,
    className: PropTypes.string,
    customChange: PropTypes.any
};

CustomTextArea.defaultProps = {
    form: {},
    field: {},
    label: "",
    classNameLabel: "",
    className: "",
    customChange: null
};

export default CustomTextArea;