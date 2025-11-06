import React from 'react';
import ReactDOM from 'react-dom/client';

//creating a basic class-based component
class ClassComponent extends React.Component{
    render(){
        return <section>
            <h1>I am from Class-Based Component</h1>
            <h2>i am h2 tag from Class-Based Component</h2>
        </section>
    }
}
export default ClassComponent;