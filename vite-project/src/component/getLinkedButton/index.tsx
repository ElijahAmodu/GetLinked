import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';


type Props = {
  isLoading?: boolean;
  dataNoBg?: boolean;
};

const GetLinkedButton: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & Props>> = ({children, ...props}) => {
  const {className, disabled, isLoading, dataNoBg, ...buttonProps} = props;

  const buttonClasses = classNames(
    'rounded-lg', 
    'px-4', 
    'py-[15px]', 
    'font-acorn', 
    'text-white', 
    'text-[18px]', 
    'font-bold', 
    'max-2xl:py-[10px]', 
    'max-2xl:text-[16px]', 
    {
      'bg-gradient-to-r from-red-500 to-blue-500': !dataNoBg,
      'hover:opacity-90': !disabled && !isLoading,
    },
    className 
  );

  return (
    <button 
      {...buttonProps}
      disabled={disabled || isLoading}
      className={buttonClasses}
      data-no-bg={dataNoBg}
    >{isLoading ? 'Loading...' : children}</button>
  )
}

export default GetLinkedButton;