import React, { useState } from "react";

export default function Hooks() {
    const [college, setCollege] = useState("SKCET")
    return (
        <div>
            <h1>My college is {college}</h1>
            <button onClick={() => setCollege("SONA")}>click me</button>
        </div>
    )
}