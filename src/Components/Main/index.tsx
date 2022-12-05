import style from './styles.module.scss';

import { ToDo } from '../ToDo';
import { NoToDo } from '../NoToDo';
import { useToDoContext } from '../../Hooks/useToDoContext';

export function Main() {
  const { listToDo } = useToDoContext();

  function handleRenderTodos() {
    if (listToDo.length > 0) {
      return listToDo.map((todo) => {
        return (
          <ToDo
            id={todo.id}
            content={todo.content}
            isDone={todo.isDone}
            key={todo.id}
          />
        );
      });
    }

    return <NoToDo />;
  }

  return <div className={style.main}>{handleRenderTodos()}</div>;
}
