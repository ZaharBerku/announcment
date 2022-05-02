import React from "react";
import { useDispatch } from "react-redux";
import createActions from "../../store/createActions";
import styles from "./Header.module.scss";
import Button from "../Button";

const Header = () => {
    const { setIsOpen } = createActions;
    const dispatch = useDispatch();
    return(
        <header className={styles.header}>
            <Button onClick={()=>dispatch(setIsOpen(true))} className={styles.headerBtn}>Add announcment</Button>
        </header>
    );
};

export default Header;