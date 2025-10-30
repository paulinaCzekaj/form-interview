import { useCallback, useState, type PropsWithChildren } from 'react';
import { DataContext } from './DataContext';
import type { FormData } from '../types/types';
import type { FormValues } from '../types/schema';

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<FormData[]>([
    { id: '1', email: 'test@test.com', name: 'Test', number: 123456789 },
    { id: '2', email: 'test2@test.com', name: 'Test2', number: 123456789 },
  ]);

  const addData = useCallback((data: FormValues) => {
    setData((prev) => [...prev, { ...data, id: crypto.randomUUID() }]);
  }, []);

  const removeData = useCallback((id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <DataContext value={{ data, addData, removeData }}>{children}</DataContext>
  );
};

export default DataContextProvider;
