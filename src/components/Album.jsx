import { useState, useEffect, useMemo } from "react";
import axios from "axios";

function Album({ album, username }) {
    const [cover, setCover] = useState(null);

    useEffect(() => {
        async function getCover() {
            const response = await axios.get(
                `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=ac09e0c68fd78ef987cf26caf78ceac9&artist=${album.artist["#text"]}&album=${album.name}&format=json&username=${username}`
            );
            setCover(response.data.album.image[3]["#text"]);
        }
        getCover();
    }, [album]);

    return <img src={cover} alt={album.name} />;
}

export default Album;
