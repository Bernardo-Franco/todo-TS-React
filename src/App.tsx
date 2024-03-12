import { useState } from 'react';
import { Todos } from './components/Todos';
import './index.css';
import { FilterValue, TodoId, TodoTitle, Todo as TodoType } from './types';
import { TODO_FILTERS } from './const';
import Footer from './components/Footer';
import Header from './components/Header';

const mockTodos = [
  { id: '1', title: 'todo 1', completed: false },
  { id: '2', title: 'todo 2', completed: false },
  { id: '3', title: 'todo 3', completed: true },
];
const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

  const handlerRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const handleRemoveOnClearCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newId = crypto.randomUUID();
    const newTodo = {
      id: newId,
      title,
      completed: false,
    };
    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Header addTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        handlerRemove={handlerRemove}
        onToggleCompleted={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleRemoveOnClearCompleted}
      />
    </div>
  );
};

export default App;
