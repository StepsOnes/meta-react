import React from 'react';
import styles from './ArtisCard.module.scss'

const ArtistCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={props.img} alt=""/>
            </div>

            <p className={styles.name_person}>
                {props.name}
            </p>
        </div>
    );
}

export default ArtistCard;