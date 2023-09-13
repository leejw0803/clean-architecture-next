import fetchTodos from '@/adapters/api/todo';
import getQueryClient from '../stores';
import { dehydrate, useQuery } from '@tanstack/react-query';

const TODO_QUERY_KEY = 'todos';

export const prefetchTodos = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery([TODO_QUERY_KEY], fetchTodos);
  const dehydratedState = dehydrate(queryClient);

  return dehydratedState;
};

export const useGetTodos = () => {
  const getTodos = useQuery<Todo[]>({
    queryKey: [TODO_QUERY_KEY],
    queryFn: fetchTodos,
  });

  return getTodos;
};
