import React from 'react';
import classNames from "classnames";
import styles from './Partners.module.scss'
import logoHolder from '../../assets/img/logo/logo-holder.svg'

const logoHolderBlocks = [
    {content: logoHolder},
    {content: logoHolder},
    {content: logoHolder},
    {content: logoHolder},
    {content: logoHolder},
    {content: logoHolder},
];

const Partners = (props) => {
    return (
        <section className={classNames("section-padding", styles.partners)}>
            <div className="container">
                <h4 className={classNames(styles.title, "text-center")}>
                    Our partners
                </h4>


                <div className={styles.group}>
                    {logoHolderBlocks.map((item, index) => {
                        return <div key={index} className={styles.logoholder}>
                            <img src={item.content} alt=""/>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Partners;