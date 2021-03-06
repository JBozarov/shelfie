import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'; 
import routes from './routes'; 


class App extends Component {

    render () {
        return (
            <div className="App">
                <Header /> 
                <div className='body' >
                  {routes}
                </div>
            </div>
            );
        }
    }

export default App;
