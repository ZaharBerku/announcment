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
    const { label, classNameLabel, className, ...customnTextarea } = props;
    const { name, value, ...newFiled } = field;
    const { error, touched } = meta;
    const isError = touched && error;
    const isDone = name === "description" && value.length > 22 && customnTextarea.disabled;
        console.log(meta);
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
            {isError && <span className={styles.textError}>{error}</span>}
        </div>
    );
};

CustomTextArea.propTypes = {
    label: PropTypes.string,
    classNameLabel: PropTypes.string,
    className: PropTypes.string,
};

CustomTextArea.defaultProps = {
    label: "",
    classNameLabel: "",
    className: "",
};

export default CustomTextArea;