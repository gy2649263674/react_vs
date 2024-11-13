
import logo from "./assets/logo.svg";
import "./App.css";

// @ts-ignore
import React, { useEffect, useState } from "react";


// @ts-ignore
const stylePassed: string[] = [""];
// time to string
interface TimeDivided {
    time: string[];
}

function Greet({ time }: TimeDivided) {
    const interval = parseInt(time[0], 10);
    let greet = "";
    if (interval < 12) {
        greet = "Good Morning";
    } else if (interval < 18) {
        greet = "Good Afternoon";
    } else if (interval < 24) {
        greet = "Good Evening";
    } else {
        greet = "要死啊还不睡觉!!!";
    }
    return <h1 className="Greet">{greet}</h1>;
}

function TimeDigit({ time }: TimeDivided) {
    return (
        <div className="Time-text">
            <span id="hour">{time[0]}:</span>
            <span id="minute">{time[1]}:</span>
            <span id="second">{time[2]}</span>
        </div>
    );
}

function Timer() {
    const [timeSplit, setTimeSplit] = useState<string[]>(["", "", ""]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeSplit(new Date().toLocaleTimeString().split(":"));
        }, 999);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <div className="Time-box">
                <Greet time={timeSplit} />
                <div className="Time-text">
                    <TimeDigit time={timeSplit} />
                </div>
            </div>
        </>
    );
}

function App() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>hello</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React{" "}
                    </a>{" "}
                </header>{" "}
            </div>
        </>
    );
}

export { App, Timer };