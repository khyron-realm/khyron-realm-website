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
                <h3 className="vertical-timeline-element-title">1 - Concept</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <ul>
                    <li>Idea</li>
                    <li>Initial concept</li>
                    <li>Test App Development</li>
                    <li>Alpha Test Version Mobile App</li>
                    <li>Creating the community</li>
                    <li>Finishing the game concept</li>
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
                <h3 className="vertical-timeline-element-title">2 - Development</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    <i>Coming soon ...</i>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={isDarkTheme ? { background: 'rgb(48, 56, 70)', color: 'white' } : { background: 'rgb(242, 246, 250)', color: 'rgb(28, 30, 33)' }}
                contentArrowStyle={isDarkTheme ? { borderRight: '7px solid rgb(48, 56, 70)' } : { borderRight: '7px solid rgb(242, 246, 250)' }}
                date="Q2 - 2022"
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/development_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">3 - Testing</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    <i>Coming soon ...</i>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={isDarkTheme ? { background: 'rgb(48, 56, 70)', color: 'white' } : { background: 'rgb(242, 246, 250)', color: 'rgb(28, 30, 33)' }}
                contentArrowStyle={isDarkTheme ? { borderRight: '7px solid rgb(48, 56, 70)' } : { borderRight: '7px solid rgb(242, 246, 250)' }}
                date="Q3 - 2022"
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/launch_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">4 - Launch</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    <i>Coming soon ...</i>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={isDarkTheme ? { background: 'rgb(48, 56, 70)', color: 'white' } : { background: 'rgb(242, 246, 250)', color: 'rgb(28, 30, 33)' }}
                contentArrowStyle={isDarkTheme ? { borderRight: '7px solid rgb(48, 56, 70)' } : { borderRight: '7px solid rgb(242, 246, 250)' }}
                date="Q4 - 2022"
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/expansion_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">5 - Expansion</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    <i>Coming soon ...</i>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={isDarkTheme ? { background: 'rgb(48, 56, 70)', color: 'white' } : { background: 'rgb(242, 246, 250)', color: 'rgb(28, 30, 33)' }}
                contentArrowStyle={isDarkTheme ? { borderRight: '7px solid rgb(48, 56, 70)' } : { borderRight: '7px solid rgb(242, 246, 250)' }}
                date="Q1 - 2023"
                iconStyle={{ background: 'white', color: 'rgb(48, 56, 70)' }}
                icon={<img src="/img/icons/platform_icon.png"  alt="img"/>}
            >
                <h3 className="vertical-timeline-element-title">6 - Platform</h3>
                <h4 className="vertical-timeline-element-subtitle"> </h4>
                <p>
                    <i>Coming soon ...</i>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

function Timeline() {
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

export default Timeline;