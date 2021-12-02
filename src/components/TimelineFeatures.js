import React from 'react';
import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
    themes,
    createTheme,
} from '@merc/react-timeline';
import useThemeContext from '@theme/hooks/useThemeContext';


const BackgroundColorSwitcher = ({lightImageSrc, darkImageSrc}) => {
    const { isDarkTheme } = useThemeContext();

    return (
        isDarkTheme ? 'rgb(240, 240, 240)' : 'rgb(48, 56, 70)'
    )
};

const TextColorSwitcher = ({lightImageSrc, darkImageSrc}) => {
    const { isDarkTheme } = useThemeContext();

    return (
        isDarkTheme ? 'rgb(48, 56, 70)': 'rgb(240, 240, 240)'
    )
};

const customTheme = createTheme(themes.default, {
    card: {
        backgroundColor: '#efefef',
    },
    date: {
        backgroundColor: BackgroundColorSwitcher,
        color: TextColorSwitcher,
    },
    marker: {
        borderColor: BackgroundColorSwitcher,
    },
    timelineTrack: {
        backgroundColor: BackgroundColorSwitcher,
    },
});

function App() {
    return (
        <Timeline theme={customTheme}>
            <Events>
                <TextEvent date="JUL 2021" text="**Thinking** about the *idea*" />
                <ImageEvent
                    date="SEP 2021"
                    text="** Creating the initial concept of the game **"
                    src="/img/concept.png"
                    alt=""
                    credit=""
                >
                </ImageEvent>
                <ImageEvent
                    date="NOV 2021"
                    text="** Launching a first test version to gather feedback **"
                    src="/img/test_version.png"
                    alt=""
                    credit=""
                >
                </ImageEvent>
                <YouTubeEvent
                    date="NOV 2021"
                    id="uhusqjg41g8"
                    name="Gameplay example YouTube video"
                    text="** Gameplay example YouTube video **"
                />
                <ImageEvent
                    date="MAR 2022"
                    text="** Launching the complete game on the AppStore and PlayStore **"
                    src=""
                    alt=""
                    credit=""
                >
                </ImageEvent>
                <ImageEvent
                    date="APR 2022"
                    text="** Launching the token and crypto expansion for the game **"
                    src=""
                    alt=""
                    credit=""
                >
                </ImageEvent>
            </Events>
        </Timeline>
    );
}


export default function TimelineFeatures() {
    return (
        <section>
            <div className="container">
                <App />
            </div>
        </section>
    );
}