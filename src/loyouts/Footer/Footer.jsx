import React from 'react';
import styles from './Footer.module.scss';
import Logo from "../../components/Logo/Logo";
import SocialIcon from "../../UI/SocialIcon/SocialIcon";
import twitter from '../../assets/img/social-icons/twitter.svg';
import discord from '../../assets/img/social-icons/discord.svg';
import youtube from '../../assets/img/social-icons/youtube.svg';
import telegram from '../../assets/img/social-icons/telegram.svg';

const socialIcons = [
    {img: twitter},
    {img: discord},
    {img: youtube},
    {img: telegram},
];


const Footer = (props) => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer_row}>
                    <div className={styles.footer_col}>
                        <Logo />
                        <p className={styles.copyright}>
                            © 2022 All rights reserved
                        </p>
                    </div>

                    <div className={styles.footer_col}>
                        <ul className={styles.list}>
                            <li>
                                <a href="#WaveNft">Wave NFTs</a>
                            </li>

                            <li>
                                <a href="#roadmap">Stories</a>
                            </li>

                            <li>
                                <a href="#contacts">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footer_col}>
                        <ul className={styles.list}>
                            <li>
                                <a href="/">Licencing</a>
                            </li>

                            <li>
                                <a href="/">Style Guide</a>
                            </li>

                            <li>
                                <a href="/">Changelog</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footer_col}>
                        <p className={styles.text}>
                            Powered by Webflow
                        </p>

                        <p className={styles.text}>
                            Developed by Anastasiia G.
                        </p>
                    </div>

                    <div className={styles.footer_col}>
                        <div className={styles.social_icons}>
                            {socialIcons.map((item, index) => {
                                return <SocialIcon img={item.img} key={index}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;