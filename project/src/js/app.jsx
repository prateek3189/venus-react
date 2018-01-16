import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                New Application
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
