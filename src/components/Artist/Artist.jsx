import React from 'react';
import classNames from "classnames";
import styles from './Artist.module.scss'
import dataCard from "./dataCard";
import ArtistCard from "../ArtistCard/Artist-card";

const Artist = (props) => {
    return (
        <section className={classNames("section-padding", )}>
            <div className={styles.line_text}>
                <h1 className={classNames(styles.line_text_title, styles.line_text_title_01)}>
                    Artists
                </h1>

                <h1 className={classNames(styles.line_text_title, styles.line_text_title_02)}>
                    Artists
                </h1>

                <h1 className={classNames(styles.line_text_title, styles.line_text_title_03)}>
                    Artists
                </h1>
            </div>

            <div className="container">
                <div className={styles.cards}>
                    {dataCard.map((item) => {
                        return <ArtistCard key={item.id}
                                           name={item.name}
                                           img={item.img}
                        />
                    })}
                </div>
            </div>
        </section>
    );
}

export default Artist;