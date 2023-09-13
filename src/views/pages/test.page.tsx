import { useGetTodos } from '@/services/intents/todo.intent';

function TestPage() {
  const getTodos = useGetTodos();
  const todos = getTodos.data;
  return (
    <div>
      <div>
        {todos?.map((data) => (
          <>{data.title}</>
        ))}
      </div>
    </div>
  );
}

export default TestPage;
