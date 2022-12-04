import { Header, CreateToDo, InfoToDo, NoToDo, ToDo } from '../Components';

import style from './styles.module.scss';

export function Home() {
  return (
    <div>
      <Header />
      <div className={style.main}>
        <div className={style.createnewtodo}>
          <CreateToDo />
        </div>
        <InfoToDo />
        {/* <NoToDo /> */}
        <ToDo />
      </div>
    </div>
  );
}
