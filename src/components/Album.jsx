import { useState, useEffect, useMemo } from "react";
import axios from "axios";

function Album({ album, username }) {
    const [cover, setCover] = useState(null);

    useEffect(() => {
        async function getCover() {
            const response = await axios.get(
                `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=ac09e0c68fd78ef987cf26caf78ceac9&artist=${album.artist["#text"]}&username=${username}&album=${album.name}&format=json`
            );

            let cover = response.data.album.image[4]["#text"];

            // verifica se a resposta tem uma imagem
            if (!cover) {
                const artistResponse = await axios.get(
                    `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${album.name}&limit=1&api_key=ac09e0c68fd78ef987cf26caf78ceac9&format=json`
                );

                // obtém a imagem do artista
                cover = artistResponse.data.results.albummatches.album[0].image[4]["#text"];
            }

            setCover(cover);
        }

        getCover();
    }, [album]);

    return <img src={cover} alt={album.name} />;
}

export default Album;
