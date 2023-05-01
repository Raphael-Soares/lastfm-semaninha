import React from "react";
import styled from "styled-components";

import Album from "./Album";

const CanvasBoard = styled.div`
    display: flex;
    flex-direction: column;

    background: black;

    width: 1080px;
    height: 1920px;
    color: #fff;
    padding-top: 10px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;

    & > img {
        width: 360px;
        height: 360px;
    }
`;

const Title = styled.h1`
    font-size: 72px;
    font-weight: 700;
    margin: 0;
    padding: 16px;
    text-align: center;
    padding: 10px;
    font-family: "Futura PT", sans-serif;
    color: #ff1b6d;
`;

const Name = styled(Title)`
    color: #fff;
    font-size: 64px;
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
        </CanvasBoard>
    );
}

export default Canvas;
