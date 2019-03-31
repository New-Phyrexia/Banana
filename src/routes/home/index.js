import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<div> <button type="button">Happy Banana!</button></div>
		<div><img src={require('./Blank+_68e177b448baad9a7f8a4e5de6f66639.jpg')}/></div>
	</div>
);

export default Home;
