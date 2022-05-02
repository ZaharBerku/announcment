import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import styles from "./Main.module.scss";
import FormSearch from "../FormSearch";
import CardAnnouncment from "../CardAnnouncment";
import { topCard } from "../../util/topCard";

const Main = () => {
    const { data } = useSelector(state => state.api);
    return (
        <main className={styles.main}>
            <div className={styles.mainBackground}>
            </div>
            <div className={styles.mainContainerFormSearch}>
                <FormSearch additionalClassNames={styles.mainFormSearch} />
            </div>
            <div className={classNames(styles.mainContainerCard, {[styles.mainContainerText]:!data.length})}>
                {data.length ? topCard(data).map(element => <CardAnnouncment
                    key={element.id}
                    data={element} />) :
                    <p className={styles.mainAlternativeText}>You have no new announcment</p>}
            </div>
        </main>
    );
};



export default Main;