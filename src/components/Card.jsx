import React, { Component } from 'react'

class Card extends Component {
    render() {
        const { title, button, children } = this.props;
        return (
            <div className="card">
                <h5 className="card-header d-flex justify-content-between align-items-center">
                    {title}
                    {button}
                </h5>
                <div className="card-body">
                    {children}
                </div>
            </div>
        )
    }
}

export default Card;
