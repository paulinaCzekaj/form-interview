import type { FormValues } from './schema';

export type FormData = FormValues & {
  id: string;
};

export type ValidFieldNames = 'email' | 'name' | 'number';
