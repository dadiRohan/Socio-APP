import React from 'react';
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Login from './login';

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <Header />
          <h1>Welcome To, {this.props.name}</h1>
          <Login />
        </div>
      </div>
    );
  }
}


const App = ReactDOM.createRoot(document.getElementById('app'));
App.render(<HelloMessage name="App" />);