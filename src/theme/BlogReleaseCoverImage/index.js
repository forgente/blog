// This function generates a default cover image from a release number
import React from "react";
import GiteaLogo from "../../../static/img/logo.svg";

export default function ReleaseCoverImage({ version }) {
    return (
        <svg
            viewBox="0 0 508 285.75"
            xmlSpace="preserve"
        >
            <g transform="matrix(0.5,0,0,0.5,0,60)">
                <GiteaLogo />
            </g>
            <text
                xmlSpace="preserve"
                transform="matrix(1,0,0,1.0297241,-953.18156,-310.85658)"
                style={{
                    fontSize: "54px",
                    whiteSpace: "pre",
                    fill: "#5f9826",
                    fontWeight: "bold",
                    fontFamily: "Cantarell",
                    textAlign: "center",
                    textAnchor: "middle",
                }}
                x="93.893326"
                y="0"
            >
                <tspan x="1300" y="425">
                    <tspan>{version}</tspan>
                </tspan>
                <tspan x="1300" y="495">
                    <tspan>Release</tspan>
                </tspan>
            </text>
        </svg>
    );
}
