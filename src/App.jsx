import React, { Component } from 'react';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Card from './Components/Card';
import Button from './Components/Button';
import Todo from './Todo';
import Swal from 'sweetalert2';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        this.refreshTodos();
    }

    refreshTodos() {
        this.setState({
            todos: Todo.GetAll()
        });
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row justify-content-md-center">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <Card title="React Todo List" button={<Button type="success" onClick={
                            () => {
                                Swal.fire({
                                    title: 'Add New',
                                    input: 'text',
                                    inputLabel: 'Add New Todo',
                                    inputValue: '',
                                    showCancelButton: true
                                }).then(result => {
                                    if (result.isConfirmed) {
                                        Todo.Add(result.value);
                                        this.refreshTodos();
                                    }
                                });
                            }
                        } text="Add New" />}>
                            <div className="list-group list-group-flush">
                                {(this.state.todos.length < 1) ? (
                                    <div>
                                        <div>Your todo list is empty ☁️</div>
                                        <div>Press the "Add New" button to add a new todo 🚀</div>
                                    </div>
                                ) : (this.state.todos.map((todo, key) => (
                                    <div className="list-group-item" key={key}>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="m-1">
                                                {
                                                    todo.completed ? (
                                                        <del>{todo.title}</del>
                                                    ) : (
                                                        <div>{todo.title}</div>
                                                    )
                                                }
                                            </h5>
                                            <small className="m-1">{moment(todo.time).format("YYYY-MM-DD HH:mm:ss")}</small>
                                        </div>
                                        <div className="d-flex w-100 justify-content-center">
                                            <Button type="secondary w-100" onClick={
                                                () => {
                                                    Todo.ToggleComplete(todo.id);
                                                    this.refreshTodos();
                                                }
                                            } text={todo.completed ? "Set Incomplete" : "Set Complete"} />
                                            <Button type="primary" onClick={
                                                () => {
                                                    Swal.fire({
                                                        title: 'Edit',
                                                        input: 'text',
                                                        inputLabel: todo.title,
                                                        inputValue: todo.title,
                                                        showCancelButton: true
                                                    }).then(result => {
                                                        if (result.isConfirmed) {
                                                            Todo.Edit(todo.id, result.value);
                                                            this.refreshTodos();
                                                        }
                                                    });
                                                }
                                            } text="Edit" />
                                            <Button type="danger" onClick={
                                                () => {
                                                    Swal.fire({
                                                        title: 'Are you sure?',
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonColor: '#3085d6',
                                                        confirmButtonText: 'Yes!',
                                                        cancelButtonColor: '#d33',
                                                        cancelButtonText: 'No!'
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            Todo.Remove(todo.id);
                                                            this.refreshTodos();
                                                        }
                                                    });
                                                }
                                            } text="Remove" />
                                        </div>
                                    </div>
                                )))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
