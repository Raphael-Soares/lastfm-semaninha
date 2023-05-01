import { useState, useEffect, useMemo } from "react";
import axios from "axios";

import BASE_URL from "../utils/URLS";

function Album({ album, username }) {
    const [cover, setCover] = useState(null);

    useEffect(() => {
        async function getCover() {
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

            setCover(cover);
        }

        getCover();
    }, [album]);

    return <img src={cover} alt={album.name} />;
}

export default Album;
