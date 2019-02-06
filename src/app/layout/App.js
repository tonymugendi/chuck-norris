import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar'
import Categories from '../../components/jokes/Categories/Categories';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Categories />
            </div>
        );
    }
}

export default App;