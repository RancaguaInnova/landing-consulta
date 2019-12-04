import React, { Component } from 'react';
import Tabletop from 'tabletop';

class GoogleSheetsInfo extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    Tabletop.init({
      key: '1fCHK2xikZxdPSTMJ1Lx1hbDnZ_mwmgkNdItAzUmso-Y',
      callback: googleData => {
        console.log('google sheet data --->', googleData)
        this.setState({
            data: googleData
          })
      },
      simpleSheet: true
    })
  }

  render() {
    console.log('updated state --->', this.state)
    return (
      <div className="App">
    
      </div>
    );
  }
}

export default GoogleSheetsInfo;