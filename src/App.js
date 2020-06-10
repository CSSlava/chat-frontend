import React from 'react';
import { Route } from 'react-router-dom';

import { Auth, Home } from './pages';

function App() {
    return (
        <div className="wrapper">
            <Route exact path={['/', '/login']} component={Auth} />
            <Route exact path="/chat" component={Home} />
            <Auth />
        </div>
    );
}

export default App;
