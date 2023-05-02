import React from "react";
import styled from "styled-components";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Container = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    font-family: "Lato", sans-serif;
    font-size: 16px;
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
            <a href="https://www.linkedin.com/in/raphael-soares-a71896217/">
                <AiFillLinkedin
                    style={{
                        fontSize: "20px",
                    }}
                />
            </a>
            <p>Criado por Raphael Soares</p>
            <a href="https://github.com/Raphael-Soares">
                <AiFillGithub
                    style={{
                        fontSize: "20px",
                    }}
                />
            </a>
        </Container>
    );
}

export default Footer;
