import React from 'react';
import './App.css';
import ExchangeApp from './components/ExchangeApp';

function App() {
    return (
        <div className="App">
            <div className="container mt-5">
                <h1 className="text-center mb-4">Currency Exchange</h1>
                <ExchangeApp />
            </div>
        </div>
    );
}

export default App;
