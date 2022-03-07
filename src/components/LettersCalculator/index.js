import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {enteredValue: ''}

  onChangeLetters = event => {
    this.setState({enteredValue: event.target.value})
  }

  render() {
    const {enteredValue} = this.state

    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="search-container">
            <h1>Calculate the letters you enter</h1>
            <label htmlFor="searchLabel">Enter the phrase</label>
            <br />
            <input
              type="search"
              id="searchLabel"
              onChange={this.onChangeLetters}
              value={enteredValue}
              placeholder="Enter the phrase"
            />
            <p>No.of letters: {enteredValue.length}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
