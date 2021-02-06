import { Link } from 'react-router-dom';
import Logo from '../Logo';

import './NotFound.css';

const NotFound = () => {
  return (
    <div className='NotFound-container'>
      <Logo extraClassName='NotFound-logo' />

      <h1 className='NotFount-title'>
        404 - Not Found
      </h1>

      <p className='NotFound-description'>
        Sorry, the page you are looking for does not exist. <br/>
        You can always go back to the <Link to='/' className='NotFound-link'>homepage</Link>.
      </p>
    </div>
  );
};

export default NotFound;
