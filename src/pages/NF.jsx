import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

function NF() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/");
    }, []);

    return (
        <div>
            <h1>404</h1>
            <h2>Estamos te redirecionando de volta</h2>
        </div>
    );
}

export default NF;
