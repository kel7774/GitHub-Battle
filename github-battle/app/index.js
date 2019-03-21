var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

//state
//lifecycle methods/events - allows you to hook into specific moments in the lifecycle of a component
//UI - only real thing a component needs

class App extends React.Component{
    render() {
        return (
            <div>
                Hello World!
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)