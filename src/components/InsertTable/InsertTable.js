import React from 'react'
import InsBox from './InsBox'
import Table from './Table'
import './insertStyle.css'
import { Type } from '../Type.js';

class InsertTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataAvail: this.props.dataAvail,
            countries: [],
            products: [],
            shouldRem: true
        };

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem(item) {
        if(item.type === Type.Country) {
            var clist = this.state.countries.slice();
            if(!(clist.includes(item.id))) {
                clist.push(item.id);
            }
            else {
                this.setState({shouldRem: false});
            }
            this.setState({countries: clist});
        }
        else {
            var plist = this.state.products.slice();
            if(!(plist.includes(item.id))) {
                plist.push(item.id);
            }
            else {
                this.setState({shouldRem: false});
            }
            this.setState({products: plist});
        }
    }

    removeItem(item) {
        if(this.state.shouldRem) {
            if(item.type === Type.Country) {
                var clist = this.state.countries.slice();
                var cind = clist.indexOf(item.id);
                clist.splice(cind, 1);
                this.setState({countries: clist});
            }
            else {
                var plist = this.state.products.slice();
                var pind = plist.indexOf(item.id);
                plist.splice(pind, 1);
                this.setState({products: plist});
            }
        }
        else {
            this.setState({shouldRem: true});
        }
    }

    render() {

        if(this.props.dataAvail) {
            return (
                <div>
                    <div>
                        <div id='box' className="flexbox">
                            <InsBox 
                                id={this.props.id} 
                                className={this.props.className}
                                dropFunc={this.addItem}
                                dragFunc={this.removeItem}
                                products={this.state.products}
                                countries={this.state.countries}
                            >
                            </InsBox>
                        </div>
    
                        <Table
                            products={this.state.products}
                            countries={this.state.countries}
                            file={this.props.file}
                        >
                        </Table>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div id='box' className="flexbox">
                    <InsBox 
                        id={this.props.id}
                        className={this.props.className}
                        dropFunc={this.addItem}
                        dragFunc={this.removeItem}
                        countries={this.state.countries}
                        products={this.state.products}
                    >
                    </InsBox>
                </div>
            )
        }
    }
}

export default InsertTable;