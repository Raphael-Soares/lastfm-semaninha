import React from "react";
import styled from "styled-components";

const Container = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    font-family: "Lato", sans-serif;
    font-size: 14px;
    padding: 10px 5px;
    border: none;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100vw;
`;

function Footer() {
    return (
        <Container>
            <p>Criado por Raphael Soares</p>
        </Container>
    );
}

export default Footer;
