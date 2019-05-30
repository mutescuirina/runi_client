import React from 'react'
import NewForm from './components/NewForm'
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      runners: []
    }
    this.getRunners = this.getRunners.bind(this)
    this.handleAddRunner = this.handleAddRunner.bind(this)
    this.deleteRunner = this.deleteRunner.bind(this)
  }
  componentDidMount() {
    this.getRunners()
  }
  deleteRunner(id) {
    fetch('/runners/' + id, {
      method: 'DELETE'
    })
    .then(response => {
      const findIndex = this.state.runners.findIndex(runner => runner.id === id)
      const copyRunners = [...this.state.runners]
      copyRunners.splice(findIndex, 1)
      this.setState({runners:copyRunners})
    })
  }
  getRunners() {
    fetch('/runners')
      .then(response => response.json())
      .then(json => this.setState({ runners: json }))
      .catch(
        err => console.log(err))
  }
  handleAddRunner (runner) {
    const copyRunners = [...this.state.runners]
    copyRunners.unshift(runner)
    this.setState({
      runners: copyRunners
    })
  }

  render() {
    // console.log(this.state.runners)
    return (
      <div className="container">
        <h1>Runners</h1>
        <NewForm handleAddRunner={this.handleAddRunner}/>
        <table>
          {this.state.runners.map(runner => {
            return <tr>
              <td>{runner.name}</td>
              <td>{runner.age}</td>
              <button>Edit</button>
              <td onClick={() => this.deleteRunner(runner.id)}>X</td>
              <form>
                
              </form>
            </tr>
          })}
        </table>

      </div>
    )
  }
}

export default App
