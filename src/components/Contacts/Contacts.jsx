import React from 'react';
import classNames from "classnames";
import styles from './Contacts.module.scss';
import waveCard from '../../assets/img/wave-cards/contacts-wave.png'

const Contacts = (props) => {
    return (
        <section id="contacts" className={classNames( styles.contacts)}>
            <div className="container">
                <div className={styles.row}>
                    <div className={styles.col_content}>
                        <h1 className={classNames("title", styles.title)}>
                            Join our
                            <br/>
                            <span>Discord</span>
                        </h1>

                        <p className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </p>

                        <a href="/" className={styles.btn}>
                            Join Discord
                        </a>
                    </div>

                    <div className={styles.col_img}>
                        <img src={waveCard} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;