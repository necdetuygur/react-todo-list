import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { type, onClick, text } = this.props;
        return (
            <button className={'m-1 btn btn-' + type} onClick={onClick}>{text}</button>
        );
    }
}

export default Button;
