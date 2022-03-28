import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/HelloWorld';

const App = () => {
    return <HelloWorld />;
};

ReactDOM.render(<App />, document.getElementById('root'));
