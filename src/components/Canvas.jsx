import { forwardRef } from "react";
import styled from "styled-components";

import Album from "./Album";

const CanvasBoard = styled.div`
    display: flex;
    flex-direction: column;

    background: black;

    width: 100dvw;
    height: 100dvh;
    color: #fff;
    padding-top: 65px;
    padding-bottom: 10px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;

    & > img {
        width: calc(100dvw / 3);
        height: calc(100dvw / 3);
    }
`;

const Title = styled.h1`
    font-size: 36px;
    font-weight: 700;
    margin: 0;

    text-align: center;
    font-family: "Futura PT", sans-serif;
    color: #ff1b6d;
`;

const Name = styled(Title)`
    color: #fff;
    font-size: 24px;
    padding-bottom: 10px;
`;

const Markdown = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    text-align: center;
    font-family: "Futura PT", sans-serif;
    color: #ff1b6d;
`;

function Canvas({ charts, username, canvasRef }) {
    return (
        <CanvasBoard ref={canvasRef}>
            <Title>Semaninha de </Title>
            <Name>{username}</Name>
            <Grid>
                {charts &&
                    charts.map((chart) => (
                        <Album key={chart.name} album={chart} username={username} />
                    ))}
            </Grid>
            <Markdown>semaninha.vercel.app</Markdown>
        </CanvasBoard>
    );
}

export default Canvas;
