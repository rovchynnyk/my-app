import { ReactNode } from 'react';
import './Button.css';

type PropsT = {
  children: ReactNode,
  onClick: () => void,
}

const Button = ({ children, onClick }: PropsT) => {
  return (
    <button 
      className='Button'
      type='button' 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
