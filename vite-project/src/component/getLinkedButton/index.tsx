import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import classes from './button.module.scss';

type Props = {
  isLoading?: boolean;
  dataNoBg?: boolean;
};

const GetLinkedButton: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & Props>> = ({children, ...props}) => {
  const {className, disabled, isLoading, dataNoBg, ...buttonProps} = props;
  return (
    <button 
      {...buttonProps}
      disabled={disabled || isLoading}
      className={classNames(className, classes.btn, (disabled || isLoading) ? classes.btn__inactive : '')}
      data-no-bg={dataNoBg}
    >{isLoading ? 'Loading...' : children}</button>
  )
}

export default GetLinkedButton;