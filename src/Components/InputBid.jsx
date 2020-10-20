import React, { Component } from 'react'
import input from '../Data/input.json'


export class InputBid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isWinner: false,
        }
}

    
    handleShow = () => {
        this.setState({ isWinner: true })
    }

    render() {
        return (
            <div>
                
                <h1>Requested Bids</h1>
                {
                    input.map((bid, i) => {
                        return (
                            <div key={i}>
                                <p><b>SiteName:</b> {bid.site}</p>
                                <div><b>Units:</b> {bid.units.map((unit, i) => {
                                    return (
                                        <div key={i}>
                                        <ul>
                                            <li>{unit}</li>
                                        </ul>
                                        </div>
                                    )
                                })}</div>
                                <div><b>Bids:</b> {bid.bids.map((bid, i) => {
                                    return (
                                        <div key={i}>
                                        <ul>
                                            <li>
                                                <p><b>Bidder: </b>{bid.bidder}</p>
                                                <p><b>Unit: </b>{bid.unit}</p>
                                                <p><b>Bid:</b>${bid.bid}</p>
                                            </li>
                                            </ul>
                                        </div>
                                    )
                                })}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default InputBid
