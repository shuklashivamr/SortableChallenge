import React, { Component } from 'react'
import config from '../Data/config.json'


export class ConfigView extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
                {
                    config.sites.map((site, i) => {
                        return (
                            <div key={i}>
                                <div>
                                    <p><b>SiteName:</b> {site.name}</p>
                                    <div><b>Bidders:</b> {site.bidders.map((bidder, i) => {
                                        return(
                                        <ul key={i}>
                                                <li><b>{bidder}</b></li>
                                        </ul>
                                        )
                                    })}</div>
                                    <p><b>Floor:</b> {site.floor}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <h2>
                    Bideers
                </h2>
                {
                    config.bidders.map((bidder,i) => {
                        return(
                            <ul key={i}>
                                <li>
                                    <p><b>Name:</b> {bidder.name}</p>
                                    <p><b>Adjustment:</b> {bidder.adjustment}</p>
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
            </React.Fragment>
        )
    }
}

export default ConfigView;
