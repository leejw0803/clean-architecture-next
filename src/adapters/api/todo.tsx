const fetchTodos = async () => {
  const todosResponse = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos = await todosResponse.json();

  return todos;
};

export default fetchTodos;
