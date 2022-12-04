import { Trash } from 'phosphor-react';

import style from './styles.module.scss';

export function ToDo() {
  return (
    <div className={style.todo}>
      <input type='checkbox' name='done' id='done' />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <Trash size={24} />
    </div>
  );
}
