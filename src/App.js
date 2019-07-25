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
  }
  menuList() {
    if (this.state.menuDrop === true) {
      return(
        <div>
          <ul id='Menu'>
            <li>Home</li>
            <li>Story</li>
            <li>Projects</li>
            <li>Github</li>
            <li>Work History</li>
          </ul>
        </div>
      )
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className='App'>
          <h1>Michael I Welsh</h1>
          <button id='MenuButton' title='Menu' onClick={()=>{this.menuClick()}}>
          menu
          </button>
          {this.menuList()}
        </div>
      </React.Fragment>
    )
  }
}

export default App;
