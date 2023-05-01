import { useState, useEffect, useRef } from "react";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 800px;
    padding: 0 20px;
`;

const DownloadButton = styled.button`
    background-color: #dc143c;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    padding: 10px 20px;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #b3122c;
    }
`;

function StoryCollage({ images, username }) {
    const canvasRef = useRef(null);
    const [canvasUrl, setCanvasUrl] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const imgSize = canvas.width / 3;

        // Preenche o fundo preto
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Carrega imagens
        const promises = images.map((url) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.crossOrigin = "anonymous";
                img.onload = () => resolve(img);
                img.src = url;
            });
        });

        // Calculate horizontal and vertical offsets
        const horizontalOffset = (canvas.width - 3 * imgSize) / 2;
        const verticalOffset = (canvas.height - 4 * imgSize) / 2 + 100;

        // Draw images on canvas
        Promise.all(promises).then((images) => {
            for (let i = 0; i < 12; i++) {
                const row = Math.floor(i / 3);
                const col = i % 3;
                const img = images[i];
                const x = col * imgSize + horizontalOffset;
                const y = row * imgSize + verticalOffset;
                ctx.drawImage(img, x, y, imgSize, imgSize);
            }

            // Draw header and footer text
            ctx.font = "bold 72px Arial";
            ctx.fillStyle = "#DC143C";
            ctx.textAlign = "center";
            ctx.fillText("Semaninha de ", canvas.width / 2, 220);
            ctx.font = "bold 64px Arial";
            ctx.fillStyle = "#fff";
            ctx.textAlign = "center";
            ctx.fillText(username, canvas.width / 2, 300);
            ctx.font = "bold 32px Arial";
            ctx.fillStyle = "#DC143C";
            ctx.fillText("semaninha.vercel.app", canvas.width / 2, canvas.height - 100);

            // Update canvasUrl state with data URL of canvas
            setCanvasUrl(canvas.toDataURL());
        });
    }, [images, username]);

    const handleDownloadClick = () => {
        // Create a link with the canvas URL and simulate a click to download the image
        const link = document.createElement("a");
        link.href = canvasUrl;
        link.download = "semaninha.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Container>
            {canvasUrl && (
                <DownloadButton onClick={handleDownloadClick}>Baixar imagem</DownloadButton>
            )}
            <canvas ref={canvasRef} width={1080} height={1920} />
        </Container>
    );
}

export default StoryCollage;
