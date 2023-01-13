import React, {useEffect} from 'react';
import classNames from "classnames";
import styles from './WaveNft.module.scss';
import waveCard from '../../assets/img/wave-cards/wave-blue.png'
import WOW from "wowjs";

const WaveNft = (props) => {
    // useEffect(() => {
    //     new WOW.WOW({
    //         live: false
    //     }).init();
    // }, [])

    return (
        <section id="WaveNft" className={classNames("section-padding", styles.wave)}>
            <div className="container">
                <div className={styles.row}>
                    <div className={styles.col}>
                        <h1 className={classNames(styles.title, "title wow fadeInUpBig")}>
                            wave NFT
                            <br/>
                            <span>COLLECTION of 777</span>
                        </h1>

                        <div className="wave-card">
                            <img src={waveCard} alt="wave-card"/>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.about}>
                            <h3 className={styles.about_title}>
                                META WAVE NFT is your pass to Meta Record Label ecosystem. It is your access to our industry experts, established artists, and partners.
                            </h3>

                            <p className={classNames(classNames(styles.about_subtitle, "wow bounceInDown"))} >
                                Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.
                            </p>

                            <p className={classNames(styles.about_subtitle, "wow bounceInDown")}>
                                Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.
                            </p>

                            <p className={classNames(styles.about_subtitle, "wow bounceInDown")}>
                                Maecenas ultricies mi eget mauris pharetra et ultrices. A condimentum vitae sapien pellentesque habitant morbi.
                            </p>

                            <a href="/" className={styles.about_btn}>
                                Get one on OpenSea
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WaveNft;