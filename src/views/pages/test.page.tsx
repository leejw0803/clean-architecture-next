import { useGetTodos } from '@/services/intents/todo.intent';

function TestPage() {
  const { data: todos } = useGetTodos();

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
