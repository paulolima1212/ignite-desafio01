import { Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';

import style from './styles.module.scss';

export function ToDo({ content, isDone }: ToDoType) {
  const [done, setDone] = useState(false);

  function handleChangeToDo() {
    setDone((prev) => !prev);
  }

  useEffect(() => {
    setDone(isDone);
  }, []);

  return (
    <div className={style.todo}>
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
      <Trash size={24} />
    </div>
  );
}
