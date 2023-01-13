import React from 'react';
import classNames from "classnames";
import styles from "./Team.module.scss";
import TeamCard from "../TeamCard/TeamCard";
import dataTeam from "./dataTeam";

const Team = (props) => {
    return (
        <section className={classNames("section-padding", styles.team)}>
            <div className={styles.line_text}>
                <h1 className={classNames(styles.line_text_title, styles.line_text_title_01)}>
                    TEAM
                </h1>

                <h1 className={classNames(styles.line_text_title, styles.line_text_title_02)}>
                    TEAM
                </h1>

                <h1 className={classNames(styles.line_text_title, styles.line_text_title_03)}>
                    TEAM
                </h1>
            </div>

            <div className="container">
                <div className={styles.team_cards}>
                    {dataTeam.map((item, index) => {
                        return <TeamCard img={item.img}
                                         key={index}
                                         name={item.name}
                                         position={item.position}
                                         text={item.text}
                        />
                    })}
                </div>
            </div>
        </section>
    );
}

export default Team;