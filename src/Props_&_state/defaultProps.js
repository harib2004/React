import React from "react";

export default function Greetings(props) {
    return (
        <div>
            <h1>This is default {props.name} in {props.com}</h1>
        </div>
    )
}
Greetings.defaultProps = { com: "React" }