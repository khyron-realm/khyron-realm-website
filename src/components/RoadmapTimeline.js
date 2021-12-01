import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import styles from "./RoadmapTimeline.module.css";

function Roadmap() {
    return (
        <VerticalTimeline lineColor='lightblue' className={"container"}>
            <VerticalTimelineElement
                className="vertical-timeline-element--work roadmap-element"
                contentStyle={{ background: 'lightblue', color: 'dark' }}
                contentArrowStyle={{ borderRight: '7px solid lightblue' }}
                date="SEP 2021"
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/concept.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">Concept</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    Creating the initial concept of the game
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'lightblue', color: 'dark' }}
                contentArrowStyle={{ borderRight: '7px solid lightblue' }}
                date="NOV 2021"
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/testing.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">Initial version</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    Launching a first test version to gather feedback
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'lightblue', color: 'dark' }}
                contentArrowStyle={{ borderRight: '7px solid lightblue' }}
                date="MAR 2022"
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/crypto.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">Game Launch</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    Launching the complete game on the AppStore and PlayStore
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'lightblue', color: 'dark' }}
                contentArrowStyle={{ borderRight: '7px solid lightblue' }}
                date="APR 2022"
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/launch.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">Crypto expansion</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    Launching the token and crypto expansion for the game
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}

export default function RoadmapTimeline() {
    return (
        <section className={styles.roadmap}>
            <div className="container">
                <Roadmap />
            </div>
        </section>
    );
}