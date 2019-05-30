import React, { Component } from 'react'

class NewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value })
    }
    handleSubmit(event) {
        //make server/db call to put into out database
        event.preventDefault()
        fetch('/runners', {
            method: 'POST',
            body: JSON.stringify({ name: this.state.name }, { age: this.state.age }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(resJSON => {
                this.props.handleAddRunner(resJSON)
                this.setState({ name: '',age: '' })
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name"></label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <label htmlFor="age"></label>
                <input
                    type="text"
                    id="age"
                    name="age"
                    onChange={this.handleChange}
                    value={this.state.age}
                />
                <input
                    type="submit"
                    value="Add a Runner"
                />
            </form>
        )
    }
}

export default NewForm