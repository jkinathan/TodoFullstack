import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { component } from 'react';


const list = [
  {
    "id":1,
    "title":"Learn Http",
    "body":"We are learning Http"
  },
  {
    "id":2,
    "title":"Learn Apis 2",
    "body":"We are learning Apis in django backend"
  },
  {
    "id":3,
    "title":"3rd Todo",
    "body":"This is just my third Todo"
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list };
  }

  render() {
    return (
      <div>
        {
        this.state.list.map(item => (
        <div key={item.id}>
        <h1>{item.title}</h1>
        <p>{item.body}</p>
      </div>
      ))
      }
      </div>
      );
      }
      }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
