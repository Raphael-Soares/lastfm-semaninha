import axios from "axios";
import { useState, useEffect } from "react";

import Album from "./components/Album";

import styled from "styled-components";

const Canvas = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #000;
    color: #fff;
    height: 100vh;
    width: 100vw;
`;

function App() {
    const [charts, setCharts] = useState([]);
    async function getCharts() {
        const response = await axios.get(
            "http://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=mariagerotti&api_key=ac09e0c68fd78ef987cf26caf78ceac9&format=json"
        );

        setCharts(response.data.weeklyalbumchart.album);
        console.log(charts);
    }

    useEffect(() => {
        getCharts();
    }, []);
    return (
        <Canvas>{charts && charts.map((chart) => <Album key={chart.name} album={chart} />)}</Canvas>
    );
}

export default App;
