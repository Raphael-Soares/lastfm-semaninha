import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Download from "./pages/Download";
import NF from "./pages/NF";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/download/:username" element={<Download />} />
                    <Route path="*" element={<NF />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
