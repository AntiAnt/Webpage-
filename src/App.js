import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuDrop: false,
    }
  }
  menuClick() {
    this.setState(prev => ({
      menuDrop: !prev.menuDrop
    }))
    if (this.state.menuDrop === true) {
      console.log(true)
      let title = document.getElementById('MenuButton');
      title.title = 'true';
    }else{
      console.log(false)
      let title = document.getElementById('MenuButton');
      title.title = 'false';
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className='App'>
          <h1>Michael I Welsh</h1>
          <button id='MenuButton' title='Menu' onClick={()=>{this.menuClick()}}>
          {this.props.title}
          </button>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
