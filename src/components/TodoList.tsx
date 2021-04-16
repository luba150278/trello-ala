import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { TodoAction } from '../types/todo';

const TodoList: React.FC = () => {
  const { page, loading, error, limit, todos } = useTypeSelector((state) => state.todo);
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];
  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <h2>Todos</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id}-{todo.title}
        </div>
      ))}
      <div className="mt-2" style={{ display: 'flex' }}>
        {pages.map((p) => (
          <div
            key={p}
            onClick={(): TodoAction => setTodoPage(p)}
            style={{ border: p === page ? '2px solid green' : '1px solid gray', padding: 10 }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
