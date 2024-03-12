import { TodoId, Todo as TodoType } from '../types';

interface Props extends TodoType {
  handlerRemove: ({ id }: TodoId) => void;
  onToggleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, 'id' | 'completed'>) => void;
}

const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  handlerRemove,
  onToggleCompleted,
}) => {
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={(event) => {
          onToggleCompleted({ id, completed: event.target.checked });
        }}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          handlerRemove({ id });
        }}
      ></button>
    </div>
  );
};
export default Todo;
