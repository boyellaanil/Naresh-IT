import React from 'react';
import ClassState from './ClassState';
import FunctionState from './FunctionState';
import Example1 from './Example1';

class App extends React.Component {
    render() {
        return (
            <>
                <ClassState/>
                <FunctionState/>
                <Example1/>
            </>
        )
    }
}
export default App;