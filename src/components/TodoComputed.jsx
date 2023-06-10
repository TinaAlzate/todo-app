const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="dark:bg-gray-800 flex justify-between rounded-b-md bg-white px-4 py-4">
            <span className="text-gray-400">
                {computedItemsLeft} items left
            </span>
            <button onClick={clearCompleted} className="text-gray-400">
                Clear completed
            </button>
        </section>
    );
};

export default TodoComputed;
