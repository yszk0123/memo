import classNames from 'classnames';
import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
}

export const List: React.FunctionComponent<Props> = ({ className, children, ...props }) => {
  return (
    <div {...props} className={classNames('List', className)}>
      {children}
    </div>
  );
};
