import React from 'react'
import Table from './Table.js'
import './insertStyle.css'

class InsertBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataAvail: this.props.dataAvail,
            countries: Array(0),
            products: Array(0)
        };
    }

    handleDrop = e => {
        e.preventDefault();
        
        const item_id = e.dataTransfer.getData('item_id');
        const item = document.getElementById(item_id);
        item.style.display = "block";

        e.target.appendChild(item);

        const item_type = e.dataTransfer.getData('item_type');
        const name = e.dataTransfer.getData('name');

        if(item_type === 'P') {
            var prod = this.state.products.slice(); 
            prod.push(name);
            this.setState({products: prod});
        }
        else if (item_type === 'C') {
            var count = this.state.countries.slice(); 
            count.push(name);
            this.setState({countries: count});
        }
    }

    moveThru = e => {
        e.preventDefault();
    }

    render() {
        if(this.props.dataAvail) {
            console.log('Passed to Insert')
            return (
                <div>
                    <div>
                        <div id='box' className="flexbox">
                            <div 
                                id={this.props.id}
                                className={this.props.className}
                                onDrop={this.handleDrop}
                                onDragOver={this.moveThru}
                            >
                                <p>Insert Here</p>
                                {this.props.children}
                            </div>
                        </div>
    
                        <Table
                            products={this.state.products}
                            countries={this.state.countries}
                            pivot={this.props.file}
                        >
                        </Table>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div id='box' className="flexbox">
                    <div 
                        id={this.props.id}
                        className={this.props.className}
                        onDrop={this.handleDrop}
                        onDragOver={this.moveThru}
                    >
                    <p>Insert Here</p>
                    {this.props.children}
                    </div>
                </div>
            )
        }
    }
}

export default InsertBox;