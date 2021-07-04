import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div className="modal fade" id={this.props.id} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{this.props.cancelButtonText}</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.props.okClick}>{this.props.okButtonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
