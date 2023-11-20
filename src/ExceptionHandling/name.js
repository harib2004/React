import React from "react";
export default function Name({ studentName }) {
    studentName = "Haribaskar";
    if (studentName == "Haribaskar") {
        throw new Error("Haribaskar is not accepted");
    }
    return (
        <div>
            <h1>My name is {studentName}</h1>
        </div>
    )
}