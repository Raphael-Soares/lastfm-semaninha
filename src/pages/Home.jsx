import { useState, useEffect, useRef } from "react";

import styled from "styled-components";

function Home() {
    const [username, setUsername] = useState("");

    return (
        <main>
            <div>
                <h1>Qual o seu username do lastfm?</h1>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <button onClick={getCharts}>
                    <span>Gerar semaninha</span>
                </button>
            </div>
        </main>
    );
}

export default Home;
