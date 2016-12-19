import React, { Component } from 'react';
import Table from './AdsTable.js';

class App extends Component {
  render() {
    return (
      <section className="container-fluid app">
        <div className="row">
          <h3 className="center-txt">Ad Metrics Table</h3>
        </div>
        <div className="row">
          <Table />
        </div>
      </section>
    );
  }
}

export default App;
