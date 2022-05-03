/* eslint-disable no-unused-vars */
import React from "react";
import { Formik, Form, Field } from "formik";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import classNames from "classnames";
import styles from "./FormCreateAnnouncment.module.scss";
import Input from "../Input";
import TextArea from "../TextArea";
import Button from "../Button";
import createActions from "../../store/createActions";




const FormCreateAnnouncment = () => {
    const { setData, getUrlPhoto, setIsOpen } = createActions;
    const dispatch = useDispatch();
    const { photo } = useSelector(state => state.form);

    const initialValues = {
        name: "",
        description: "",
        photo: ""
    };

    const handelSubmit = (values, {resetForm, setIsSubmitting}) => {
        const date = format(new Date(), "hh:mm MMMM dd, yyyy");
        const body = {...values, photo, date, isHide:true};
        resetForm();
        dispatch(setData(body));
        dispatch(setIsOpen(false));
        dispatch(getUrlPhoto(null));
    };

    const validationSchema = yup.object().shape({
        name: yup.string()
            .required("Need to enter text")
            .min(2, "Not enough letters")
            .matches(/[A-Za-z/s]/, "Only latin"),
        description: yup.string()
            .required("Need to enter text")
            .min(10, "Minimum 10 words")
            .matches(/[A-Za-z/s]/, "Only latin")
    });

    return (
        <Formik 
        initialValues={initialValues} 
        onSubmit={handelSubmit} 
        validationSchema={validationSchema}>


            {({isValid, dirty}) => {

                return (
                    <Form className={styles.form}>
                        <h1 className={styles.formTitle}>New announcment</h1>
                        <Field
                            type="text"
                            name="name"
                            placeholder="Example Book"
                            label="Name"
                            classNameLabel={classNames(styles.formLabel, styles.formLabelAll)}
                            className={classNames(styles.formInputAll, styles.formInput)}
                            component={Input}
                        />
                        <Field
                            type="text"
                            name="description"
                            placeholder="Anything that describes your product"
                            label="Description"
                            className={classNames(styles.formInputAll, styles.formInput, styles.formInputDescription)}
                            classNameLabel={classNames(styles.formLabel, styles.formLabelAll)}
                            component={TextArea}
                        />
                        <Field
                            type="file"
                            name="photo"
                            label="Add photo"
                            element={photo && <img className={styles.formImg} src={photo} alt="a"/>}
                            className={classNames(styles.formInputAll, styles.formInputFile, {[styles.formIsDone]:photo})}
                            classNameLabel={styles.formLabelAll}
                            onChange={(event)=>dispatch(getUrlPhoto(event))}
                            component={Input}
                        />
                        <div className={styles.formContainerBtn}>
                            <Button className={classNames(styles.formBtn, styles.formBtnCancel)} onClick={()=>dispatch(setIsOpen(false))} type={"button"}>Cancel</Button>
                            <Button className={classNames(styles.formBtn, styles.formBtnCreate, {[styles.formBtnDisabled]:!isValid || !dirty})} disabled={!isValid || !dirty} type={"submit"}>Create</Button>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};


export default FormCreateAnnouncment;