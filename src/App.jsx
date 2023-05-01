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
    const canvasRef = useRef(null);

    const username = "polyphiac";
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

    useEffect(() => {
        getCharts();
    }, []);

    return (
        <main>
            <div>
                <h1>Qual o seu username do lastfm?</h1>
                <input type="text" />
                <button>
                    <span>Gerar semaninha</span>
                </button>
            </div>
            {charts.length > 0 && (
                <Canvas charts={charts} username={username} canvasRef={canvasRef} />
            )}

            <button onClick={() => exportComponentAsPNG(canvasRef)}>Baixar imagem</button>
        </main>
    );
}

export default App;
