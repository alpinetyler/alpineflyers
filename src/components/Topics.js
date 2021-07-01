import React, {Component} from 'react';

export default class Topics extends Component {
    constructor() {
        super()

        this.state = {
            topics: ""
        }
    }

    render() {
        return (
            <div className="App">
                <h1 className="heading">Topics</h1>
                <div className="body-text">
                <p>This Page will have a list and a search for topics that you'd like to study</p>
                
                </div>
                
            </div>
        )
    }
}