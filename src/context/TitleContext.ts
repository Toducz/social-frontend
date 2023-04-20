import { createContext } from 'react';

export type TitleContextType = {
  title: string;
  setTitle: (title: string) => unknown;
};

const TitleContext = createContext<TitleContextType>(undefined);

export default TitleContext;
