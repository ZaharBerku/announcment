/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./CardAnnouncment.module.scss";
import Input from "../Input";
import CustomTextArea from "../CustomTextArea";
import Button from "../Button";
import ModalMenu from "../ModalMenu";
import createActions from "../../store/createActions";
import { getURLPhoto } from "../../util/getURLPhoto";



const CardAnnouncment = (props) => {
    const { data } = props;
    const dispatch = useDispatch();
    const { description, id, name, photo: photoCard, date, isHide = true } = data;
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [photo, setPhoto] = useState(null);
    const {deleteData, editData } = createActions;

    const initialValues = {
        name,
        description,
        photo: ""
    };

    const handelSubmit = (values) => {
        const newValue = { ...values, ["photo"]: (photo || photoCard), date, isHide, id };
        dispatch(editData(newValue, id));
        setIsDisabled(true);
    };

    const validationSchema = yup.object().shape({
        name: yup.string()
            .required("Need to enter text")
            .min(2, "Not enough letters")
            .matches(/[A-Za-z/s]/, "Only latin"),
        description: yup.string()
            .required("Need to enter text")
            .min(10, "Minimum 10 words")
            .matches(/[^A-Za-z/s]/, "Only latin")

    });
    return (
        <>
        {isHide && <Formik
            initialValues={initialValues}
            onSubmit={(values) => handelSubmit(values, id)}
            validationSchema={validationSchema}>

            {((props) => {
                return (
                    <Form
                        className={classNames(styles.formCard)}
                    >

                        {isOpenModal && <ModalMenu
                            onClickCloses={() => setIsOpenModal(false)}
                            onClickEdit={() => {
                                setIsOpenModal(false);
                                setIsDisabled(false);
                            }}
                            onClickDelete={()=>{
                                dispatch(deleteData(id));
                            }} />}


                        {isDisabled ?
                            <Button type="button" className={styles.formCardBtn} onClick={() => setIsOpenModal(true)}>
                                <span></span>
                            </Button>
                            :
                            <Button type="submit" className={styles.formCardBtnSave}>
                                <span>Save</span>
                            </Button>}


                        <Field
                            name="photo"
                            type="file"
                            disabled={isDisabled}
                            label="Change photo"
                            element={
                                <img className={classNames(styles.formCardImg,
                                    { [styles.formCardEditImg]: !isDisabled })} src={photo || photoCard} />
                            }
                            classNameLabel={classNames(styles.formCardLabel, styles.formCardLabelFile)}
                            className={styles.formCardInputFile}
                            onChange={(event) => getURLPhoto(event, setPhoto)}
                            component={Input}
                        />
                        <CustomTextArea
                            name="name"
                            disabled={isDisabled}
                            classNameLabel={styles.formCardLabel}
                            className={
                                classNames(styles.formCardTextArea,
                                    styles.formCardName,
                                    { [styles.formCardEditTextArea]: !isDisabled })}
                        />
                        <CustomTextArea
                            name="description"
                            disabled={isDisabled}
                            classNameLabel={styles.formCardLabel}
                            className={
                                classNames(styles.formCardTextArea,
                                    styles.formCardDescription,
                                    { [styles.formCardEditTextArea]: !isDisabled })}
                        />
                        <p className={styles.formCardDate}>{date}</p>
                    </Form>
                );
            })}
        </Formik>}
        </>
    );
};

CardAnnouncment.propTypes = {
    data: PropTypes.shape({
        description: PropTypes.string,
        id: PropTypes.number,
        name: PropTypes.string,
        photo: PropTypes.string,
        date: PropTypes.string,
        isHide: PropTypes.bool
    }),
    setIsOpenModal: PropTypes.func,
    isOpenModal: PropTypes.bool
};
CardAnnouncment.propTypes = {
    data:()=>{},
    setIsOpenModal: ()=>{},
    isOpenModal: ()=>{}
};

export default CardAnnouncment;