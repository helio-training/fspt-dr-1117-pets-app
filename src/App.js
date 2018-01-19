import React, { Component } from 'react'
import './App.css'

const BASE_URI = `http://localhost:5000`

const getPets = async () => {
  const response = await fetch(`${BASE_URI}/pets`)
  if (response.status !== 200)
    console.error(response)
  return await response.json()
}

class App extends Component {

  state = {
    pets: [],
  }

  async componentDidMount() {
    const pets = await getPets()
    this.setState({ pets })
  }

  renderPet({ _id, name }) {
    return (
      <li key={_id}>{name}</li>
    )
  }

  render() {

    // getPets()
    //   .then(pets => this.setState({ pets }))


    const { pets } = this.state


    return (
      <div className="App">
        <h1>Pets</h1>{pets.map(pet => this.renderPet(pet))}
      </div>
    )
  }
}

export default App
