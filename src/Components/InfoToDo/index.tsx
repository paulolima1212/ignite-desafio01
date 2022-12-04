import style from './styles.module.scss';

export function InfoToDo() {
  return (
    <div className={style.infotodo}>
      <div className={style.created}>
        <strong>Created todos</strong>
        <span>0</span>
      </div>
      <div className={style.done}>
        <strong>Done</strong>
        <span>0</span>
      </div>
    </div>
  );
}
