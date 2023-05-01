import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { exportComponentAsPNG } from "react-component-export-image";

import BASE_URL from "../utils/URLS";

import axios from "axios";
import Canvas from "../components/Canvas";

function Download() {
    const { username } = useParams();

    const [charts, setCharts] = useState([]);
    const canvasRef = useRef(null);

    function handleDownload() {
        exportComponentAsPNG(canvasRef);
    }

    async function getCharts() {
        try {
            const response = await axios.get(
                `${BASE_URL}?method=user.getweeklyalbumchart&user=${username}&api_key=ac09e0c68fd78ef987cf26caf78ceac9&page=1&format=json`
            );
            setCharts(response.data.weeklyalbumchart.album.slice(0, 12));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCharts();
    }, [username]);

    useEffect(() => {
        if (charts.length >= 10) {
            handleDownload();
        }
    }, [charts]);

    return (
        charts.length > 0 && (
            <div
                style={{
                    backgroundColor: "#000",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <p
                    style={{
                        color: "#fff",
                        fontSize: "24px",
                        fontWeight: "700",
                        margin: "0",
                        padding: "10px",
                        textAlign: "center",
                        fontFamily: "Futura PT",
                    }}
                >
                    Se o dowload não começou automaticamente,
                    <a
                        onClick={handleDownload}
                        style={{
                            color: "#ff1b6d",
                            fontSize: "24px",
                            fontWeight: "700",
                            margin: "0",
                            padding: "10px",
                            textAlign: "center",
                            fontFamily: "Futura PT",
                        }}
                    >
                        clique aqui
                    </a>
                </p>
                {charts.length > 0 && (
                    <Canvas charts={charts} username={username} canvasRef={canvasRef} />
                )}
            </div>
        )
    );
}

export default Download;
