import React from 'react';
import styles from './Guitar.module.scss';
import classNames from "classnames";
import guitarBg from '../../assets/img/bg/guitar-bg.jpg';

const Guitar = (props) => {
    return (
        <section className={classNames(styles.guitar_bg, "")} style={{ background: `url(${guitarBg})`,backgroundSize: "cover"}
        }></section>
    );
}

export default Guitar;