#!/bin/bash
function formatcra() {
    cd src
    rm setupTests.js reportWebVitals.js App.test.js App.css logo.svg
    echo "function App() {
    return (
        <div>
        </div>
    );
    }
    export default App;
    " > App.js
    echo "import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
    );
    " > index.js
    mkdir components
    mkdir assets
    cd ..
    echo "Deleted unnecessary files, created useful folders."
}