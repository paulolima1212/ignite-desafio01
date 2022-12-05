import { useContext } from 'react';
import { ToDoContext } from '../Context/ToDoContext';

export function useToDoContext() {
  return useContext(ToDoContext);
}
