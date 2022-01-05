import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import styles from "./styles.module.scss";
import useThemeContext from '@theme/hooks/useThemeContext';

function TimelineData() {
    const { isDarkTheme } = useThemeContext();
    return (
        <VerticalTimeline lineColor={isDarkTheme ? '#20232a' : 'white'} className={"container"}>
            <VerticalTimelineElement
                className="vertical-timeline-element--work roadmap-element"
                contentStyle={isDarkTheme ? { background: 'rgb(48, 56, 70)', color: 'white' } : { background: 'rgb(255, 255, 255)', color: 'rgb(28, 30, 33)' }}
                contentArrowStyle={isDarkTheme ? { borderRight: '7px solid rgb(48, 56, 70)' } : { borderRight: '7px solid rgb(255, 255, 255)' }}
                date=""
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)', badge: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/concept_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">1 - Idea</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    Shaping the idea for the game
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={isDarkTheme ? { background: 'rgb(48, 56, 70)', color: 'white' } : { background: 'rgb(242, 246, 250)', color: 'rgb(28, 30, 33)' }}
                contentArrowStyle={isDarkTheme ? { borderRight: '7px solid rgb(48, 56, 70)' } : { borderRight: '7px solid rgb(242, 246, 250)' }}
                date=""
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/testing_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">2 - Concept</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    Creating the story and the gameplay
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={isDarkTheme ? { background: 'rgb(48, 56, 70)', color: 'white' } : { background: 'rgb(242, 246, 250)', color: 'rgb(28, 30, 33)' }}
                contentArrowStyle={isDarkTheme ? { borderRight: '7px solid rgb(48, 56, 70)' } : { borderRight: '7px solid rgb(242, 246, 250)' }}
                date=""
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/launch_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">3 - Alpha version</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    Releasing a test version of the game on mobile (iOS, Android)
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={isDarkTheme ? { background: 'rgb(48, 56, 70)', color: 'white' } : { background: 'rgb(242, 246, 250)', color: 'rgb(28, 30, 33)' }}
                contentArrowStyle={isDarkTheme ? { borderRight: '7px solid rgb(48, 56, 70)' } : { borderRight: '7px solid rgb(242, 246, 250)' }}
                date=""
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/expansion_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">4 - Community</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    Creating the Discord community
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={isDarkTheme ? { background: 'rgb(48, 56, 70)', color: 'white' } : { background: 'rgb(242, 246, 250)', color: 'rgb(28, 30, 33)' }}
                contentArrowStyle={isDarkTheme ? { borderRight: '7px solid rgb(48, 56, 70)' } : { borderRight: '7px solid rgb(242, 246, 250)' }}
                date=""
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/development_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">5 - Development</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    Building the complete game
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

function Timeline() {
    return (
        <section id="timeline" className={styles.roadmap}>
            <div className="container">
                <h1 className={styles.roadmap_title}>Roadmap</h1>
                <div className="underline"></div>
                <TimelineData />
            </div>
        </section>
    );
}

export default Timeline;