import React from 'react';
import styles from './SocialIcon.module.scss';

const SocialIcon = (props) => {
    return (
        <a href="/" className={ styles.social_icon }>
            <img src={props.img} alt="icon"/>
        </a>
    );
}

export default SocialIcon;