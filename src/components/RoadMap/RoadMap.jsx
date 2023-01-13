import React from 'react';
import styles from './RoadMap.module.scss';
import classNames from "classnames";
import RoadMapCard from "../RoadMapCard/RoadMapCard";
import dataRoadMapCard from "./dataRoadMapCard";
import circle from '../../assets/img/circles/circle.png';

const RoadMap = (props) => {
    return (
        <section id="roadmap" className={classNames("section-padding", styles.road_map)}>
            <div className="container">
                <h1 className={classNames(styles.title, "title text-center")}>
                    Roadmap
                </h1>

                <div className={styles.cards}>

                    {dataRoadMapCard.map((item, index) => {
                        return <RoadMapCard number={item.number}
                                            key={index}
                                            stage={item.stage}
                                            title={item.title}
                                            img={item.img}
                                            about={item.about}
                                            li_1={item.li1}
                                            li_2={item.li2}
                                            li_3={item.li3}

                        />
                    })}
                </div>
            </div>

            <div className={classNames(styles.circle_dec, styles.circle_dec_01)}>
                <img src={circle} alt=""/>
            </div>

            <div className={classNames(styles.circle_dec, styles.circle_dec_02)}>
                <img src={circle} alt=""/>
            </div>

            <div className={classNames(styles.circle_dec, styles.circle_dec_03)}>
                <img src={circle} alt=""/>
            </div>
        </section>
    );
}

export default RoadMap;