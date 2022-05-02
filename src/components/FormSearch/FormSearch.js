/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./FormSearch.module.scss";
import Input from "../Input";
import Button from "../Button";
import {ReactComponent as Search} from "../../assets/icons/search.svg";
import throttle from "../../util/throttle";
import { getValuesWithForm } from "../../util/getValuesWithForm";
import createActions from "../../store/createActions";


const FormSearch = (props) => {
    const { setIsHide } = createActions;
    const { data } = useSelector(state => state.api);
    const dispatch = useDispatch();
    const newThrottle = throttle(dispatch, setIsHide, 400);

    const handelInput = (event) => {
        const {search} = getValuesWithForm(event);
        newThrottle(search, data);
    };

    const { additionalClassNames } = props;

    return (
                    <form onInput={handelInput} className={classNames(styles.form, additionalClassNames)}>
                        <Button className={styles.formBtn} type="submit">
                            <Search/>
                        </Button>
                        <Input
                            type="search"
                            name="search"
                            placeholder="Search..."
                            className={styles.formInputSearch}
                            classNameLabel={styles.formLabelSearch}
                        />
                    </form>
                );
};

FormSearch.propTypes = {
    additionalClassNames: PropTypes.string,
};

FormSearch.defaultProp = {
    additionalClassNames: "",
};

export default FormSearch;