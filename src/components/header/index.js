import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<h1>Party Time</h1> 
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Banana</Link>
			<Link activeClassName={style.active} href="/profile/Judge Dredd">Judge Dredd</Link>
			<Link activeClassName={style.active} href="/profile/Yo Mama">Yo Mama</Link>
		</nav>
	</header>
);

export default Header;
