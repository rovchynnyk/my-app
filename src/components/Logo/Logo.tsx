import cn from 'classnames';

import logo from '../../logo.png';

import './Logo.css';

type PropsT = {
  extraClassName?: string,
}

const Logo = ({ extraClassName }: PropsT) => {
  return (
    <span className={cn('Logo-container', extraClassName)}>
      <img 	
        alt="Logo" 
        className='Logo' 
        src={logo}
      />
    </span>
  );
};

export default Logo;
