import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div className="card">
                <h5 className="card-header d-flex justify-content-between align-items-center">
                    {this.props.title}
                    {this.props.button}
                </h5>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Card;
