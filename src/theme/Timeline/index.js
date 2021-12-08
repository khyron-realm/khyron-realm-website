import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import styles from "./styles.module.scss";
import useThemeContext from '@theme/hooks/useThemeContext';
import Headline from "@theme/Headline";

function TimelineData() {
    const { isDarkTheme } = useThemeContext();
    return (
        <VerticalTimeline lineColor={isDarkTheme ? 'rgb(18, 18, 18)' : 'rgb(240, 240, 240)'} className={"container"}>
            <VerticalTimelineElement
                className="vertical-timeline-element--work roadmap-element"
                contentStyle={isDarkTheme ? { background: 'rgb(48, 56, 70)', color: 'white' } : { background: 'rgb(242, 246, 250)', color: 'rgb(28, 30, 33)' }}
                contentArrowStyle={isDarkTheme ? { borderRight: '7px solid rgb(48, 56, 70)' } : { borderRight: '7px solid rgb(242, 246, 250)' }}
                date="Q4 - 2021"
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)', badge: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/concept_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">Phase 1</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <ul>
                    <li>Creating the initial concept of the game</li>
                    <li>Launching a first test version to gather feedback</li>
                    <li>Creating the community</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={isDarkTheme ? { background: 'rgb(48, 56, 70)', color: 'white' } : { background: 'rgb(242, 246, 250)', color: 'rgb(28, 30, 33)' }}
                contentArrowStyle={isDarkTheme ? { borderRight: '7px solid rgb(48, 56, 70)' } : { borderRight: '7px solid rgb(242, 246, 250)' }}
                date="Q1 - 2022"
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/testing_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">Phase 2</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>

                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={isDarkTheme ? { background: 'rgb(48, 56, 70)', color: 'white' } : { background: 'rgb(242, 246, 250)', color: 'rgb(28, 30, 33)' }}
                contentArrowStyle={isDarkTheme ? { borderRight: '7px solid rgb(48, 56, 70)' } : { borderRight: '7px solid rgb(242, 246, 250)' }}
                date="Q2 - 2022"
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/crypto_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">Phase 3</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>

                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={isDarkTheme ? { background: 'rgb(48, 56, 70)', color: 'white' } : { background: 'rgb(242, 246, 250)', color: 'rgb(28, 30, 33)' }}
                contentArrowStyle={isDarkTheme ? { borderRight: '7px solid rgb(48, 56, 70)' } : { borderRight: '7px solid rgb(242, 246, 250)' }}
                date="Q3 - 2022"
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/crypto_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">Phase 4</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={isDarkTheme ? { background: 'rgb(48, 56, 70)', color: 'white' } : { background: 'rgb(242, 246, 250)', color: 'rgb(28, 30, 33)' }}
                contentArrowStyle={isDarkTheme ? { borderRight: '7px solid rgb(48, 56, 70)' } : { borderRight: '7px solid rgb(242, 246, 250)' }}
                date="Q4 - 2022"
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/crypto_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">Phase 5</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

function Roadmap() {
    return (
        <section id="timeline" className={styles.roadmap}>
            <div className="container">
                <Headline
                    title="Roadmap"
                    offset={1}
                />
                <TimelineData />
            </div>
        </section>
    );
}

export default Roadmap;