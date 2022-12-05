import { Trash } from 'phosphor-react';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useToDoContext } from '../../Hooks/useToDoContext';

import style from './styles.module.scss';

export function ToDo({ id, content, isDone }: ToDoType) {
  const { setListToDo, setDoneToDos, listToDo, setQuantityToDo } =
    useToDoContext();

  const [done, setDone] = useState(false);

  const buttonDelete = useRef<HTMLButtonElement>(null);

  function handleChangeToDo(event: ChangeEvent<HTMLInputElement>) {
    const todoID = event.target.parentElement?.id;
    const isToDoDone = event.target.checked;

    const newListToDo = listToDo.map((todo) => {
      if (todo.id === todoID) {
        return {
          id: todo.id,
          content: todo.content,
          isDone: isToDoDone,
        };
      }
      return todo;
    });

    setListToDo(newListToDo);

    const doneToDos = newListToDo.reduce((acc, todo) => {
      if (todo.isDone) {
        acc = acc + 1;
      }
      return acc;
    }, 0);

    setDoneToDos(doneToDos);

    localStorage.setItem('todosList', JSON.stringify(newListToDo));

    setDone((prev) => !prev);
  }

  function handleDeleteToDo() {
    const idToDo = buttonDelete.current?.parentElement!.id;

    const newFilteredList = listToDo.filter((todo) => todo.id !== idToDo);

    localStorage.setItem('todosList', JSON.stringify(newFilteredList));

    setListToDo(newFilteredList);

    setQuantityToDo(newFilteredList.length);

    const doneToDos = newFilteredList.reduce((acc, todo) => {
      if (todo.isDone) {
        acc = acc + 1;
      }
      return acc;
    }, 0);

    setDoneToDos(doneToDos);
  }

  useEffect(() => {
    setDone(isDone);
  }, []);

  return (
    <div id={id} className={style.todo}>
      <input
        onChange={handleChangeToDo}
        checked={done}
        type='checkbox'
        name='done'
        id='done'
      />
      <div className={style.contenttodo}>
        <p className={done ? style.isdone : style.nodone}>{content}</p>
      </div>
      <button ref={buttonDelete} onClick={handleDeleteToDo}>
        <Trash size={24} />
      </button>
    </div>
  );
}
