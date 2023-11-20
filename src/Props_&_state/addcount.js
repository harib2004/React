import React, { Component } from "react";

export default class AddCount extends Component {
    state = { count: 0 }


    increment = () => (this.setState({ count: this.state.count + 1 }))
    decrement = () => (this.setState({ count: this.state.count - 1 }))
    render() {
        return (
            <div>
                <h1>The count is {this.state.count}</h1>
                <button onClick={this.increment}>Add</button><br></br>
                <button onClick={this.decrement}>Sub</button>
            </div >
        )
    }
}