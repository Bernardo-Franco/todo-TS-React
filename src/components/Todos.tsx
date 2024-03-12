import Todo from './Todo';

import { listOfTodos, Todo as TodoType, TodoId } from '../types';

interface Props {
  todos: listOfTodos;
  handlerRemove: ({ id }: TodoId) => void;
  onToggleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, 'id' | 'completed'>) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  handlerRemove,
  onToggleCompleted,
}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            handlerRemove={handlerRemove}
            onToggleCompleted={onToggleCompleted}
          />
        </li>
      ))}
    </ul>
  );
};
