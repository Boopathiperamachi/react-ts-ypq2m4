import React, { Component } from 'react';
import { render } from 'react-dom';
import ListAllEmployee from './Component/ListAllEmployee';
import ProfileRegister from './Component/ProfileRegister';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <ProfileRegister />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
