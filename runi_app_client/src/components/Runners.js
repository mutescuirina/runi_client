import React, { Component } from 'react'



class Runners extends Component {
	costructor (props) {
		super(props)
		this.state = {
			runners:[]
		}
	
	}
	componentDidMount() {
		fetch('/runners')
	.then(response => response.json())
	.then(json => console.log(json))
	.catch(err => console.log(err))
	}
	renderRunners() {
		const runners = this.state.runners.map(runner => <h1>runner.name</h1>)
	}
  render() {
    return (
      <div className="App">
				{this.renderRunners}
      </div>
    )
  }
}

export default Runners