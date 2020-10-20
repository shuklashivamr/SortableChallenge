import React, { Component } from 'react'
import config from '../Data/config.json'
import input from '../Data/input.json'

export class Winner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            winner1: "",
            result: [],
            isStatus: false,
            Obj: [],
            showArray: [],
            lowerBid: "",
            diffSite: "",
        }
    }
    
    winner = () => {
    
        let configName = "";
        let minValue = "";
        let inputName = "";
        let unitArray = [];
        let resultArray = [];
        let nameArray = [];

        // collecting site name and floor value from config.json
        config.sites.map((name) => {
            configName = name.name;
            minValue = name.floor;
                    
            // collecting all authrised auction names from config.jason
            name.bidders.map((bid) => {
                nameArray.push(bid)
            })
        })

        // config.bidders.map((adj) => {
        //         console.log(adj.adjustment)
        // })
        

        input.map((bid) => {
            
            inputName = bid.site; //sitename from input.json
        
            bid.units.map((unit) => {
                unitArray.push(unit); //auction units array from input.json
            })
          
            var temp = bid.bids;  
            temp.sort((a, b) => b.bid - a.bid); // sorting all bids in desceding ordered
           
            
            temp.map((data) => {
                
                // checking auction units and bidders are described in config.json or not
                let x = unitArray.includes(data.unit);
                let y = nameArray.includes(data.bidder);
                
                // sitename check
                if (inputName === configName) {

                    // both bidder and auction unit are described check
                    if (x === true && y === true) {
                        for (let i = 0; i < unitArray.length; i++) {
                            
                            // if auction value is less than the floor value
                            if (data.bid < minValue) {
                                 this.setState({
                                lowerBid: "Sorry: bid is lower than floor value",
                                 })
                                console.log(data.bid ," < ", minValue)
                                console.log("Sorry: bid is lower than floor value")
                            }

                            // getting the result array with winning data with auction units, bidders, bids
                            if (unitArray[i] === data.unit && data.bid > minValue ) {
                                resultArray.push(data);
                                resultArray.sort((a, b) => a.bid - b.bid);
                                unitArray[i] = null;
                            } 
                        }
                    } 
                } else {
                    this.setState({
                        diffSite: "Sorry bids came from other website", 
                     })
                    console.log("Sorry bids came from other website");
                    console.log(inputName," != ",configName);
                }
            })
        })
        
        const Obj = JSON.stringify(resultArray);
        
        this.setState({
            Obj: JSON.stringify(resultArray),
            showArray:resultArray,
        })
        console.log(Obj);
    }

    handleClick = () => {
        this.setState({
            isStatus : true,
        })
        this.winner();
    }

    render() {
        return (
            <div>
                {this.props.winnerstatus ?
                    <button onClick={this.handleClick}>Show Result</button> :
                null}
                {this.state.isStatus ?
                    <div>
                   
                        <h1>Winner List: </h1>
                        

                {/* result printed with map         */}
                <div>{this.state.showArray.map((bid,i) => {
                    return (
                        <div key={i}>
                            <ul>
                                <li>
                                    <p><b>Name: </b>{bid.bidder}</p>
                                    <p><b>Unit: </b>{bid.unit}</p>
                                    <p><b>Price: </b>{bid.bid}</p>
                                </li>
                            </ul>
                        </div>
                        
                    )
                })}</div>
                        <p>{this.state.lowerBid}</p>
                        <p>{this.state.diffSite}</p>
                        <p>Check the Console</p>
                    </div>
                    :
                    null}
                <p>{this.state.Obj}</p>
                <br />
                
                
            </div>
        )
    }
}

export default Winner
