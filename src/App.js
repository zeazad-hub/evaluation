import React from 'react'
import './stylesheet.css';
import Item from './components/Item.js';
import ItemBox from './components/ItemBox.js';
import InsertBox from './components/InsertBox.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FileInserted: false
    }
  }

  render() {

    const handleClick = () => {this.setState({FileInserted: true})};

    return (
      <div className="App">
        <label>Upload pivot.csv<input type="file" id="pivot" accept=".csv"></input></label>
        <button id='upload' onClick={handleClick}>Create Table</button>
  
        <div className="flexContainer">
          <ItemBox id='countries' className='itemBox' type='C'>
            <p>Countries</p>
            <Item id='Asia' className="item" type='C'>
              Asia
            </Item>
            <Item id='Australia' className='item' type='C'>
              Australia
            </Item>
            <Item id='Central America' className='item' type='C'>
              Central America
            </Item>
            <Item id='Europe' className='item' type='C'>
              Europe
            </Item>
            <Item id='Middle East' className='item' type='C'>
              Middle East
            </Item>
            <Item id='Sub-saharan Africa' className='item' type='C'>
              Sub-saharan Africa
            </Item>
            <Item id='North America' className='item' type='C'>
              North America
            </Item>
          </ItemBox>
  
          <ItemBox id='products' className='itemBox' type='P'>
            <p>Products</p>
            <Item id='Baby Food' className="item" type='P'>
              Baby Food
            </Item>
            <Item id='Beverages' className="item" type='P'>
              Beverages
            </Item>
            <Item id='Cereal' className="item" type='P'>
              Cereal
            </Item>
            <Item id='Clothes' className="item" type='P'>
              Clothes
            </Item>
            <Item id='Cosmetics' className="item" type='P'>
              Cosmetics
            </Item>
            <Item id='Fruits' className="item" type='P'>
              Fruits
            </Item>
            <Item id='Household' className="item" type='P'>
              Household
            </Item>
            <Item id='Meat' className="item" type='P'>
              Meat
            </Item>
            <Item id='Office' className="item" type='P'>
              Office
            </Item>
            <Item id='Personal' className="item" type='P'>
              Personal
            </Item>
            <Item id='Snacks' className="item" type='P'>
              Snacks
            </Item>
            <Item id='Vegetables' className="item" type='P'>
              Vegetables
            </Item>
          </ItemBox>
        </div>
  
        <InsertBox 
          id='ins' 
          className='insertBox' 
          dataAvail={this.state.FileInserted} 
          file={document.getElementById('pivot')}
        > 
        </InsertBox>
  
      </div>
    );
  }
}

export default App;
