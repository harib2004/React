import React, { Component } from "react";

export default class ClassProps extends Component {
    render() {
        return (
            <div>
                <h1>This is a class {this.props.name} component</h1>
            </div>
        )
    }
}