import React from "react";


export default function Fe() {
    const d1 = { color: "Green" }
    const d2 = { color: "DarkBlue", fontSize: 16 }
    const d3 = { backgroundColor: "LightBlue", border: '1px solid blue', borderRadius: 5, padding: 10 }
    return (

        <div style={d3}>
            <h1 style={d1}>Inline JSX</h1>
            <p style={d2}>This is a paragraph with Inline styles applied</p>
        </div>
    );
}

