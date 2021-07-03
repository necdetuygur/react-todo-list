import React, { Component } from 'react';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Card from './Components/Card';
import Button from './Components/Button';
import Todo from './Todo';

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
                        <Card title="React Todo List" button={<Button type="success" onClick={() => { Todo.Add(window.prompt("Todo Title", "")); this.refreshTodos(); }} text="Add New" />}>
                            <div className="list-group list-group-flush">
                                {(this.state.todos.length < 1) ? (
                                    <div>
                                        <div>Your todo list is empty ☁️</div>
                                        <div>Press the "Add New" button to add a new todo 🚀</div>
                                    </div>
                                ) : (this.state.todos.map((todo, key) => (
                                    <div className="list-group-item" key={key}>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">
                                                {
                                                    todo.completed ? (
                                                        <del>{todo.title}</del>
                                                    ) : (
                                                        <div>{todo.title}</div>
                                                    )
                                                }
                                            </h5>
                                            <small>{moment(todo.time).format("YYYY-MM-DD HH:mm:ss")}</small>
                                        </div>
                                        <div className="d-flex w-100 justify-content-center">
                                            <Button type="secondary" onClick={() => { Todo.ToggleComplete(todo.id); this.refreshTodos(); }} text={todo.completed ? "Set Incomplete" : "Set Complete"} />
                                            <Button type="primary" onClick={() => { Todo.Edit(todo.id, prompt("Todo Title", todo.title)); this.refreshTodos(); }} text="Edit" />
                                            <Button type="danger" onClick={() => { if (window.confirm("Are you sure?")) { Todo.Remove(todo.id); this.refreshTodos(); } }} text="Remove" />
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
