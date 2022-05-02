import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";
import Button from "../Button";

const ModalMenu = (props) => {
    const { onClickCloses, onClickEdit, onClickDelete } = props;
    return (
        <div className={styles.backGround}>
            <div className={styles.modal}>
                <Button type="button" onClick={onClickCloses} className={styles.modalBtnCloses} />
                <Button type="button" onClick={onClickEdit} className={classNames(styles.modalBtn, styles.modalBtnEdit)}>Edit</Button>
                <Button type="button" onClick={onClickDelete} className={classNames(styles.modalBtn, styles.modalBtnDelete)}>Delete</Button>
            </div>
        </div>
    );
};

ModalMenu.propTypes = {
    onClickCloses: PropTypes.func,
    onClickEdit: PropTypes.func,
    onClickDelete: PropTypes.func
};

ModalMenu.defaultProps = {
    onClickCloses: ()=>{},
    onClickEdit: ()=>{},
    onClickDelete: ()=>{}
};

export default ModalMenu;