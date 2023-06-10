const TodoFilter = ({ changedFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="dark:bg-gray-800 flex justify-center gap-4 rounded-md bg-white p-4">
                <button
                    onClick={() => changedFilter("all")}
                    className={`${
                        filter === "all"
                            ? "text-blue-600 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-600"
                    }`}
                >
                    All
                </button>
                <button
                    onClick={() => changedFilter("active")}
                    className={`${
                        filter === "active"
                            ? "text-blue-600 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-600"
                    }`}
                >
                    Active
                </button>
                <button
                    onClick={() => changedFilter("completed")}
                    className={`${
                        filter === "completed"
                            ? "text-blue-600 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-600"
                    }`}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
