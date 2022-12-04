import { PlusCircle } from 'phosphor-react';
import style from './styles.module.scss';

export function CreateToDo() {
  return (
    <form className={style.formtodo}>
      <input
        className={style.inputtodo}
        type='text'
        placeholder='Create new ToDo'
      />
      <button type='submit'>
        <span>Create</span>
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
