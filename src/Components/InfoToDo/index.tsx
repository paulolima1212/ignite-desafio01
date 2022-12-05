import { useToDoContext } from '../../Hooks/useToDoContext';
import style from './styles.module.scss';

export function InfoToDo() {
  const { doneToDos, quantityToDo } = useToDoContext();
  return (
    <div className={style.infotodo}>
      <div className={style.created}>
        <strong>Created todos</strong>
        <span>{quantityToDo}</span>
      </div>
      <div className={style.done}>
        <strong>Done</strong>
        <span>
          {doneToDos} de {quantityToDo}
        </span>
      </div>
    </div>
  );
}
