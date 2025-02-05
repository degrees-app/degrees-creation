import { Provider } from 'react-redux';
import { store } from '../../store';
import React from 'react';

type SkinsProviderProps = {
  children: React.JSX.Element;
};

const SkinsProvider = ({ children }: SkinsProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default SkinsProvider;
