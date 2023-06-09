import { useState } from "react";

const TodoCreate = ({ createTodo }) => {

    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => {

        e.preventDefault();
        if(!title.trim()){
            return setTitle("")
        }
        createTodo(title);
        setTitle("")
    }
    return (
        <form onSubmit={handleSubmitAddTodo} className=" flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4">
            <span className="w- 5 inline-block h-5 rounded-full border-2"></span>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="w-full text-gray-400 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            ></input>
        </form>
    );
};

export default TodoCreate;
