import { useContext, useEffect } from 'react';
import TitleContext from '../context/TitleContext';

const useTitle = (title: string) => {
  const titleContext = useContext(TitleContext);
  useEffect(() => {
    titleContext.setTitle(title);
  }, [title]);
};

export default useTitle;
