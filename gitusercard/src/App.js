import React from 'react';
import './App.css';
import axios from 'axios';
import CardList from './components/cardlist'
import Card from './components/card'

import SearchForm from './components/searchform';

class App extends React.Component {
  state = {
    data: [],
    targetData: {},
    searchTerm: '',
    target: 'TLBdev'
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.target}/followers`)
      .then(res => {
        console.log(res.data)
        this.setState({
          data: res.data
        })
      }
      )
    axios.get(`https://api.github.com/users/${this.state.target}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          targetData: res.data
        })
      }
      )
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.target !== this.state.target) {
      axios.get(`https://api.github.com/users/${this.state.target}/followers`)
        .then(res => {
          console.log(res.data)
          this.setState({
            data: res.data
          })
        }
        )
      axios.get(`https://api.github.com/users/${this.state.target}`)
        .then(res => {
          console.log(res.data)
          this.setState({
            targetData: res.data
          })
        }
        )
    }
  }
  alterQuery = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      target: this.state.searchTerm,
      searchTerm: ''
    })

  }
  render() {
    return (
      <div className="App">
        <h1>{`Showing followers for:`}</h1>
        <Card data={this.state.targetData} />
        <form onSubmit={this.handleSubmit}>
          <input value={this.searchTerm} type='text' onChange={this.alterQuery} />
          <button type='submit' >Change User</button>
        </form>

        <CardList data={this.state.data} />
      </div>
    );
  }
}

export default App;
