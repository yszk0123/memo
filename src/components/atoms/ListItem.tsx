import classNames from 'classnames';
import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
}

export const ListItem: React.FunctionComponent<Props> = ({ className, children, ...props }) => {
  return (
    <div {...props} className={classNames('ListItem', className)}>
      {children}
    </div>
  );
};
