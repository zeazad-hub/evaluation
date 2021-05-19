import React from 'react'
import './stylesheet.css'
import ItemBox from './components/ItemBox'
import InsertTable from './components/InsertTable/InsertTable.js'
import Type from './components/Type'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FileInserted: false
    }
  }

  render() {

    const handleClick = () => {
      this.setState({FileInserted: true});
    };

    return (
      <div className='App'>
        <label>Upload pivot.csv<input type="file" id='file' accept=".csv"></input></label>
        <button id='upload' onClick={handleClick}>Create Table</button>
  
        <div className="flexContainer">
          <ItemBox id='countries' className='itemBox' type={Type.Country} file={document.getElementById('file')} dataAvail={this.state.FileInserted}>
            <p>Countries</p>
          </ItemBox>
  
          <ItemBox id='products' className='itemBox' type={Type.Product} file={document.getElementById('file')} dataAvail={this.state.FileInserted}>
            <p>Products</p>
          </ItemBox>
        </div>
  
        <InsertTable 
          id='ins' 
          className='insertBox' 
          dataAvail={this.state.FileInserted} 
          file={document.getElementById('file')}
        > 
        </InsertTable>
  
      </div>
    );
  }
}

export default App;
