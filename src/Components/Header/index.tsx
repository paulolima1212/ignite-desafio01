import style from './styles.module.scss';
import rocket from '../../Assets/rocket-img.svg';

export function Header() {
  return (
    <header className={style.header}>
      <img src={rocket} alt='rocket-image' />
      <h1 className={style.title}>
        <span className={style.to}>to</span>
        <span className={style.do}>do</span>
      </h1>
    </header>
  );
}
