import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import Spells from './components/Spells';
import SpellDetail from './components/SpellDetail';

function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/" component={Main} />
                <Route path="/spells" component={Spells} />
                <Route path="/spells/:id" component={SpellDetail} />
            </Router>
        </div>
    );
}

export default App;
