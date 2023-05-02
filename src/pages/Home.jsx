import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

import styled from "styled-components";

const Main = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;

    max-width: 770px;
    margin: 0 auto;

    width: 100%;
    height: 100vh;
    gap: 50px;
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

    width: 100%;
    min-width: 150px;

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

    width: 100%;
    min-width: 150px;

    &:focus {
        outline: none;
        border-bottom: 2px solid #ba0000;
    }
`;

const Title = styled.h1`
    font-size: 2rem;
    font-family: "Lato", sans-serif;
    color: #000;
`;

const Subtitle = styled.h2`
    font-size: 20px;
    font-family: "Lato", sans-serif;
    color: #434141;
`;

function Home() {
    const [username, setUsername] = useState("");

    return (
        <>
            <Main>
                <Title>Gerador de Semaninha</Title>
                <Subtitle>
                    Porque não postar um story com os álbuns mais ouvidos da sua semana?
                </Subtitle>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    <Input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Nome de usuário do Last.fm"
                    />
                    <Link
                        to={`download/${username}`}
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <Button>Gerar Semaninha</Button>
                    </Link>
                </div>
                <Footer />
            </Main>
        </>
    );
}

export default Home;
