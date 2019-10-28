import classNames from 'classnames';
import React, { HTMLProps } from 'react';
import ReactDOM from 'react-dom';
import { Paper } from '../atoms/Paper';

interface Props extends HTMLProps<HTMLDivElement> {
  className?: string;
}

export const DialogContent: React.FunctionComponent<Props> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div {...props} className={classNames('DialogContent', className)}>
      {children}
    </div>
  );
};

export const DialogActions: React.FunctionComponent<Props> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div {...props} className={classNames('DialogActions', className)}>
      {children}
    </div>
  );
};

export const Dialog: React.FunctionComponent<Props> = ({ className, children, ...props }) => {
  return ReactDOM.createPortal(
    <div className="Dialog__outer">
      <div className="Dialog__sheet" />
      <div className="Dialog__main-wrapper">
        <Paper {...props} className={classNames('Dialog__main', className)}>
          {children}
        </Paper>
      </div>
    </div>,
    document.body,
  );
};
