import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { MdSearch } from "react-icons/md";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;

    width: 100%;
`;

const Button = styled.button`
    background-color: #d51007;
    color: #ffffff;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #ba0000;
    }
`;

const Input = styled.input`
    font-size: 16px;
    font-family: "Lato", sans-serif;
    color: #2c3e50;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #d51007;
    background-color: transparent;

    &:focus {
        outline: none;
        border-bottom: 2px solid #ba0000;
    }
`;

const Title = styled.h1`
    font-size: 36px;
    font-family: "Lato", sans-serif;
    color: #000;
`;

const Subtitle = styled.h2`
    font-size: 24px;
    font-family: "Lato", sans-serif;
    color: #000;
`;

function Home() {
    const [username, setUsername] = useState("");

    return (
        <div>
            <Main>
                <Title>Gerador de Semaninha</Title>
                <Subtitle>Gerador de imagem com os álbuns mais ouvidos da semana</Subtitle>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "50px",
                    }}
                >
                    <Input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username do Last.fm"
                    />
                    <Link to={`download/${username}`}>
                        <Button>
                            <MdSearch />
                        </Button>
                    </Link>
                </div>
            </Main>
        </div>
    );
}

export default Home;
