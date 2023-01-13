import React, {useState} from 'react';
import classNames from "classnames";
import styles from './Story.module.scss';
import tabImg01 from '../../assets/img/tabs/tab-img_01.jpg';
import tabImg02 from '../../assets/img/tabs/tab-img_02.svg';
import tabImg03 from '../../assets/img/tabs/tab-img_03.jpg';

const Story = (props) => {
    const [activeTab, setActiveTab] = useState(1);

    const changeTab = (tab) => {
        console.log(tab);
        setActiveTab(tab)
    }

    return (
        <section className={classNames( "section-padding", styles.story_padding)}>
            <div className="container">
                <h1 className={classNames(styles.title, "title", "text-center")}>
                    MRL. <span>the story.</span>
                </h1>

                <div className={styles.tabs_wrapper}>
                    <div className={styles.tabs_buttons}>
                        <div className={activeTab === 1 ? classNames(styles.tabs_button, styles.active) : styles.tabs_button}
                             onClick={() => changeTab(1)}>
                            Our founders
                        </div>

                        <div className={activeTab === 2 ? classNames(styles.tabs_button, styles.active) : styles.tabs_button}
                             onClick={() => changeTab(2)}>
                            Partners
                        </div>

                        <div className={activeTab === 3 ? classNames(styles.tabs_button, styles.active) : styles.tabs_button}
                             onClick={() => changeTab(3)}>
                            The future
                        </div>
                    </div>

                    <div className={styles.tabs}>
                        <div className={activeTab === 1 ? classNames(styles.tab, styles.active) : styles.tab}>
                            <div className={styles.tab_img}>
                                <img src={tabImg01} alt=""/>
                            </div>

                            <div className={styles.about}>
                                <h3 className={styles.about_title}>
                                    META WAVE NFT is your pass to Meta Record Label ecosystem. It is your access to our industry experts, established artists, and partners.
                                </h3>

                                <p className={styles.about_subtitle}>
                                    Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.
                                </p>

                                <p className={styles.about_subtitle}>
                                    Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.
                                </p>

                                <p className={styles.about_subtitle}>
                                    Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.
                                </p>
                            </div>
                        </div>

                        <div className={activeTab === 2 ? classNames(styles.tab, styles.active) : styles.tab}>
                            <div className={styles.tab_img}>
                                <img src={tabImg02} height={180} width={170} alt=""/>
                            </div>

                            <div className={styles.about}>
                                <h3 className={styles.about_title}>
                                    META WAVE NFT Partners. We secured dates for out artists to peform in front of the live audience of Metaverse.
                                </h3>

                                <p className={styles.about_subtitle}>
                                    Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.
                                </p>

                                <p className={styles.about_subtitle}>
                                    Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.
                                </p>

                                <p className={styles.about_subtitle}>
                                    Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.
                                </p>
                            </div>
                        </div>

                        <div className={activeTab === 3 ? classNames(styles.tab, styles.active) : styles.tab}>
                            <div className={styles.tab_img}>
                                <img src={tabImg03} height={180} width={170} alt=""/>
                            </div>

                            <div className={styles.about}>
                                <h3 className={styles.about_title}>
                                    META WAVE NFT the Future. We secured dates for out artists to peform in front of the live audience of Metaverse.
                                </h3>

                                <p className={styles.about_subtitle}>
                                    Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.
                                </p>

                                <p className={styles.about_subtitle}>
                                    Maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis. Aenean vel elit scelerisque mauris pellentesque pulvinar. Et malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis urna cursus eget.
                                </p>

                                <p className={styles.about_subtitle}>
                                    Hac habitasse platea dictumst vestibulum rhoncus est. Sit amet dictum sit amet justo. Tortor aliquam nulla facilisi cras.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Story;