/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./FormSearch.module.scss";
import Input from "../Input";
import Button from "../Button";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import throttle from "../../util/throttle";
import { getValuesWithForm } from "../../util/getValuesWithForm";
import createActions from "../../store/createActions";


const FormSearch = (props) => {
    const { setIsHide } = createActions;
    const { data } = useSelector(state => state.api);
    const dispatch = useDispatch();
    const newThrottle = throttle(dispatch, setIsHide, 400);

    const handelInput = (event) => {
        const { search } = getValuesWithForm(event);
        newThrottle(search, data);

    };
    const handelSubmit = (values)=>{
        console.log(values);
    };
    const initialValues = {
        search:""
    };

    const { additionalClassNames } = props;

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handelSubmit}>
            {() => {
                return (
                    <Form onInput={handelInput} className={classNames(styles.form, additionalClassNames)}>
                        <Button className={styles.formBtn} type="submit">
                            <Search />
                        </Button>
                        <Field
                            type="search"
                            name="search"
                            placeholder="Search..."
                            className={styles.formInputSearch}
                            classNameLabel={styles.formLabelSearch}
                            component={Input}
                        />
                    </Form>
                );
            }}

        </Formik >

    );
};

FormSearch.propTypes = {
    additionalClassNames: PropTypes.string,
};

FormSearch.defaultProp = {
    additionalClassNames: "",
};

export default React.memo(FormSearch);