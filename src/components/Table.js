import React from 'react'
import './tableStyle.css'
const Parser = require('papaparse');

class Table extends React.Component {
    constructor(props) {
        super(props);
        console.log('Constructor Ran');
        console.log('Table was made');
    }

    travData() {
        var cost = [];
        var prof = [];
        Parser.parse(this.props.pivot.files[0],
        {
            skipEmptyLines: true,
            complete: function(results) {
                cost = results.data.slice(2, 15);
                prof = results.data.slice(42);
            }
        });
        this.pivotCost = cost.slice();
        this.pivotProfit = prof.slice();
    }

    renderCost() {
        var pivotCost = [];
        console.log('render Cost Ran');
        const products = this.props.products.slice();
        Parser.parse(this.props.pivot.files[0],
            {
                skipEmptyLines: true,
                complete: function(results) {
                    pivotCost = results.data.slice(2, 15);
                    console.log('First label in pivCost: ' + pivotCost[0][0]);
                    return pivotCost.map((elem, index) => {
                        for(let i = 0; i<products.length; i++) {
                            console.log(elem[0]);
                            if(elem[0] === products[i]) {
                                return (
                                    <tr>
                                        <td>{elem[0]}</td>
                                        <td>500</td>
                                        <td>500</td>
                                    </tr>
                                );
                            }
                            else {
                                return null;
                            }
                        }
                    });
                }
            });
    }

    render() {
        return  (
            <table id='data'>
                <tbody>
                    <tr>
                        <th>Product</th>
                        <th>Country</th>
                        <th>Total Cost</th>
                        <th>Total Profit</th>
                    </tr>
                    {this.renderCost()}
                </tbody>
            </table>
        );
    }
}

export default Table;