import React, { Component } from "react";

export default class DclassProps extends Component {
    render() {
        return (
            <div>
                <h1>This is a {this.props.name} class {this.props.type}</h1>
            </div>
        )
    }
}

DclassProps.defaultProps = { name: "Default", type: "Props" }