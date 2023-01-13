import React from 'react';
import styles from './RoadMapCard.module.scss';
import classNames from "classnames";

const RoadMapCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <div className={styles.row}>
                    <div className={styles.number}>{props.number}</div>
                    <div className={styles.about}>
                        <p className={styles.stage}>{props.stage}</p>
                        <h3 className={styles.title}>{props.title}</h3>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={"text"}>
                    <ul className={styles.list}>
                        <li>{props.li_1}</li>
                        <li>{props.li_2}</li>
                        <li>{props.li_3}</li>
                    </ul>

                    <p className={styles.content_about}>
                        {props.about}
                    </p>
                </div>

                <div className={styles.content_img}>
                    <img src={props.img} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default RoadMapCard;