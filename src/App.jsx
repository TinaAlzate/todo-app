import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
    {
        id: 1,
        title: "Completed online JavaScript bluuweb course",
        completed: true,
    },
    {
        id: 2,
        title: "Go to the gym",
        completed: false,
    },
    {
        id: 3,
        title: "10 minutes metitation",
        completed: false,
    },
    {
        id: 4,
        title: "Pick up groceries",
        completed: false,
    },
    {
        id: 5,
        title: "Complete todo app on Frontend Mentor",
        completed: true,
    },
];
const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: todos.length + 1,
            title, //también podriamos pasarle title.trim() para que limpie los caracteres vacios, sin embargo tal y como esta no se ven reflejados los espacios cuando se agrega un todo
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <Header />
            <main className="container mx-auto mt-8 px-4">
                <TodoCreate createTodo={createTodo} />
                <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo}/>
                <TodoComputed />
                <TodoFilter />
            </main>
            <footer className="mt-8 text-center">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
