import React from 'react'
import './tableStyle.css'
const Parser = require('papaparse');

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            costs: [],
            profits: []
        }

        this.setArr = this.setArr.bind(this);
        this.readFile();
    }

    readFile() {
        Parser.parse(this.props.file.files[0], {
            skipEmptyLines: true,
            complete: this.setArr
        });
    }

    setArr(result) {
        const data = result.data;
        const endP = this.getEndP(data);
        this.setState({ 
            costs: this.changeInd(data.slice(endP[0], endP[1]), data[endP[0]-1]),
            profits: this.changeInd(data.slice(endP[2]), data[endP[2]-1])
        });
    }

    //Takes in an arr and the index of the header
    changeInd(arr, header) {
        const hold = arr.map((elem, index) => {
            let e = [];
            for(let i = 0; i < header.length; i++) {
                if(i !== 0) {
                    e[header[i]] = parseFloat(elem[i]);
                }
                else {
                    e[0] = elem[i];
                }
            }
            return e;
        });

        var ans = [];
        for(let i = 0; i < hold.length; i++) {
            ans[hold[i][0]] = hold[i];
        }

        return ans;
    }

    checkHeader(elem) {
        for(let i = 0; i < elem.length; i++) {
            if((!(isNaN(parseInt(elem[i])))) || (elem[i] === '')) {
                return false;
            }
        }
        return true;
    }

    getEndP(data) {
        var blankRec = true;
        return data.reduce((result, elem, index) => {
            if((elem[0] === '') && blankRec) {
                blankRec = false;
                result.push(index);
            }

            if (this.checkHeader(elem)) {
                result.push(index+1);
            }

            return result;
        }, []);
    }

    renderCandP() {
        return this.props.products.map((prod, ind) => {
            return this.props.countries.map((count, index) => {
                return (
                    <tr key={ind + index}>
                        <td>{prod}</td>
                        <td>{count}</td>
                        <td>{this.state.costs[prod][count]}</td>
                        <td>{this.state.profits[prod][count]}</td>
                    </tr>
                );
            })
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
                    {this.renderCandP()}
                </tbody>
            </table>
        );
    }
}

export default Table;