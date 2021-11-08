
import puppies from './puppies.jpeg';
import styles from './Header.module.scss';


console.log(styles);
export function Header() {
	return (
		<div className="header-wrapper">
			<header className={styles.error}>
				<h1>Im the header</h1>
				<img src={puppies} alt="puppies" />
			</header>
		</div>
		
	)
} 