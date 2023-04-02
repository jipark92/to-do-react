import { useState, useEffect } from "react";

function useFetch() {
    const [isLoading, setIsLoading] = useState(true);
    const [todoData, setToDoData] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 700);
    }, []);

    return { isLoading, todoData, setToDoData };
}

export default useFetch;
