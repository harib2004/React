import React, { Component } from "react";

export default class StateClass extends Component {
    state = { name: "SKCET", place: "CBE" }


    changeCollege = () => (this.setState({ name: "SONA", place: "SLM" }))
    render() {
        return (
            <div>
                <h1>I am studying in {this.state.name} at {this.state.place}</h1>
                <button onClick={this.changeCollege}>Click here</button>
            </div>
        )
    }
}