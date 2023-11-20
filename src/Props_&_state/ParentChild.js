import React from "react";

export default function Parent() {
    return (
        <div>
            <Child name="Arun"></Child>
            <Child2 age={18} ></Child2>
        </div >
    )
}
function Child(props) {
    return (
        <div>
            <h1>{props.name} is a  ______</h1>
        </div>
    )
}
function Child2(props) {
    return (
        <div className="child2">
            <h1>Age {props.age}</h1>
        </div>
    )
}