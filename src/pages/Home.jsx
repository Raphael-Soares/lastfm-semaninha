import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import Imagem from "../assets/semaninha.png";

import { MdSearch } from "react-icons/md";

const Main = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px;

    width: 100%;
    gap: 50px;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

const ImagemExemplo = styled.img`
    height: 80vh;
    border-radius: 5px;
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
    font-size: 20px;
    font-family: "Lato", sans-serif;
    color: #434141;
`;

function Home() {
    const [username, setUsername] = useState("");

    return (
        <Main>
            <picture>
                <ImagemExemplo src={Imagem} alt="Exemplo de Semaninha" />
            </picture>

            <div>
                <Title>Gerador de Semaninha</Title>
                <Subtitle>Gera um story com os álbuns mais ouvidos da sua semana</Subtitle>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "50px",
                        paddingBottom: "10px",
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
                <hr />
            </div>
        </Main>
    );
}

export default Home;
