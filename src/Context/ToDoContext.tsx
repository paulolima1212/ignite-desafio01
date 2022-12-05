import { createContext, ReactNode, useEffect, useState } from 'react';

interface ToDoContextProps {
  listToDo: ToDoType[];
  setListToDo: (value: ToDoType[]) => void;
  quantityToDo: number;
  setQuantityToDo: (value: number) => void;
  doneToDos: number;
  setDoneToDos: (value: number) => void;
}

export const ToDoContext = createContext({} as ToDoContextProps);

export function ToDoContextProvider({ children }: { children: ReactNode }) {
  const [listToDo, setListToDo] = useState<ToDoType[]>([]);
  const [quantityToDo, setQuantityToDo] = useState(0);
  const [doneToDos, setDoneToDos] = useState(0);

  useEffect(() => {
    let todosList = JSON.parse(
      localStorage.getItem('todosList')!
    ) as ToDoType[];

    let dataToDoList = todosList;

    if (!todosList) {
      dataToDoList = [];
    }

    setListToDo(todosList);
    setQuantityToDo(dataToDoList.length);

    const doneTodos = dataToDoList.reduce((acc, todo) => {
      if (todo.isDone) {
        acc = acc + 1;
      }
      return acc;
    }, 0);
    setDoneToDos(doneTodos);
  }, []);

  return (
    <ToDoContext.Provider
      value={{
        listToDo,
        setListToDo,
        doneToDos,
        setDoneToDos,
        quantityToDo,
        setQuantityToDo,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}
