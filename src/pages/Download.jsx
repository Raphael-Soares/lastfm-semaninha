import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import BASE_URL from "../utils/URLS";

import axios from "axios";
import Canvas from "../components/Canvas";

function Download() {
    const { username } = useParams();

    const [charts, setCharts] = useState([]);
    const [albuns, setAlbuns] = useState([]);

    async function getCover(album) {
        try {
            const response = await axios.get(
                `${BASE_URL}?method=album.getinfo&api_key=ac09e0c68fd78ef987cf26caf78ceac9&artist=${album.artist["#text"]}&username=${username}&album=${album.name}&format=json`
            );

            let cover = response.data.album.image[3]["#text"];

            if (!cover) {
                const artistResponse = await axios.get(
                    `${BASE_URL}?method=album.search&album=${album.name}&limit=1&api_key=ac09e0c68fd78ef987cf26caf78ceac9&format=json`
                );

                cover = artistResponse.data.results.albummatches.album[0].image[3]["#text"];
            }

            return cover;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    useEffect(() => {
        async function fetchCharts() {
            try {
                const response = await axios.get(
                    `${BASE_URL}?method=user.getweeklyalbumchart&user=${username}&api_key=ac09e0c68fd78ef987cf26caf78ceac9&page=1&format=json`
                );
                const charts = response.data.weeklyalbumchart.album.slice(0, 12);
                setCharts(charts);

                const covers = await Promise.all(charts.map(getCover));
                setAlbuns(covers.filter((cover) => cover !== null));
            } catch (error) {
                console.error(error);
            }
        }

        fetchCharts();
    }, [username]);

    return (
        <div className="download">
            {albuns.length > 0 && <Canvas images={albuns} username={username} />}
        </div>
    );
}

export default Download;
