import React from 'react';
import './styles/App.scss';
import HelloWorld from './components/HelloWorld.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    )
  }
}

export default App;
