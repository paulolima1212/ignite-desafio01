import style from './styles.module.scss';

import { ToDo as todos } from '../../Mock/todos';
import { ToDo } from '../ToDo';
import { NoToDo } from '../NoToDo';

export function Main() {
  const existsToDos = todos.length > 0;

  function handleRenderTodos() {
    if (existsToDos) {
      return todos.map((todo) => {
        return (
          <ToDo content={todo.content} isDone={todo.isDone} key={todo.id} />
        );
      });
    }

    return <NoToDo />;
  }

  return <div className={style.main}>{handleRenderTodos()}</div>;
}
