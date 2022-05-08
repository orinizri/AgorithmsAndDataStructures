import React, { Component } from 'react'

export class Try extends Component {
    static defaultProps = {
        name: 'Hello World'
    }
    render() {
        return (
            <div>static</div>
        )
    }
}

export class ChildComponent extends Try {
    render() {
        console.log(this.props)
        return (
            <div>Child</div>
        )
    }
}