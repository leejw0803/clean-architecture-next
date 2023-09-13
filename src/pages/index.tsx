import { prefetchTodos } from '@/services/intents/todo.intent';
import TestPage from '@/views/pages/test.page';

export async function getStaticProps() {
  const dehydratedState = prefetchTodos();

  return {
    props: {
      dehydratedState,
    },
  };
}

export default function Home() {
  return <TestPage />;
}
