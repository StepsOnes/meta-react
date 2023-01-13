import React from 'react';
import classNames from "classnames";
import styles from './Header.module.scss';
import metaCards from '../../assets/img/header/meta-cards.png';

const Header = (props) => {
    return (
        <header>
            <div className="container">
                <div className={ styles.row }>
                    <div className={ classNames(styles.col, styles.col_pad) }>
                        <h1 className={ classNames(styles.title, "title") }>
                            META RECORD LABEl
                        </h1>

                        <p className={classNames(styles.subtitle, "subtitle")}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </p>

                        <a href="/" className={styles.learn_more}>
                            Learn more
                        </a>
                    </div>

                    <div className={ styles.col }>
                        <img src={metaCards} alt=""/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;