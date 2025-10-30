import { createContext } from 'react';
import type { FormData } from '../types/types';
import type { FormValues } from '../types/schema';

export type DataContextType = {
  data: FormData[];
  addData: (data: FormValues) => void;
  removeData: (id: string) => void;
};

export const DataContext = createContext<DataContextType>({
  data: [],
  addData: () => {},
  removeData: () => {},
});
