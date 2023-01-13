import React from 'react';
import styles from './TeamCard.module.scss';
import SocialIcon from "../../UI/SocialIcon/SocialIcon";
import twitter from '../../assets/img/social-icons/twitter.svg';
import inn from '../../assets/img/social-icons/in.svg';

const TeamCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={props.img} alt=""/>
            </div>

            <h4 className={styles.name}>
                {props.name}
            </h4>

            <p className={styles.position}>
                {props.position}
            </p>

            <div className={styles.group}>
                <SocialIcon img={twitter}/>
                <SocialIcon img={inn}/>
            </div>

            <p className={styles.text}>
                {props.text}
            </p>
        </div>
    );
}

export default TeamCard;