import React, { Component } from 'react'
import ConfigView from './Components/ConfigView'
import InputBid from './Components/InputBid'
import Winner from './Components/Winner'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTrue: false,
      isWinner: false
    }
  }

  handleShow = () => {
    this.setState({ isTrue: true,})
  }

  handleWinner = () => {
    this.setState({ isWinner: true})
  }

  render() {
    return (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 30 }}>
          <div>
            <h1>SiteDetails</h1>
            <ConfigView />
          </div>
          
          <div>
            <button onClick={this.handleShow}>Bring The Bid</button>
            {this.state.isTrue ? <InputBid />  : null}
          </div>
          
          <div>
            <Winner winnerstatus={this.state.isTrue} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
