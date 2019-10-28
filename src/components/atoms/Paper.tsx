import classNames from 'classnames';
import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  className?: string;
}

export const Paper: React.FunctionComponent<Props> = ({ className, children, ...props }) => {
  return (
    <div {...props} className={classNames('Paper', className)}>
      {children}
    </div>
  );
};
