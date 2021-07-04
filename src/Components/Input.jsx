import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    updateInputValue(evt) {
        this.props.onChange(evt.target.value);
        this.setState({
            inputValue: evt.target.value
        });
    }

    render() {
        return (
            <div className="input-group mb-3">
                <span className="input-group-text">{this.props.title}</span>
                <input
                    id={this.props.id}
                    type={this.props.type}
                    className="form-control"
                    placeholder={this.props.title}
                    value={this.state.inputValue}
                    onChange={evt => this.updateInputValue(evt)}
                    onKeyPress={evt => evt.key === "Enter" ? this.props.onEnterKeyPress(evt) : 0}
                />
            </div>
        );
    }
}

export default Input;
