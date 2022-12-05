import { useState } from 'react';
import { Header, CreateToDo, InfoToDo, Main } from '../Components';
import { ToDoContextProvider } from '../Context/ToDoContext';

import style from './styles.module.scss';

export function Home() {
  return (
    <ToDoContextProvider>
      <Header />
      <div className={style.main}>
        <div className={style.createnewtodo}>
          <CreateToDo />
        </div>
        <InfoToDo />
        <Main />
      </div>
    </ToDoContextProvider>
  );
}
