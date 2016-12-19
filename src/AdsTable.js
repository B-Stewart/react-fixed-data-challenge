import React, { Component } from 'react';
import { fake_api_request } from './Api.js'
import {Table, Column, Cell} from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.min.css';

function formatDataToRows(ads, ads_metrics) {
  if(!ads || !ads_metrics)
    return []
  return ads["ads"].map(ad => {
    let metric = ads_metrics["rows"].find(row => row.remote_id === ad.remote_id)
    let row = [ad.name]
    ads_metrics["column_names"].forEach(col_name => {
      row.push(metric[col_name])
    })
    return row
  })
}

class AdsTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ads: null,
      ads_metrics: null,
      windowWidth: window.innerWidth,
      columnWidths: {}
    };
    this.handleResize = this.handleResize.bind(this)
    this.onColumnResizeEndCallback = this.onColumnResizeEndCallback.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    this.setState({
      ads: fake_api_request("/ads"),
      ads_metrics: fake_api_request("/ads_metrics")
    })
  }

  handleResize(e) {
    this.setState({
      windowWidth: window.innerWidth
    });
  }

  onColumnResizeEndCallback(newColumnWidth, columnKey) {
    this.setState(({columnWidths}) => ({
      columnWidths: {
        ...columnWidths,
        [columnKey]: newColumnWidth,
      }
    }));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    const { ads, ads_metrics, windowWidth, columnWidths} = this.state

    const rows = formatDataToRows(ads, ads_metrics)
    const column_names = ads_metrics ? ["name", ...ads_metrics["column_names"]] : []
    // Make the table responsive
    const responsiveWidth = windowWidth*.95
    // Give a minimum width to the responsive table
    const tableWidth = responsiveWidth < 500 ? 500 : responsiveWidth
    const rowHeight = 50

    return (
      <div className="data-table">
         <Table
            onColumnResizeEndCallback={this.onColumnResizeEndCallback}
            rowHeight={rowHeight}
            rowsCount={rows.length}
            width={tableWidth}
            // Make height match number of rows giving room for slider at the bottom
            height={rowHeight*(rows.length+1) + 20}
            headerHeight={rowHeight}>
            {
              column_names.map((col_name, i) =>
                <Column key={col_name}
                  columnKey={col_name}
                  header={<Cell>{col_name}</Cell>}
                  cell={({rowIndex, ...props}) => (
                    <Cell {...props}>
                      {rows[rowIndex][i]}
                    </Cell>
                  )}
                  width={columnWidths[col_name] ? columnWidths[col_name]: 200}
                  isResizable={true}
                  fixed={i === 0 ? true : false}
                />
              )
            }
          </Table>
      </div>
    );
  }
}

export default AdsTable;
