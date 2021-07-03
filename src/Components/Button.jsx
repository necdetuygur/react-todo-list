import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button className={'m-1 btn btn-' + this.props.type} onClick={this.props.onClick}>{this.props.text}</button>
        );
    }
}

export default Button;
