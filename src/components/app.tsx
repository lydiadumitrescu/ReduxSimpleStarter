import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Link className="btn btn-primary" to="/list/image">Foto list
        </Link>
        <Link className="btn btn-primary" to="/list/video">Video list
        </Link>
      </div>
    );
  }
}
export default App;
