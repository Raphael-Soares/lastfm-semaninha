import axios from "axios";
import { useState, useEffect, useRef } from "react";

import {
    exportComponentAsJPEG,
    exportComponentAsPDF,
    exportComponentAsPNG,
} from "react-component-export-image";

import styled from "styled-components";
import Canvas from "./components/Canvas";

function App() {
    const [charts, setCharts] = useState([]);

    const [username, setUsername] = useState("");
    const canvasRef = useRef(null);

    async function getCharts() {
        try {
            const response = await axios.get(
                `http://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=${username}&api_key=ac09e0c68fd78ef987cf26caf78ceac9&page=1&format=json`
            );
            setCharts(response.data.weeklyalbumchart.album.slice(0, 12));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <main>
            <div>
                <h1>Qual o seu username do lastfm?</h1>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <button onClick={getCharts}>
                    <span>Gerar semaninha</span>
                </button>
            </div>

            <button onClick={() => exportComponentAsPNG(canvasRef)}>Baixar imagem</button>

            {charts.length > 0 && (
                <Canvas charts={charts} username={username} canvasRef={canvasRef} />
            )}
        </main>
    );
}

export default App;
