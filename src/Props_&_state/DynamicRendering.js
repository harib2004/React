import React from "react";

function Greater() {
    return (
        <div>
            <h1>The number is greater than 10</h1>
        </div>

    )
}
function Smaller() {
    return (
        <div>
            <h1>The number is smaller than 10</h1>
        </div>

    )
}

export default function DynamicRendering(props) {
    const number = props.number
    return (
        <div>
            {
                number ? <Greater /> : <Smaller />
            }

        </div>

    )
}