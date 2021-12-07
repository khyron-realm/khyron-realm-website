import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import styles from "./RoadmapTimeline.module.css";

function Roadmap() {
    return (
        <VerticalTimeline lineColor='rgb(48, 56, 70)' className={"container"}>
            <VerticalTimelineElement
                className="vertical-timeline-element--work roadmap-element"
                contentStyle={{ background: 'rgb(48, 56, 70)', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(48, 56, 70)' }}
                date=""
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)', badge: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/concept_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">SEPTEMBER 2021</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    Creating the initial concept of the game
                </p>
                <img src="/img/wiki/concept.png"  alt="img"/>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(48, 56, 70)', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(48, 56, 70)' }}
                date=""
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/testing_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">NOVEMBER 2021</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    Launching a first test version to gather feedback
                </p>
                <img src="/img/wiki/test_version.png"  alt="img"/>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(48, 56, 70)', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(48, 56, 70)' }}
                date=""
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/crypto_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">DECEMBER 2021</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    Creating the community
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(48, 56, 70)', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(48, 56, 70)' }}
                date=""
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/crypto_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">JANUARY 2022</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    Token launch
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(48, 56, 70)', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(48, 56, 70)' }}
                date=""
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/crypto_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">MARCH 2022</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    Launching the complete game on the AppStore and PlayStore
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(48, 56, 70)', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(48, 56, 70)' }}
                date=""
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/launch_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">APRIL 2022</h3>
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