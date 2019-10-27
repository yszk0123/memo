import classNames from 'classnames';
import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLTextAreaElement> {
  className?: string;
}

export const TextArea: React.FunctionComponent<Props> = ({ className, children, ...props }) => {
  return (
    <textarea {...props} className={classNames('TextArea', className)}>
      {children}
    </textarea>
  );
};
