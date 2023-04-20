import { ReactNode, useMemo, useState } from 'react';
import TitleContext, { TitleContextType } from '../context/TitleContext';

type Props = {
  children: ReactNode;
};

export function TitleProvider({ children }: Props) {
  const [title, setTitle] = useState('');
  const titleContext = useMemo<TitleContextType>(() => ({ title, setTitle }), [title]);
  return <TitleContext.Provider value={titleContext}>{children}</TitleContext.Provider>;
}
