import { Link } from 'react-router-dom';

import Logo from '../Logo';

import './Header.css';

const Header = () => {
	return (
		<header className='Header'>
			<Link to="/">
				<Logo />
			</Link>

			<ul className='Header-menu'>
				<li className='Header-menu-item'>
					<Link to='/purchase'>Purchase</Link>
				</li>
				
				<li className='Header-menu-item'>
					<Link to='/orders'>My Orders</Link>
				</li>
				
				<li className='Header-menu-item'>
					<Link to='/sell'>Sell</Link>
				</li>

				<li className='Header-menu-item'>
					<Link to='/favourites'>Favourites</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
