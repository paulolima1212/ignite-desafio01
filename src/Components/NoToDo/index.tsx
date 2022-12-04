import clipboard from '../../Assets/clipboard.png';

import style from './styles.module.scss';

export function NoToDo() {
  return (
    <div className={style.beforenotodo}>
      <div className={style.notodo}>
        <img src={clipboard} alt='clipboard image' />
        <p>You have no ToDo's registered</p>
        <span>Create ToDo's and organized your items to do</span>
      </div>
    </div>
  );
}
