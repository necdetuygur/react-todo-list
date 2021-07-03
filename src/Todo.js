function ls(key, obj) {
    if (obj) {
        localStorage.setItem(key, JSON.stringify(obj));
    }
    if (localStorage.getItem(key) != null) {
        return JSON.parse(localStorage.getItem(key));
    } else {
        return [];
    }
}

let todos = ls("todos") || [];

const Todo = {
    "Add": function (todoTitle) {
        if (!todoTitle) {
            return;
        }
        const todo = {
            id: "TodoID_" + new Date() * 1,
            title: todoTitle,
            time: new Date(),
            completed: false
        }
        todos.push(todo);
        updateTodos();
    },
    "Remove": function (todoId) {
        const index = todos.map(x => {
            return x.id;
        }).indexOf(todoId);
        todos.splice(index, 1);
        updateTodos();
    },
    "GetAll": function () {
        return ls("todos");
    },
    "Edit": function (todoId, todoTitle) {
        const index = todos.map(x => {
            return x.id;
        }).indexOf(todoId);
        if (todoTitle) {
            todos[index].title = todoTitle;
        }
        updateTodos();
    },
    "ToggleComplete": function (todoId) {
        const index = todos.map(x => {
            return x.id;
        }).indexOf(todoId);
        todos[index].completed = !todos[index].completed;
        updateTodos();
    }
};

function updateTodos() {
    ls("todos", todos)
}

export default Todo;