'use strict';

require('babelify/polyfill'); // For Object.assign

var React = require('react');


class HelloWorld extends React.Component{
    render(){
        return (
            <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                        1
                    </div>
                    <div className="back">
                        <div className="cross"></div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = HelloWorld;
