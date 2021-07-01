import React, {Component} from 'react';
import Form from './Form'

export default class Body extends Component {
    constructor() {
        super()

        this.state = {
            question: ""
        }
    }

    render() {
        return (
            <div className="App">
                <h1 className="heading">Welcome to our Website!</h1>
                <div className="body-text">
                <p>This website is the best way for you to stay current in whatever
                airplane rating you currently have. Whether you're a private, instrument,
                    commercial or ATP pilot, we have the resources to keep you current!</p>
                <p>
                    Feel free to browse our free areas to your heart's content. You'll find questions,
                    quizzes and answers and explanations for all of the things you once learned and may have
                    forgotten. We're all about knocking off the rust and getting you current again! Our resources
                    are also great for those who are current and want to stay on top of their game.
                <p>
                    Do you want to get ready for that flight review, or perhaps you're preparing for an
                    initial or re-current check-ride or written exam? Our resources are appropriate for everyone
                    who wants to learn about or re-learn the most exciting subject possible -- aviation!
                </p>
                </p>
                </div>
                <Form />
            </div>
        )
    }
}