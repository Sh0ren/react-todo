import TodoItem from './todo-item';
import PropTypes from 'prop-types';

function Todos({ todos, onDeleted, onToggleImportant }) {
  Todos.defaultProps = {
    todos: [],
    onDeleted: () => {},
    onToggleImportant: () => {},
  };

  const elements = todos.map((item) => (
    <TodoItem
      key={item.id}
      onDeleted={() => onDeleted(item.id)}
      onToggleImportant={() => onToggleImportant(item.id)}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...item}
    />
  ));
  return <ul className='todo-list'>{elements}</ul>;
}
export default Todos;

Todos.defaultProps = {};

Todos.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todos: PropTypes.arrayOf(PropTypes.object),
  onDeleted: PropTypes.func,
  onToggleImportant: PropTypes.func,
};
