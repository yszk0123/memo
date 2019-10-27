import React from 'react';
import { APP_NAME } from '../../constants';

interface Props {}

export const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="Layout">
      <header className="Layout__header">{APP_NAME}</header>
      {children}
    </div>
  );
};
