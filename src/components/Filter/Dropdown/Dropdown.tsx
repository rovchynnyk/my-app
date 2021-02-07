import { 
  useCallback, useEffect, useRef, useState,
 } from 'react';
import cn from 'classnames';

import { capitalize } from '../../../utils';

import './Dropdown.css';

type PropsT = {
  title: string, 
  initialValue:string,
  onItemClick: (itemTitle: string, dropdownTitle: string) => void,
  items: string[],
}

const Dropdown = ({ 
  title, initialValue, onItemClick, items,
 }: PropsT) => {
  const [
    open, setOpen,
  ] = useState(false);

  const rootRef= useRef<HTMLDivElement>(null);

  const toggleDropdownOpen = useCallback(() => {
    setOpen((opened) => !opened);
  }, []);

  useEffect(() => {
    const handleMouseDown = (ev: MouseEvent) => {
      if (!rootRef.current?.contains(ev.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [setOpen]);

  const handleItemClick = useCallback((itemTitle) => {
    toggleDropdownOpen();
    onItemClick(capitalize(itemTitle), title)
  }, [
    onItemClick, toggleDropdownOpen, title,
  ]);

  return (
    <div 
      className='Dropdown-container' 
      ref={rootRef}
    >
      <span className='Dropdown-title'>
        {capitalize(title)}
      </span>
      <div>
        <div 
          className='List-title' 
          onClick={toggleDropdownOpen}
        >
          {initialValue}
          <i className={cn({ 'List-arrow': !open }, { 'List-arrow-down': open })} />
        </div>

        {open && (
          <ul className='List'>
            {items.map((item) => {
              return (
                <li 
                  key={item}
                  className='List-item'
                  onClick={handleItemClick.bind(null, item)}
                >
                  {capitalize(item)}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
};

export default Dropdown;
