import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
require('./stylesheets/main.css');

var axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        word pop!
        <Main/>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
