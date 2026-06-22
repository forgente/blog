// This function generates a default cover image from a release number
import React from "react";
import GiteaLogo from "../../../static/img/logo.svg";

const TEXT_X = 280;
const VIEWBOX_HEIGHT = 285.75;

function getTextLayout(version) {
    const versionStr = String(version);
    const lines = [versionStr, "Release"];

    let fontSize = 54;
    if (versionStr.length > 11) {
        fontSize = 32;
    } else if (versionStr.length > 9) {
        fontSize = 36;
    } else if (versionStr.length > 7) {
        fontSize = 42;
    } else if (versionStr.length > 6) {
        fontSize = 48;
    }

    return { lines, fontSize };
}

export default function ReleaseCoverImage({ version }) {
    const { lines, fontSize } = getTextLayout(version);
    const lineHeight = fontSize * 1.15;
    const blockHeight = lines.length * lineHeight;
    const startY = (VIEWBOX_HEIGHT - blockHeight) / 2 + fontSize * 0.85;

    return (
        <svg
            viewBox="0 0 508 285.75"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            xmlSpace="preserve"
        >
            <g transform="matrix(0.6,0,0,0.6,-10,55)">
                <GiteaLogo />
            </g>
            <text
                fontSize={fontSize}
                fill="#5f9826"
                fontWeight="bold"
                fontFamily="var(--ifm-heading-font-family)"
                textAnchor="start"
                x={TEXT_X}
                y={startY}
            >
                {lines.map((line, index) => (
                    <tspan key={line} x={TEXT_X} dy={index === 0 ? 0 : lineHeight}>
                        {line}
                    </tspan>
                ))}
            </text>
        </svg>
    );
}
