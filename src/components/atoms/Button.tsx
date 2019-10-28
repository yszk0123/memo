import classNames from 'classnames';
import React from 'react';

interface Props {
  className?: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent) => void;
}

const Button: React.FunctionComponent<Props> = ({ className, children, disabled, onClick }) => {
  return (
    <button className={classNames('Button', className)} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export const DefaultButton: React.FunctionComponent<Props> = ({ className, ...props }) => {
  return <Button className={classNames('DefaultButton', className)} {...props} />;
};

export const PrimaryButton: React.FunctionComponent<Props> = ({ className, ...props }) => {
  return <Button className={classNames('PrimaryButton', className)} {...props} />;
};

export const SecondaryButton: React.FunctionComponent<Props> = ({ className, ...props }) => {
  return <Button className={classNames('SecondaryButton', className)} {...props} />;
};
