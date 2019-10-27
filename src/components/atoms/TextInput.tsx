import classNames from 'classnames';
import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
}

export const TextInput: React.FunctionComponent<Props> = ({ className, children, ...props }) => {
  return (
    <input {...props} className={classNames('TextInput', className)}>
      {children}
    </input>
  );
};
