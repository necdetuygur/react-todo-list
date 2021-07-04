import React, { Component } from 'react';
import moment from 'moment';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Card from './Components/Card';
import Button from './Components/Button';
import Modal from './Components/Modal';
import Input from './Components/Input';
import Todo from './Todo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            todoTitle: ""
        };

        this.modalInputOnChange = this.modalInputOnChange.bind(this);
    }

    componentDidMount() {
        this.refreshTodos();
    }

    refreshTodos() {
        this.setState({
            todos: Todo.GetAll()
        });
    }

    modalInputOnChange(text) {
        this.setState({
            todoTitle: text
        })
    }

    render() {
        return (
            <div className="container mt-3">



                <Modal title="Todo Title" id="addNew" okClick={() => { Todo.Add(this.state.todoTitle); this.refreshTodos(); }} okButtonText="OK" cancelButtonText="Cancel">
                    <Input
                        id="todoTitle"
                        title="Todo Title"
                        onChange={this.modalInputOnChange}
                        value={this.state.todoTitle}
                        onEnterKeyPress={() => {
                            Todo.Add(this.state.todoTitle);
                            this.refreshTodos();
                        }}
                    />
                </Modal>






                <div className="row justify-content-md-center">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <Card title="React Todo List" button={
                            <Button type="success" text="Add New" modalId="addNew" onClick={
                                () => {
                                    setTimeout(() => {
                                        document.getElementById("todoTitle").focus();
                                    }, 333);
                                }
                            } />
                        }>
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
                                            <Button type="secondary" onClick={() => {
                                                Todo.ToggleComplete(todo.id);
                                                this.refreshTodos();
                                            }} text={todo.completed ? "Set Incomplete" : "Set Complete"} />
                                            <Button type="primary" onClick={() => {
                                                Todo.Edit(todo.id, prompt("Todo Title", todo.title));
                                                this.refreshTodos();
                                            }} text="Edit" />
                                            <Button type="danger" onClick={() => {
                                                if (window.confirm("Are you sure?")) {
                                                    Todo.Remove(todo.id);
                                                    this.refreshTodos();
                                                }
                                            }} text="Remove" />
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
