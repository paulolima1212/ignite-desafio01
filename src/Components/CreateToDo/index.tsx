import { LockLaminated, PlusCircle } from 'phosphor-react';
import { FormEvent, useRef, useState } from 'react';
import { useToDoContext } from '../../Hooks/useToDoContext';
import style from './styles.module.scss';

export function CreateToDo() {
  const { setListToDo, setQuantityToDo } = useToDoContext();

  const todo = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event?.preventDefault();

    const listToDos = JSON.parse(
      localStorage.getItem('todosList')!
    ) as ToDoType[];

    if (listToDos) {
      const toDo = {
        id: String(listToDos.length + 1),
        content: todo.current!.value,
        isDone: false,
      } as ToDoType;

      listToDos.push(toDo);

      localStorage.setItem('todosList', JSON.stringify(listToDos));
      setListToDo(listToDos);
    } else {
      const listToDos = [] as ToDoType[];
      const toDo = {
        id: '1',
        content: todo.current!.value,
        isDone: false,
      } as ToDoType;

      listToDos.push(toDo);

      localStorage.setItem('todosList', JSON.stringify(listToDos));
      setListToDo(listToDos);
      setQuantityToDo(listToDos.length);
    }
    setQuantityToDo(listToDos.length);

    todo.current!.value = '';
  }

  return (
    <form onSubmit={handleSubmit} className={style.formtodo}>
      <input
        className={style.inputtodo}
        type='text'
        placeholder='Create new ToDo'
        name='todo'
        ref={todo}
      />
      <button type='submit'>
        <span>Create</span>
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
